'use client'

import React, { useState, useEffect, FC } from 'react';

import StyledComponent from './styles';

interface Props {
   circleWidth?: number
}

const ModuleCursorColorChanger: FC<Props> = ({ circleWidth = 1000 }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => setCursorPosition({ x: e.clientX - circleWidth / 2, y: e.clientY - circleWidth / 2 })

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <StyledComponent
            className='module-cursor-color-changer'
            $size={circleWidth}
            $top={cursorPosition.y}
            $left={cursorPosition.x}
        />
    );
};

export default ModuleCursorColorChanger;
