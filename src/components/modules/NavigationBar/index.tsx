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
                    <a href="/">about</a>
                </li>
                <li className='nav-item'>
                    <a href="/">experience</a>
                </li>
                <li className='nav-item'>
                    <a href="/">projects</a>
                </li>
            </ul>
        </StyledComponent>
    );
};

export default ModuleNavigationBar;
