import React, {useState} from 'react';
import {Container, Row, Col} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import SlickSlider from "react-slick/lib";
import FilledLikeIcon from '../../../assets/files/icon/icon-detail-filled-like.svg';
import UnFilledLikeIcon from '../../../assets/files/icon/icon-detail-like.svg';

const Slider = styled(SlickSlider)`
    margin-bottom: 4rem;
`;

const Slide = styled.div`
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
`;

const MagazineHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.4rem;
    background-color: #111111;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #ffffff;
`;

const Options = styled.div`
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    height: 4rem;
    background: white;
`;

const Option = styled.span`
    font-family: AppleSDGothicNeo; 
    font-size: 1.4rem;
    font-stretch: normal;
    font-style: normal;
    color: #777777;
    margin-right: 2rem;
    cursor: pointer;
    
    ${({active}) => active && 'color: black; font-family: AppleSDGothicNeo; font-weight: bold;'}
`;

const CountText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 2rem;
`;

const Count = styled.span`
    font-weight: bold;
`;

const Card = styled(Col)`
    margin-bottom: 6rem;
`;

const CardInner = styled.div`
    border: solid 1px #e7e7e7;
`;

const CardImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1.6rem;
`;

const Title = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.89px;
    color: #111111;
    margin-left: 1.4rem;
`;

const Date = styled.div`
    opacity: 0.6;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #111111;
    margin-left: 1.4rem;
    margin-bottom: 1rem;
`;

const LikeImg = styled.img`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 4rem;
    margin-top: 3rem;
    cursor: pointer;
    
    ${CardImg}:hover & {
        display: block;
    }
`;

function RenderSlide(props) {
    const settings = {
        infinite: true,
        speed: 2000,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            <Slide>
                <Img src={require('../../../assets/magazine/magazine-slick1.png')}/>
            </Slide>
            <Slide>
                <Img src={require('../../../assets/magazine/magazine-slick2.png')}/>
            </Slide>
            <Slide>
                <Img src={require('../../../assets/magazine/magazine-slick3.png')}/>
            </Slide>
            <Slide>
                <Img src={require('../../../assets/magazine/magazine-slick4.png')}/>
            </Slide>
            <Slide>
                <Img src={require('../../../assets/magazine/magazine-slick5.png')}/>
            </Slide>
        </Slider>
    )
}

function RenderMagazine(props) {
    const magazines = [
        {
            thumbnail: require("../../../assets/magazine/magazine1.png"),
            title: "여자의 가을은 ‘이것’으로부터",
            date: "19.09.30",
            category: '',
            isLiked: false,
        },
        {
            thumbnail: require("../../../assets/magazine/magazine2.png"),
            title: "일하는 여성을 위한 캐주얼 시크 킨더살몬 19AW",
            date: "19.09.30",
            category: '',
            isLiked: false,
        },
        {
            thumbnail: require("../../../assets/magazine/magazine3.png"),
            title: "일하는 여성을 위한 캐주얼 시크 킨더살몬 19AW",
            date: "19.09.30",
            category: '',
            isLiked: false,
        },
        {
            thumbnail: require("../../../assets/magazine/magazine1.png"),
            title: "여자의 가을은 ‘이것’으로부터",
            date: "19.09.30",
            category: '',
            isLiked: false,
        },
        {
            thumbnail: require("../../../assets/magazine/magazine2.png"),
            title: "일하는 여성을 위한 캐주얼 시크 킨더살몬 19AW",
            date: "19.09.30",
            category: '',
            isLiked: false,
        },
        {
            thumbnail: require("../../../assets/magazine/magazine3.png"),
            title: "일하는 여성을 위한 캐주얼 시크 킨더살몬 19AW",
            date: "19.09.30",
            category: '',
            isLiked: true,
        },
    ];

    return (
        <React.Fragment>
            <CountText>총 <Count>{magazines.length}</Count>개</CountText>
            <Row>
                {
                    magazines.map(({thumbnail, title, date, isLiked}, index) => {
                        return (
                            <Card col={12} key={index}>
                                <CardInner>
                                    <CardImg src={thumbnail}/>
                                    {isLiked ? <LikeImg src={FilledLikeIcon}/> : <LikeImg src={UnFilledLikeIcon}/>}
                                    <Title>{title}</Title>
                                    <Date>{date}</Date>
                                </CardInner>
                            </Card>
                        )
                    })
                }
            </Row>
        </React.Fragment>
    )
}

export default function MobileMagazine(props) {
    const [isAll, setAll] = useState(true);
    const [isCodibook, setCoodibook] = useState(false);
    const [isLookbook, setLookbook] = useState(false);
    const [isCulture, setCulture] = useState(false);

    return (
        <React.Fragment>
            <MagazineHeader>MAGAZINE</MagazineHeader>
            <Options>
                <Option active={isAll} onClick={() => {
                    setAll(true);
                    setCoodibook(false);
                    setLookbook(false);
                    setCulture(false);
                }}>All</Option>
                <Option active={isCodibook} onClick={() => {
                    setAll(false);
                    setCoodibook(true);
                    setLookbook(false);
                    setCulture(false);
                }}>코디북</Option>
                <Option active={isLookbook} onClick={() => {
                    setAll(false);
                    setCoodibook(false);
                    setLookbook(true);
                    setCulture(false);
                }}>Lookbook</Option>
                <Option active={isCulture} onClick={() => {
                    setAll(false);
                    setCoodibook(false);
                    setLookbook(false);
                    setCulture(true);
                }}>Culture</Option>
            </Options>
            <RenderSlide/>
            <Container fluid>
                <RenderMagazine/>
            </Container>
        </React.Fragment>
    )
}