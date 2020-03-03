import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import {Link} from 'react-router-dom';
import {createGlobalStyle} from "styled-components";
const EmptyHeartIcon = require('../../assets/files/icon/ico-empty-heart.svg');

const MasonryGridCSS = createGlobalStyle`
.my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    padding-right: 0!important;
}
.my-masonry-grid_column {
    padding-left: 1.5rem; /* gutter size */
    background-clip: padding-box;
}

// Style your items
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 2rem;
}
`;


const Grid = styled(Masonry)`
    padding-top: 3.1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const GridContainer = styled.div`
    position: relative;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const ImgContainer = styled.div`
    position: relative;
    cursor: pointer;
    
    &:hover {
        &:after {
            position: absolute;
            content: url(${EmptyHeartIcon});
            font-size: 2rem;
            top: 0;
            right: 0;
            margin-top: 1rem;
            margin-right: 1rem;
            color: white;
            z-index: 1;
        }    
    }
`;

const Img = styled.img`
    width: 100%;
    border-radius: .9rem;
`;

function ParseImage(images) {
    return images.map(({product_no, thumbnail, liked}, index) => {
        return (
                <ImgContainer key={index}>
                    <Link to={"product/" + product_no}>
                        <Img src={thumbnail} />
                    </Link>
                </ImgContainer>
        )
    })
}

export default function MasonryGrid(props) {
    const {images} = props;
    const breakpointColumnsObj = {
        default: 7,
        1199: 5,
        991: 4,
        767: 3,
        575: 2,
    };

    return (
        <React.Fragment>
            <MasonryGridCSS/>
            <GridContainer>
                <Grid breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {ParseImage(images)}
                </Grid>
            </GridContainer>
        </React.Fragment>
    )
}