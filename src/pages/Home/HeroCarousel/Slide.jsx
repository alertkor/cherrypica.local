import React from "react";
import Slider from "react-slick/lib";
import styled from 'styled-components';
import {connect} from "react-redux";
import * as R from "ramda";

const Img = styled.img`
    width: 100%;
`;

function Slide(props) {
    const {slidePhotos} = props;
    return (
        <Slider>

            {/*{*/}
            {/*    props.slide.map((img, i) => {*/}
            {/*        return (*/}
            {/*            <div key={img}>*/}
            {/*                <Img src={img}/>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </Slider>
    )
};

export default R.compose(
    connect(
        R.applySpec({
            slidePhotos: R.path(['assets', ''])
        })
    )
)(Slide)