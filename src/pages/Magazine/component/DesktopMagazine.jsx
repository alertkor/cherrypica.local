import React, {useState} from 'react';
import {Container, Row, Col} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import SlickSlider from "react-slick/lib";
import FilledLikeIcon from '../../../assets/files/icon/icon-detail-filled-like.svg';
import UnFilledLikeIcon from '../../../assets/files/icon/icon-detail-like.svg';

const Slider = styled(SlickSlider)`
    .slick-dots {
        margin-bottom: 4rem;
        > li {
            margin: 0;
        }
    }
`;

const Slide = styled.div`
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 3rem;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28.8rem;
    height: 4.4rem;
    cursor: pointer;
    border: solid 1px #111111;
    margin-right: 1.6rem;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111111;
    
    ${({active}) => active && 'background-color: #000; color: white'}
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
        prevArrow: '',
        nextArrow: '',
        dots: true,
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
                            <Card col={4} key={index}>
                                <div>
                                    <CardImg src={thumbnail}/>
                                    {isLiked ? <LikeImg src={FilledLikeIcon}/> : <LikeImg src={UnFilledLikeIcon}/>}
                                </div>
                                <Title>{title}</Title>
                                <Date>{date}</Date>
                            </Card>
                        )
                    })
                }
            </Row>
        </React.Fragment>
    )
}

export default function DesktopMagazine(props) {
    const [isAll, setAll] = useState(true);
    const [isCodibook, setCoodibook] = useState(false);
    const [isLookbook, setLookbook] = useState(false);
    const [isCulture, setCulture] = useState(false);

    return (
        <React.Fragment>
            <RenderSlide/>
            <Container fluid>
                <ButtonContainer>
                    <Button active={isAll} onClick={() => {
                        setAll(true);
                        setCoodibook(false);
                        setLookbook(false);
                        setCulture(false);
                    }}>All</Button>
                    <Button active={isCodibook} onClick={() => {
                        setAll(false);
                        setCoodibook(true);
                        setLookbook(false);
                        setCulture(false);
                    }}>코디북</Button>
                    <Button active={isLookbook} onClick={() => {
                        setAll(false);
                        setCoodibook(false);
                        setLookbook(true);
                        setCulture(false);
                    }}>Lookbook</Button>
                    <Button active={isCulture} onClick={() => {
                        setAll(false);
                        setCoodibook(false);
                        setLookbook(false);
                        setCulture(true);
                    }}>Culture</Button>
                </ButtonContainer>
                <RenderMagazine/>
            </Container>
        </React.Fragment>
    )
}