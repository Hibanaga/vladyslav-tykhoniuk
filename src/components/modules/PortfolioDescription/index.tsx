'use client'

import React, { FC } from 'react';

import StyledComponent from './styles';

interface Props {
}

const ModulePortfolioDescription: FC<Props> = ({ }) => {
    return (
        <StyledComponent>
            <span className='content'>Experienced JavaScript developer with a strong base in JS, with experience in using JS for front-end and back-end development, as well as experience in using PHP in development.</span>
            <span className='content'>I have experience in implementing tasks of various levels of complexity, as well as extensive experience in cooperation with other developers.</span>
            <span className='content'>Open to new concepts and technologies, and able to learn new things quickly. An open-minded person who can always help and support colleagues.</span>
        </StyledComponent>
    );
};

export default ModulePortfolioDescription;
