'use client'

import React, { FC, ReactNode } from 'react';

import classNames from 'classnames';

import StyledComponent from './styles';

interface Props {
    children: ReactNode;
    className?: string;
}

const LayoutContainer: FC<Props> = ({ children, className }) => {
    return (
        <StyledComponent className={classNames(['layout-container', className])}>
            {children}
        </StyledComponent>
    );
};

export default LayoutContainer;
