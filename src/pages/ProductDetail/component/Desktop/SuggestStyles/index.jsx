import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';

const Root = styled.div`
    padding-left: 3rem;
    margin-top: 6rem;
    margin-bottom: 10rem;
`;

const HeaderText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 2.2rem;
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
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '',
        nextArrow: '',
    };

    return (
        <Root>
            <HeaderText>스타일 완성하기</HeaderText>
            <Slider {...settings}>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick1.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick2.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick3.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick4.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick5.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick6.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick7.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-slick8.png')}/>
                </Slide>
            </Slider>
        </Root>
    )
};