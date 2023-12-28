'use client'

import React, { useState, useEffect, FC } from 'react';

import StyledComponent from './styles';

interface Props {
   circleWidth: number
}

const CursorColorChanger: FC<Props> = ({ circleWidth = 600 }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => setCursorPosition({ x: e.clientX - circleWidth / 2, y: e.clientY - circleWidth / 2 })

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <StyledComponent
            $size={circleWidth}
            $top={cursorPosition.y}
            $left={cursorPosition.x}
        />
    );
};

export default CursorColorChanger;
