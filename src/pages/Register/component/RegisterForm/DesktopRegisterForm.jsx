import React from 'react';
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';

const desktopBreakpoint = media.lg;

const Header = styled.div`
    display: none;
    width: 100%;
    font-family: Montserrat;
    font-size: 2.4rem;
    font-weight: 500;
    padding-bottom: 3rem;
    color: #111111;

    ${desktopBreakpoint`
        display: flex;
    `}
`;

function DesktopRegisterHeader(props) {
    return (
        <Header>
            JOIN US
        </Header>
    )
}

export {DesktopRegisterHeader};