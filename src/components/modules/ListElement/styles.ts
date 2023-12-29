'use client';

import styled from "styled-components";

import Link from 'next/link';

export default styled(Link)`
    display: grid;
    grid-template-columns: .5fr 1.5fr;
    gap: .5em;
    
    border-radius: 16px;
    padding: 1em;
    transition: 100ms ease-in;
    
    &:hover {
        background-color: rgba(30,41,59,.5);
        -webkit-box-shadow: 0px -3px 15px 0px rgba(30,41,59,.5);
        -moz-box-shadow: 0px -3px 15px 0px rgba(30,41,59,.5);
        box-shadow: 0px -3px 15px 0px rgba(30,41,59,.5);
    }
    
    .col-preview {
        .image {}
        .data-date {
            font-size: .8em;
            color: #94A3B8;
            font-weight: 400;
        }
    }
    
    .col-content {
        .headline {
            font-size: .9em;
        }
        .subheadline {
            margin-top: .25em;
            color: #94A3B8;
            font-weight: 400;
            font-size: .9em;
        }
        .description {
            display: block;
            color: #94A3B8;
            font-weight: 400;
            font-size: .6em;
            letter-spacing: .1em;
            margin-top: 1em;
        }
        
        .list-links {
            list-style: none;
            display: flex;
            gap: .75em;
            
            .list-item {
                .link {
                    color: #94A3B8;
                    font-weight: 400;
                }
            }
        }
        
        .list-technologies {
            list-style: none;
            display: flex;
            gap: .75em;
            margin: 1em 0;
            
            .list-item {
                color: #5EEAD4;
                font-weight: 400;
                background-color: rgba(45,212,191,.1);
                padding: .2em .5em;
                border-radius: 2em;
                font-size: .7em;
            }
        }
    }
`
