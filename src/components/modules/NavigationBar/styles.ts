'use client';

import styled from "styled-components";

export default styled.aside`
    .headline {
        font-size: 2em;
        margin-bottom: .5em;
    }
    
    .sub-headline {
        font-size: 1.5em;
        font-weight: 400;
        margin-bottom: 1em;
    }
    
    .additional {
        display: block;
        font-weight: 300;
        font-size: 1em;
        margin-bottom: 3em;
    }
    
    .nav-list {
        .nav-item {
            list-style: none;
            display: flex;
            align-items: center;
            position: relative;
            
            &:hover {
                .link {
                    padding-left: 3em;
                }

                &::before {
                    width: 2em;
                }
            }
            
            .link {
                font-size: 1.15em;
                padding-left: 2.5em;
                transition: 150ms ease-in;
            }
            
            &::before {
                content: "";
                height: 1px;
                width: 1.5em;
                background-color: blue;
                position: absolute;
                top: 60%;
                transition: 150ms ease-in;
            }
        }
    }
`
