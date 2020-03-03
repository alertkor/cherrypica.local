import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import {media} from "styled-bootstrap-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const desktopBreakpoint = media.md;

const Root = styled.div`
    position: relative;
    max-height: 90rem;
    text-align: center;
`;

const Slide = styled.div`
    width: unset!important;
    max-height: 90rem;
`;

const Img = styled.img`
    width: 100%;
`;

const FillSlide = styled.div`
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    width: 33.3%;
    height: 100%;
    z-index: 1;
   
    &.left {
        left: 0;
    }
    
    &.right {
        right: 0;
    }
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const Button = styled.div`
    position: absolute;
    height: 8rem;
    width: 8rem;
    background: white;
    padding: 2.8rem;
    z-index: 9;
    cursor: pointer;
    display: block;
    top:50%;
    transform: translateY(-50%);
    
    &.prev {
        right: 0;
    }
    
    &.next {
        left: 0;
    }
`;

const BackgroundOverriding = styled.div`
    width: 100%;
    height: 100%;
    opacity: .8;
    background: white;
`;


function PreviousButton(props) {
    const {onClick} = props;
    return (
        <FillSlide className={"left"}>
            <BackgroundOverriding/>
            <Button to="prev" className={"prev"} onClick={onClick}>
                <FontAwesomeIcon icon={Icons.faChevronLeft}/>
            </Button>
        </FillSlide>
    )
}

function NextButton(props) {
    const {onClick} = props;
    return (
        <FillSlide className={"right"}>
            <BackgroundOverriding/>
            <Button to="next" className={"next"} onClick={onClick}>
                <FontAwesomeIcon icon={Icons.faChevronRight}/>
            </Button>
        </FillSlide>
    )
}

export default function HeroCarousel(props) {
    const {images} = props;
    const settings = {
        speed: 500,
        infinite: true,
        autoplay: false,
        centerMode: true,
        slidesToShow: 3,
        draggable: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: '0px',
        prevArrow: <PreviousButton/>,
        nextArrow: <NextButton/>,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                draggable: true,
            }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    draggable: true,
                }
            }],
    };

    return (
        <Root>
            <Slider {...settings}>
                <Slide>
                    <Img src={images[0].thumbnail}/>
                </Slide>
                <Slide>
                    <Img src={images[1].thumbnail}/>
                </Slide>
                <Slide>
                    <Img src={images[2].thumbnail}/>
                </Slide>
                <Slide>
                    <Img src={images[0].thumbnail}/>
                </Slide>
                <Slide>
                    <Img src={images[1].thumbnail}/>
                </Slide>
                <Slide>
                    <Img src={images[2].thumbnail}/>
                </Slide>
            </Slider>
        </Root>
    )
}
