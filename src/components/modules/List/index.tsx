import React, { FC } from 'react';

import StyledComponent from './styles';

import Link from 'next/link';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { Option } from '@/types/Option';
import ListElement, { Props as ListElementProps } from '@/components/modules/ListElement';

interface Props {
    redirect?: Option<string>;
    elements: ListElementProps[];
}

const List: FC<Props> = ({ redirect, elements }) => {
    return (
        <StyledComponent className='module-list'>
            {(elements && elements.length) && elements.map((element) => <ListElement key={element.headline} {...element} />)}
            {redirect && (
                <Link href={redirect.value} className='link-redirect' target="_blank">
                    <span className='data-label'>{redirect.label}</span>
                    <KeyboardDoubleArrowRightIcon className='right-icon' />
                </Link>
            )}
        </StyledComponent>
    );
};

export default List;
