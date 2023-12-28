import React, { FC } from 'react';

import StyledComponent from './styles';

interface Props {}

const ModuleNavigationBar: FC<Props> = ({ }) => {
    return (
        <StyledComponent className='module-navigation-bar'>
            <h1 className='headline'>Tykhoniuk Vladyslav</h1>
            <h3 className='sub-headline'>Full-stack developer</h3>

            <span className='additional'>I build exceptional and accessible digital experiences for the web.</span>

            <ul className='nav-list'>
                <li className='nav-item'>
                    <span className='line' />
                    <a href="/" className='link'>about</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='link'>experience</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='link'>projects</a>
                </li>
            </ul>
        </StyledComponent>
    );
};

export default ModuleNavigationBar;
