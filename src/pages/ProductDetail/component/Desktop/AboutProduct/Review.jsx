import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import {Row, Col} from "styled-bootstrap-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ReviewSlider = styled(Slider)`
    margin-bottom: 6rem;
`;

const Slide = styled.div`
    padding-right: 2rem;
    
    &> div > nth-child(5n) {
        padding-right: 0;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const Button = styled.div`
    position: absolute;
    text-align: center;
    cursor: pointer;
    width: 8rem;
    height: 8rem;
    top: 0;
    
    &.prev {
        left: 0;
        left: -8rem;
        top: 6rem;  
    }
    
    &.next {
        right: 0;
        right: -6rem;
        top: 6rem;
    }
    
    > svg {
        height: 100%;
    }
`;

const ReviewMainContainer = styled.div`
    margin-bottom: 6.5rem;
`;

const ReviewHeader = styled.div`
    display: flex;
    height: 4.4rem;
    margin-bottom: 2rem;
`;

const ReviewHeaderText = styled.div`
    display: flex;
    align-items: center;
    font-family: AppleSDGothicNeo;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #111111;
    margin-right: 2rem;
`;

const ShowAllReviewText = styled.div`
    display: flex;
    align-items: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    cursor: pointer;
`;

const ShowAllReviewIconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: .5rem;
`;

const ShowAllReviewIcon = styled(FontAwesomeIcon)`
    display: flex;
    align-items: center;
`;

const AddReviewButton = styled.div`
    flex-direction: column;
    position: absolute;
    right: 0;
    height: 4.4rem;
    width: 28.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #222222;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    cursor: pointer;
    margin-right: 1.5rem;
`;

const ReviewAllRow = styled(Row)`
    width: 100%;
    height: 12rem;
    margin-bottom: 6rem;
`;

const ReviewAllScoreContainer = styled(Col)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ReviewAllScoreValue = styled.div`
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 5.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    color: #444444;
    white-space: pre;
    
    &.static {
        font-weight: normal;
        color: #a4a4a3; 
    }
`;

const ReviewAllDetail = styled(Col)`
    height: 100%;
    border: solid 1px #d8d8d8;
    padding-top: 1.5rem;
`;

const ReviewAllDetailName = styled(Col)`
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: #a4a4a3;
    padding: 0;
`;

const ReviewAllDetailValue = styled(Col)`
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: #444444;
    padding: 0;
`;

const ReviewRow = styled(Row)`
    padding-top: 2rem;
    padding-left: 2rem;
    margin: auto;

    &:last-child {
        padding-top: 2rem;
    }
`;

const StarIcon = styled.span`
    &:after {
        content: "\\2605";    
    }
`;

const BlankStarIcon = styled.span`
    &:after {
        content: "\\2606";    
    }
`;

const UsersReviewHeaderContainer = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
`;

const ReviewCount = styled.div`
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #111111;
    margin-right: 2rem;
`;

const ReviewType = styled.div`
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    font-weight: 300;
    color: #555555;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
    
    &.selected {
        font-weight: bold;
        color: #222222;
    }
`;

const Separator = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    
    &:after {
        position: relative;
        content: "|";
        height: 100%;
        align-items: center;
        font-size: 1.5rem;
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;

const HorizontalBreak = styled.div`
    width: 100%;
    border: 2px solid #222222;
    margin-top: 2rem;
`;

const SelectByOptionContainer = styled.div`
    position: absolute;
    right: 0;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const SelectByOptions = styled.div`
    cursor: pointer;
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
`;

const SortIcon = styled(FontAwesomeIcon)`
    position: relative;
    margin-left: 1rem;
    margin-bottom: .8rem;
`;

const UsersReviewBodyContainer = styled.div`
`;

const UserReviewHorizontalBreak = styled.div`
    border: 1px solid #d8d8d8;
    &:last-child {
        border: none;
    }
`;

const ReviewDescription = styled(Col)`
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #444444;
    white-space: pre;
`;

const ReviewUseridDate = styled(Col)`
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a4a4a3;
`;

const ReviewImgCol = styled(Col)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const ReviewImg = styled.img`
    width: 9rem;
    height: 9rem;
`;

const ReviewStarCol = styled(Col)`
    margin-bottom: 1.6rem;
`;

const UserReviewRow = styled(Row)`
    height: 10rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

function PreviousButton(props) {
    const {onClick} = props;
    return (
        <Button to="prev" className={"prev"} onClick={onClick}>
            <FontAwesomeIcon icon={Icons.faChevronLeft}/>
        </Button>
    )
}

function NextButton(props) {
    const {onClick} = props;
    return (
        <Button to="next" className={"next"} onClick={onClick}>
            <FontAwesomeIcon icon={Icons.faChevronRight}/>
        </Button>
    )
}

const ParseUserReviewList = ({reviews}) => {
    return reviews.map(({image, score, userid, contents, date}, index) => {

        const Scores = Array.apply(null, { length: 5 }).map((e, i) => (
            score >= i ? <StarIcon key={i}/> : <BlankStarIcon key={i}/>
        ));

        return (
            <React.Fragment key={index}>
                <UserReviewRow>
                    {image ? <ReviewImgCol col={2}><ReviewImg src={image}/></ReviewImgCol> : ''}
                    <Col col={image ? 8 : 10}>
                        <ReviewStarCol col={12}>{Scores}</ReviewStarCol>
                        <ReviewDescription col={12}>{contents}</ReviewDescription>
                    </Col>
                    <ReviewUseridDate col={1}>{userid}</ReviewUseridDate>
                    <ReviewUseridDate col={1}>{date}</ReviewUseridDate>
                </UserReviewRow>
                <UserReviewHorizontalBreak/>
            </React.Fragment>
        )
    });
};

export default function Review(props) {
    const {reviews} = props;
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <PreviousButton/>,
        nextArrow: <NextButton/>,
    };

    return (
        <React.Fragment>
            <ReviewSlider {...settings}>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review1.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review2.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review3.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review4.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review5.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review6.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review7.png')}/>
                </Slide>
                <Slide>
                    <Img src={require('../../../../../assets/files/detail/desktop-detail-review8.png')}/>
                </Slide>
            </ReviewSlider>

            <ReviewMainContainer>
                <ReviewHeader>
                    <ReviewHeaderText>리뷰 평점</ReviewHeaderText>
                    <ShowAllReviewText>
                        전체 리뷰 보기
                        <ShowAllReviewIconContainer>
                            <ShowAllReviewIcon icon={Icons.faChevronRight}/>
                        </ShowAllReviewIconContainer>
                    </ShowAllReviewText>
                    <AddReviewButton>리뷰 작성하기</AddReviewButton>
                </ReviewHeader>

                <ReviewAllRow>
                    <ReviewAllScoreContainer col={3} className={"px-0"}>
                        <ReviewAllScoreValue>4.0</ReviewAllScoreValue>
                        <ReviewAllScoreValue className={"static"}> / 5</ReviewAllScoreValue>
                    </ReviewAllScoreContainer>
                    <ReviewAllDetail col={9}>
                        <ReviewRow>
                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailName col={7} className={"mb-4"}>별점</ReviewAllDetailName>
                                    <ReviewAllDetailName col={7}>사이즈 평가</ReviewAllDetailName>
                                </Row>
                            </Col>

                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailValue col={12} className={"mb-4"}>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                    </ReviewAllDetailValue>
                                </Row>
                                <Row>
                                    <ReviewAllDetailValue col={12}>일자핏이에요</ReviewAllDetailValue>
                                </Row>
                            </Col>

                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailName col={12} className={"mb-4"}>색상 평가</ReviewAllDetailName>
                                    <ReviewAllDetailName col={12}>평균 신장</ReviewAllDetailName>
                                </Row>
                            </Col>

                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailValue col={12} className={"mb-4"}>화면보다 밝아요</ReviewAllDetailValue>
                                </Row>
                                <Row>
                                    <ReviewAllDetailValue col={12}>163cm</ReviewAllDetailValue>
                                </Row>
                            </Col>

                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailName col={12}>평균 사이즈</ReviewAllDetailName>
                                </Row>
                            </Col>
                            <Col col={2} className={"px-0"}>
                                <Row>
                                    <ReviewAllDetailValue col={12}>상의 55 / 하의 55</ReviewAllDetailValue>
                                </Row>
                            </Col>
                        </ReviewRow>
                    </ReviewAllDetail> { /* TODO: Must be optimization fucking this code. */}
                </ReviewAllRow>

                <UsersReviewHeaderContainer>
                    <ReviewCount>리뷰 ({reviews.length})</ReviewCount>
                    <ReviewType className={"selected"}>최신순</ReviewType>
                    <Separator/>
                    <ReviewType>별점 높은 순</ReviewType>
                    <Separator/>
                    <ReviewType>별점 낮은 순</ReviewType>
                    <Separator/>
                    <ReviewType>내 사이즈에 가까운 순</ReviewType>

                    <SelectByOptionContainer>
                        <SelectByOptions>옵션별 보기</SelectByOptions>
                        <SortIcon icon={Icons.faSortDown}/>
                    </SelectByOptionContainer>
                </UsersReviewHeaderContainer>

                <HorizontalBreak/>

                <UsersReviewBodyContainer>
                    <ParseUserReviewList reviews={reviews}/>
                </UsersReviewBodyContainer>
                <HorizontalBreak/>
            </ReviewMainContainer>
        </React.Fragment>
    )
}