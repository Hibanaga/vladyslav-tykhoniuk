import React, { FC } from 'react';

import StyledComponent from './styles';
import PortfolioDescription from '@/components/modules/PortfolioDescription';
import List from '@/components/modules/CaseStudyList';

interface Props {}

const ModuleContentSection: FC<Props> = ({ }) => {
    return (
        <StyledComponent className='module-content-section'>
            <PortfolioDescription />
            <List />
        </StyledComponent>
    );
};

export default ModuleContentSection;
