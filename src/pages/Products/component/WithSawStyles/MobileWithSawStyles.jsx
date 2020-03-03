import React from 'react';
import Slider from 'react-slick';
import styled from "styled-components";


const Header = styled.span`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.9rem;
    font-weight: bold;
    color: #111111;
    margin-bottom: 2rem;
`;

const Root = styled.div`
    margin-bottom: 2rem;
`;

const Slide = styled.div`
    padding-right: .6rem;
`;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
`;

export default function MobileWithSawStyles(props) {
    const {products} = props;
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '',
        nextArrow: '',
        centerPadding: '60px',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                draggable: true,
            }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    draggable: true,
                }
            }],
    };

    return (
        <Root fluid>
            <Header>함께 본 스타일</Header>
            <Slider {...settings}>
                {
                    products.map((product, index) => {
                        const {thumbnail} = product;
                        return (
                            <Slide key={index}>
                                <Img src={thumbnail}/>
                            </Slide>
                        );
                    })
                }
            </Slider>
        </Root>
    )
}