'use client'

import React, { FC } from 'react';

import StyledComponent from './styles';

interface Props {}

const ModuleNavigationBar: FC<Props> = ({ }) => {
    const onClick = (e) => {
        e?.preventDefault();
    }

    return (
        <StyledComponent className='module-navigation-bar'>
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
        </StyledComponent>
    );
};

export default ModuleNavigationBar;
