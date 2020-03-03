import React from 'react';
import styled from "styled-components";
import HeroCarousel from "./HeroCarousel";
import SuggestStyles from "./SuggestStyles";
import Brand from "./Brand";
import WithSawStyles from "./WithSawStyles";


const Root = styled.div`
    overflow-x: hidden;
`;

const HeroCarouselContainer = styled.div`
    margin-bottom: 6rem;
`;


export default function ProductsItems(props) {
    const images = [
        {thumbnail: require('../../../assets/slick1.jpg')},
        {thumbnail: require('../../../assets/slick2.jpg')},
        {thumbnail: require('../../../assets/slick3.jpg')},
    ];
    const suggest_products = [
        {
            thumbnail: require('../../../assets/suggest1.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest2.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest3.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest4.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest5.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest1.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest2.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest3.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest4.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
        {
            thumbnail: require('../../../assets/suggest5.png'),
            title: 'iuw278 shoulder shirring knit style (purple)',
            limited_time: 3,
            price: 29000,
        },
    ];
    const saw_products = [
        {
            thumbnail: require('../../../assets/with1.png'),
        },
        {
            thumbnail: require('../../../assets/with2.png'),
        },
        {
            thumbnail: require('../../../assets/with3.png'),
        },
        {
            thumbnail: require('../../../assets/with4.png'),
        },
        {
            thumbnail: require('../../../assets/with5.png'),
        },
        {
            thumbnail: require('../../../assets/with1.png'),
        },
        {
            thumbnail: require('../../../assets/with2.png'),
        },
        {
            thumbnail: require('../../../assets/with3.png'),
        },
        {
            thumbnail: require('../../../assets/with4.png'),
        },
        {
            thumbnail: require('../../../assets/with5.png'),
        },
    ];

    return (
        <Root>
            <HeroCarouselContainer>
                <HeroCarousel images={images}/>
            </HeroCarouselContainer>
            <SuggestStyles products={suggest_products}/>
            <Brand/>
            <WithSawStyles products={saw_products}/>
        </Root>
    )
};