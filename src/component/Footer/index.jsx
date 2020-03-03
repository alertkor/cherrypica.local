import React from 'react';
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const Root = styled.div`
`;

const desktopBreakpoint = media.lg;

const Desktop = styled.div`
    display: none;

    ${desktopBreakpoint`
        display: block;
    `}
`;

const Mobile = styled.div`
    display: block;

    ${desktopBreakpoint`
        display: none;
    `}
`;


export default function Footer(props) {
    return (
        <React.Fragment>
            <Root>
                <Desktop className={"desktop-footer"}>
                    <DesktopFooter />
                </Desktop>
                <Mobile className={"mobile-footer"}>
                    <MobileFooter />
                </Mobile>
            </Root>
        </React.Fragment>
    )
};