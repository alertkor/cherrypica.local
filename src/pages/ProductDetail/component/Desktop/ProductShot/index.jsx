import React from 'react';
import styled from "styled-components";

const Root = styled.div`
`;

const Img = styled.img`
    width: 100%;
`;

const ParseImage = ({product}) => {
    return product.map((image, index) => {
        return <Img key={index} src={image}/>
    });
};

export default function ProductShot(props) {
    const {product} = props;

    return (
        <Root>
            <ParseImage product={product} />
        </Root>
    )
};