'use client'

import React, { FC } from 'react';

import StyledComponent from './styles';

import { useMousePosition } from '@/utils/cursor';

interface Props {
   circleWidth?: number
}

const ModuleCursorColorChanger: FC<Props> = ({ circleWidth = 1000 }) => {
    const { clientX, clientY } = useMousePosition();

    return (
        <StyledComponent className='module-cursor-color-changer'>
            <div className='cursor-above-effect' style={{
                height: circleWidth,
                width: circleWidth,
                top: clientY - circleWidth / 2,
                left: clientX - circleWidth / 2,
            }} />
        </StyledComponent>
    );
};

export default ModuleCursorColorChanger;
