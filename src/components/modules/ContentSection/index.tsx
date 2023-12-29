import React, { FC } from 'react';

import StyledComponent from './styles';
import PortfolioDescription from '@/components/modules/PortfolioDescription';
import List from '@/components/modules/List';
import { Option } from '@/types/Option';

interface Props {}

const ModuleContentSection: FC<Props> = ({ }) => {
    return (
        <StyledComponent className='module-content-section'>
            <PortfolioDescription />
            <List
                elements={[
                    {
                        date: "07.2022 - PRESENT",
                        headline: "MadMountain (POLAND)",
                        subheadline: "Full-stack developer",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        technologies: ["React.js", "SCSS"],
                        href: "https://cgsteam.io/",
                    },
                    {
                        date: "11.2021 - 07.2022",
                        headline: "CGS-team (Ukraine)",
                        subheadline: "Full-stack developer",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        technologies: ["React.js", "SCSS"],
                        href: "https://cgsteam.io/",
                    },
                ]}
                redirect={{
                    label: "View Full Resume",
                    value: "https://docs.google.com/document/d/1RavWj8220r_Qg6FHPVHtUaqyiON-Fi2aaRTIfBVdRd0/edit",
                }}
            />
        </StyledComponent>
    );
};

export default ModuleContentSection;
