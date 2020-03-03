import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const Text = styled.span`
  font-family: Montserrat;
  font-size: 2.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.85px;
  color: #222222;
  text-align: center;
  display: block;
  margin-bottom: 2rem;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export default function Brand(props) {
    return (
        <Root>
            <Text>BRAND</Text>
            <Img src={require('../../../../assets/brand.png')}/>
        </Root>
    )
}