import React from "react";
import {media} from "styled-bootstrap-grid";
import NavigationBar from "../../component/NavigationBar";
import MobileMagazine from "./component/MobileMagazine";
import DesktopMagazine from "./component/DesktopMagazine";
import styled from "styled-components";
import QuickMenu from "../../component/QuickMenu";


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

export default class Magazine extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Mobile>
                    <MobileMagazine/>
                </Mobile>
                <Desktop>
                    <DesktopMagazine/>
                </Desktop>
                <QuickMenu/>
            </React.Fragment>
        )
    }
};
