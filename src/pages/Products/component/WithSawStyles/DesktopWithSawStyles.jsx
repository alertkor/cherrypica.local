import React from 'react';
import styled from "styled-components";
import {Row, Col, media} from "styled-bootstrap-grid";

const Header = styled.span`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.9rem;
    font-weight: bold;
    color: #111111;
    margin-bottom: 2rem;
`;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
`;

const Product = styled(Col)`
    padding-left: unset;
    
    ${media.lg`
        flex: 0 0 19.999997%;
        max-width: 19.999997%;
    `}
`;


const ParseProducts = ({products}) => {
    return products.map(({thumbnail}, index) => {
        return (
            <Product key={index} md={3} sm={4} >
                <Img src={thumbnail}/>
            </Product>
        )
    });
};

export default function DesktopWithSawStyles(props) {
    const {products} = props;
    return (
        <React.Fragment>
            <Header>함께 본 스타일</Header>
            <Row className={"pl-4"}>
                <ParseProducts products={products}/>
            </Row>
        </React.Fragment>
    )
};