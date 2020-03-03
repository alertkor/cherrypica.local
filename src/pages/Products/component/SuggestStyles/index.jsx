import React from 'react';
import styled from "styled-components";
import SuggestSlider from "./SuggestSlider";
import {media} from "styled-bootstrap-grid";

const desktopBreakpoint = media.lg;

const Root = styled.div`
    padding-left: 1rem;
    
    ${desktopBreakpoint`
        padding-left: 3rem;
    `}
`;

const Header = styled.span`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.9rem;
    font-weight: bold;
    color: #111111;
    margin-bottom: 2rem;
`;

const SlickContainer = styled.div`
    margin-bottom: 4.1rem;
`;

export default function SuggestStyles(props) {
    const {products} = props;

    return (
        <Root>
            <Header>첫 번째 스타일 제안</Header>
            <SlickContainer>
                <SuggestSlider products={products}/>
            </SlickContainer>
            <Header>두 번째 스타일 제안</Header>
            <SuggestSlider products={products}/>
        </Root>
    )
}