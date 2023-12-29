import React, { FC } from 'react';

import StyledComponent from './styles';
import { Option } from '@/types/Option';
import Image from 'next/image';
import Link from 'next/link';

export interface Props {
    date?: string;
    previewImage?: string;
    headline: string;
    subheadline: string;
    description: string;
    technologies: string[],
    externalLinks?: Option<string>[],
    href: string;
}

const ListElement: FC<Props> = ({
    date,
    previewImage,
    headline,
    subheadline,
    description,
    href,
    technologies,
    externalLinks,
}) => {
    return (
        <StyledComponent href={href} className='module-list-element' target="_blank">
            <div className='col-preview'>
                {previewImage && <Image src={previewImage} alt={headline} width={200} height={200} className='image' />}
                {date && <h3 className='data-date'>{date}</h3>}
            </div>

            <div className='col-content'>
                <h2 className='headline'>{headline}</h2>
                {subheadline && <h4 className='subheadline'>{subheadline}</h4>}
                <span className='description'>{description}</span>
                {(externalLinks && externalLinks.length) && (
                    <ul className='list-links'>
                        {externalLinks.map(({ label, value }) => (
                            <li key={value} className='list-item'>
                                <Link href={value} className='link'>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                {technologies && (
                    <ul className='list-technologies'>
                        {technologies.map((technology, idx) => (
                            <li key={idx} className='list-item'>
                                {technology}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </StyledComponent>
    );
};

export default ListElement;
