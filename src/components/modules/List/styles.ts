'use client';

import styled from "styled-components";

export default styled.section`
    margin-top: 4em;
    
    .link-redirect {
        margin-top: 2em;
        display: flex;
        align-items: center;
        
        .data-label {
            font-size: 1em;
            color: #E2E8F0;
        }
        
        .right-icon {
            margin-top: .1em;
            margin-left: .25em;
        }
        
        &:hover {
            .right-icon {
                margin-left: .7em;
            }
        }
    }
`
