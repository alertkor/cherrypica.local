import React from 'react';
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import NavigationBar from "../../component/NavigationBar";
import MobileProductDetail from "./component/Mobile";
import DesktopProductDetail from "./component/Desktop";

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

export default class ProductDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Desktop>
                    <DesktopProductDetail/>
                </Desktop>
                <Mobile>
                    <MobileProductDetail/>
                </Mobile>
            </React.Fragment>
        )
    }
};
