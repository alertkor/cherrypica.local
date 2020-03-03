import React from 'react';
import Slider from 'react-slick';
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

const desktopBreakpoint = media.md;

const Slide = styled.div`
    position: relative;
    padding-bottom: 2rem;
    padding-right: 1rem;
    
    ${desktopBreakpoint`
        padding-right: 2rem;
    `}
`;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
`;

const ProductContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const BackgroundOverriding = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .5;
`;

const ProductDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
    
    ${desktopBreakpoint`
        ${ProductContainer}:hover & {
            display: block;
        }
    `}
`;

const Title = styled.span`
    font-family: Montserrat;
    font-size: 1.7rem;
    font-weight: 500;
    color: #eeeeee;
    position: absolute;
    bottom: 0;
    margin-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const LimitTime = styled.span`
    font-family: Montserrat;
    font-size: 1.7rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.46px;
    color: #ee4a4a;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-bottom: 2rem;
`;

const Price = styled.span`
    font-family: Montserrat;
    font-size: 1.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 2rem;
    margin-bottom: 2rem;
`;

const MobileProductDetail = styled.div`
    position: relative;
    margin-top: 1rem;
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const MobileTitle = styled.div`
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: normal;
    color: #444444;
    overflow : hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -ms-text-overflow:ellipsis;
    -moz-text-overflow:ellipsis;
    margin-bottom: .3rem;
`;

const MobileLimitTime = styled.span`
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.25px;
    color: #ee4a4a;
`;

const MobilePrice = styled.span`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #222222;
    float: right;
`;


export default function SuggestSlider(props) {
    const {products} = props;
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '',
        nextArrow: '',
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    draggable: true,
                }
            }],
    };

    return (
        <React.Fragment>
            <Slider {...settings}>
                {
                    products.map((product, index) => {
                        const {thumbnail, title, limited_time, price} = product;
                        return (
                            <Slide key={index}>
                                <ProductContainer>
                                    <Img src={thumbnail}/>
                                    <ProductDetail>
                                        <BackgroundOverriding/>
                                        <Title>{title}</Title>
                                        <LimitTime>{limited_time} DAYS</LimitTime>
                                        <Price>{price.toLocaleString()}</Price>
                                    </ProductDetail>
                                    <MobileProductDetail>
                                        <MobileTitle>{title}</MobileTitle>
                                        <MobileLimitTime>{limited_time}DAYS</MobileLimitTime>
                                        <MobilePrice>{price.toLocaleString()}</MobilePrice>
                                    </MobileProductDetail>
                                </ProductContainer>
                            </Slide>
                        );
                    })
                }
            </Slider>
        </React.Fragment>
    )
};