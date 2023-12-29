'use client'

import React, { FC } from 'react';

import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import StyledComponent from './styles';

interface Props {}

const ModuleNavigationBar: FC<Props> = ({ }) => {
    const onClick = (e) => {
        e?.preventDefault();
    }

    return (
        <StyledComponent className='module-navigation-bar'>
            <nav className='nav'>
                <header className='header'>
                    <a href="/" className='headline'>Tykhoniuk Vladyslav</a>
                    <h3 className='sub-headline'>Full-stack developer</h3>

                    <span className='additional'>I build exceptional and accessible digital experiences for the web.</span>

                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href="about:blank" className='link' onClick={onClick}>about</a>
                        </li>
                        <li className='nav-item'>
                            <a href="about:blank" className='link' onClick={onClick}>experience</a>
                        </li>
                        <li className='nav-item'>
                            <a href="about:blank" className='link' onClick={onClick}>projects</a>
                        </li>
                    </ul>
                </header>

                <footer className='footer'>
                    <ul className='list'>
                        <li className='list-item'>
                           <Link href='https://www.linkedin.com/in/vlad-tykhoniuk/' target="_blank" className='link'>
                               <LinkedInIcon className='icon' />
                           </Link>
                        </li>

                        <li className='list-item'>
                            <Link href='https://github.com/Hibanaga' target="_blank" className='link'>
                                <GitHubIcon className='icon gh' />
                            </Link>
                        </li>
                    </ul>
                </footer>
            </nav>
        </StyledComponent>
    );
};

export default ModuleNavigationBar;
