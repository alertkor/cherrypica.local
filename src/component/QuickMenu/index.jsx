import React from 'react';
import styled from 'styled-components';
import DesktopQuickMenu from "./DesktopQuickMenu";
import {media} from "styled-bootstrap-grid";
import MobileQuickMenu from "./MobileQuickMenu";

const desktopBreakpoint = media.lg;

const Remocon = styled.div`
`;

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

export default function QuickMenu(props) {
    return (
        <Remocon>
            <Desktop>
                <DesktopQuickMenu/>
            </Desktop>
            <Mobile>
                <MobileQuickMenu/>
            </Mobile>
        </Remocon>
    )
};