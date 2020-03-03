import React from 'react';
import styled from 'styled-components';
import {media} from "styled-bootstrap-grid";
import DesktopSideBar from "./DekstopSideBar";
import MobileSideBar from "./MobileSideBar";

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

export default function Sidebar(props) {
    const {isSideBarOpen, setSideBarOpen} = props;

    return (
        <React.Fragment>
            <Desktop>
                <DesktopSideBar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen}/>
            </Desktop>
            <Mobile>
                <MobileSideBar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen}/>
            </Mobile>
        </React.Fragment>
    )
};