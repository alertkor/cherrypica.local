import React from "react";
import Slider from "react-slick/lib";
import Slide from './Slide';
import styled from 'styled-components';
import * as R from "ramda";
import {media} from "styled-bootstrap-grid";

const Img = styled.img`
    width: 100%;
`;

const desktopBreakpoint = media.lg;

const DesktopHeroCarousel = styled.div`
    display: none;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const MobileHeroCarousel = styled.div`
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

export default function HeroCarousel(props) {
    return (
        <Slider>
            <DesktopHeroCarousel>
                <Slide/>
            </DesktopHeroCarousel>
            <MobileHeroCarousel>
                <Slide/>
            </MobileHeroCarousel>
        </Slider>
    )
};

