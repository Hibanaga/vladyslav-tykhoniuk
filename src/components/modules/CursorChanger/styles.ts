import styled from 'styled-components';

const Styled = styled.div.attrs((props) => ({
    style: {
        width: `${props.$size}px`,
        height: `${props.$size}px`,
        left: `${props.$left}px`,
        top: `${props.$top}px`,
    },
}))`
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle closest-side, #1D4ED8, transparent);
    opacity: .15;
`;

export default Styled;
