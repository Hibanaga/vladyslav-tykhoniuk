'use client';

import styled from "styled-components";

export default styled.aside`
    position: relative;
    
    .nav {
        position: sticky;
        top: 5em;
        max-height: 72.5vh;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .header {
            padding-bottom: 3em;
            
            .headline {
                font-size: 2em;
                margin-bottom: .5em;
                font-weight: 700;
                color: #E2E8F0;
            }

            .sub-headline {
                font-size: 1.25em;
                font-weight: 400;
                margin-bottom: 1em;
                color: #E2E8F0;
            }

            .additional {
                display: block;
                font-weight: 300;
                font-size: .85em;
                margin-bottom: 3em;
                max-width: 60%;
                line-height: 150%;
                color: #94A3B8;
            }

            .nav-list {
                .nav-item {
                    list-style: none;
                    margin-bottom: .5em;

                    .link {
                        position: relative;

                        cursor: pointer;

                        color: #64748B;
                        font-size: .65em;
                        font-weight: 700;
                        letter-spacing: .15em;

                        padding: 1em .5em 1em 3em;

                        transition: 150ms ease-in;
                        text-transform: uppercase;

                        &::before {
                            content: "";
                            height: 1px;
                            width: 2em;
                            background-color: #475569;
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transition: 150ms ease-in;
                        }

                        &:hover, &:focus {
                            padding-left: 5em;
                            color: #E2E8F0;

                            &::before {
                                width: 4em;
                                background-color: #E2E8F0;
                            }
                        }
                    }
                }
            }
        }

        .footer {
            min-height: 3em;
            width: 100%;
            
            .list {
                display: flex;
                align-items: center;
                
                .list-item {
                    list-style: none;
                    margin-right: .5em;
                    
                    .link {
                        .icon {
                            color: #94A3B8;
                            font-size: 1.75em;
                            transition: 150ms ease-in;
                            
                            &.gh {
                                margin-top: -.075em;
                                font-size: 1.6em;
                            }
                        }
                        
                        &:hover {
                            .icon {
                                color: #E2E8F0;
                            }
                        }
                    }
                }
            }
        }
    }
`
