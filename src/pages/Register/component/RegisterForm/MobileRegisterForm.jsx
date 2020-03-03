import React from 'react';
import styled from 'styled-components';
import {media} from "styled-bootstrap-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const desktopBreakpoint = media.lg;

const Header = styled.div`
    display: block;
    height: 5rem;
    padding-top: 1.6rem;
    font-family: Montserrat;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 6rem;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const CloseButton = styled.span`
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    left: 2rem;
    top: 1.2rem;
`;

function MobileLoginHeader(props) {
    const {history} = props;
    return (
        <React.Fragment>
            <Header>
                <CloseButton onClick={() => {history.goBack()}}>
                    <FontAwesomeIcon icon={Icons.faArrowLeft}/>
                </CloseButton>
                JOIN US
            </Header>
        </React.Fragment>
    )
}

export {MobileLoginHeader};