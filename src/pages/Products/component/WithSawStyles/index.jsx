import React from 'react';
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";
import DesktopWithSawStyles from "./DesktopWithSawStyles";
import MobileWithSawStyles from "./MobileWithSawStyles";


const desktopBreakpoint = media.lg;

const Desktop = styled(Container)`
    display: none;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const Mobile = styled.div`
    display: block;
    padding-left: 1rem;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

export default function WithSawStyles(props) {
    const {products} = props;

    return (
        <React.Fragment>
            <Desktop fluid>
                <DesktopWithSawStyles products={products}/>
            </Desktop>
            <Mobile>
                <MobileWithSawStyles products={products}/>
            </Mobile>
        </React.Fragment>
    )
}