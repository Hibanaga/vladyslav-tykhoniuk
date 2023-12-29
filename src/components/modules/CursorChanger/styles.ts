import styled from 'styled-components';

export default styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    
    .cursor-above-effect {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        background: radial-gradient(circle closest-side, #1D4ED8, transparent);
        opacity: .15;
    }
`
