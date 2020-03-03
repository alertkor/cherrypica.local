import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';

const Root = styled.div`
    padding-left: 1.2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

const HeaderText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #333333;
    margin-bottom: 1rem;
`;

const Slide = styled.div`
    padding-right: 1rem;
`;

const Img = styled.img`
    width: 100%;
`;

export default function SuggestStyles(props) {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '',
        nextArrow: '',
    };

    return (
        <Root>
            <HeaderText>스타일 완성하기</HeaderText>
            <Slider {...settings}>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick1.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick2.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick3.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick4.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick5.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/mobile-detail-slick6.png')}/>
                </Slide>
            </Slider>
        </Root>
    )
};