import React, {useState} from 'react';
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';
import DesktopNavigationBar from './DesktopNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';
import Sidebar from "../Sidebar";

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


export default function NavigationBar() {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    isSideBarOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'

    return (
        <React.Fragment>
            <Root>
                <Desktop>
                    <DesktopNavigationBar setSideBarOpen={setSideBarOpen}/>
                </Desktop>
                <Mobile>
                    <MobileNavigationBar setSideBarOpen={setSideBarOpen}/>
                </Mobile>
                <Sidebar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen}/>
            </Root>
        </React.Fragment>
    )
};