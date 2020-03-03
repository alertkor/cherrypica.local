import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import {Row, Col} from "styled-bootstrap-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

const ReviewSlider = styled(Slider)`
    margin-bottom: 6rem;
`;

const Slide = styled.div`
    padding-right: .8rem;
`;

const Img = styled.img`
    width: 100%;
`;

const ReviewMainContainer = styled.div`
    margin-bottom: 4.2rem;
`;

const ReviewHeader = styled.div`
    display: flex;
    height: 4.4rem;
    margin-bottom: 2rem;
    flex-direction: row;
`;

const ReviewHeaderText = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-family: AppleSDGothicNeo;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #333333;
`;

const ShowAllReviewText = styled.div`
    display: flex;
    width: 13rem;
    align-items: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 300;
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
    display: flex;
    height: 4.4rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px #222222;
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    cursor: pointer;
    margin-bottom: 3rem;
`;

const ReviewAllRow = styled(Row)`
    height: 14rem;
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
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
    font-size: 3rem;
    font-weight: 500;
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

const StarIcon = styled.span`
    font-size: 1rem;
    
    &:after {
        content: "\\2605";    
    }
`;

const BlankStarIcon = styled.span`
    font-size: 1rem;

    &:after {
        content: "\\2606";    
    }
`;

const UsersReviewHeaderContainer = styled.div`
`;

const ReviewCount = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #333333;
    margin-bottom: 1.7rem;
`;

const HorizontalBreak = styled.div`
    width: 100%;
    border: 1px solid #222222;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
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
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #444444;
    white-space: pre-line;
`;

const UserScore = styled(Col)`
    display: flex;
    align-items: center;
`;

const ReviewUseridDate = styled(Col)`
    align-items: center;
    display: flex;
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a4a4a3;
`;

const ReviewImg = styled.img`
    width: 6rem;
    height: 6rem;
`;

const UserReviewRow = styled(Row)`
    width: 100%;
    height: 9rem;
    margin: auto;
    margin-top: 1.6rem;
    margin-bottom: 1.8rem;
`;

const SelectSize = styled(Select)`
    width: 100%;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #111111;
`;

const SelectOption = styled(Select)`
    width: 100%;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #82828b;
`;

const ReviewKey = styled(Col)`
  font-family: AppleSDGothicNeo;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #a4a4a3;
`;

const ReviewValue = styled(Col)`
  font-family: AppleSDGothicNeo;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #444444;
`;

const ReviewImgCol = styled(Col)`
    height: 100%;
`;

const ReviewCol = styled(Col)`
    height: 100%;
`;

const ParseUserReviewList = ({reviews}) => {
    return reviews.map(({image, score, userid, contents, date}, index) => {

        const Scores = Array.apply(null, { length: 5 }).map((e, i) => (
            score >= i ? <StarIcon key={i}/> : <BlankStarIcon key={i}/>
        ));

        return (
            <React.Fragment key={index}>
                <UserReviewRow>
                    {image ? <ReviewImgCol col={3} className={"pl-0"}><ReviewImg src={image}/></ReviewImgCol> : ''}
                    <ReviewCol col={image ? 9 : 12}>
                        <Row>
                            <UserScore col={8} className={"px-0"}>{Scores}</UserScore>
                            <ReviewUseridDate col={2} className={"px-0"}>{userid}</ReviewUseridDate>
                            <ReviewUseridDate col={2} className={"px-0"}>{date}</ReviewUseridDate>
                            <Row>
                                <ReviewDescription col={12}>{contents}</ReviewDescription>
                            </Row>
                        </Row>
                    </ReviewCol>
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
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const selectOptions = [
        {value: 'XS', label: 'XS'},
        {value: 'S', label: 'S'},
        {value: 'M', label: 'M'},
        {value: 'L', label: 'L'},
        {value: 'XL', label: 'XL'},
    ];

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
                </ReviewHeader>

                <ReviewAllRow>
                    <ReviewAllScoreContainer col={4} className={"px-0"}>
                        <ReviewAllScoreValue>4.0</ReviewAllScoreValue>
                        <ReviewAllScoreValue className={"static"}> / 5</ReviewAllScoreValue>
                    </ReviewAllScoreContainer>
                    <ReviewAllDetail col={8}>
                        <Row>
                            <ReviewKey col={6}>별점</ReviewKey>
                            <ReviewValue col={6}><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></ReviewValue>
                        </Row>
                        <Row>
                            <ReviewKey col={6}>사이즈 평가</ReviewKey>
                            <ReviewValue col={6}>일자핏이에요</ReviewValue>
                        </Row>
                        <Row>
                            <ReviewKey col={6}>색상 평가</ReviewKey>
                            <ReviewValue col={6}>화면보다 밝아요</ReviewValue>
                        </Row>
                        <Row>
                            <ReviewKey col={6}>평균 신장</ReviewKey>
                            <ReviewValue col={6}>164cm</ReviewValue>
                        </Row>
                        <Row>
                            <ReviewKey col={6}>평균 사이즈</ReviewKey>
                            <ReviewValue col={6}>상의 55 / 하의 55</ReviewValue>
                        </Row>
                    </ReviewAllDetail>
                </ReviewAllRow>
                <AddReviewButton>리뷰 작성하기</AddReviewButton>

                <UsersReviewHeaderContainer>
                    <ReviewCount>리뷰 ({reviews.length})</ReviewCount>
                    <Row>
                        <Col col={7} className={"pr-0"}>
                            <SelectSize options={selectOptions} placeholder={"옵션별 보기"}/>
                        </Col>
                        <Col col={5}>
                            <SelectOption options={selectOptions} placeholder={"최신순"}/>
                        </Col>
                    </Row>
                </UsersReviewHeaderContainer>
                <HorizontalBreak/>
                <UsersReviewBodyContainer>
                    <ParseUserReviewList reviews={reviews}/>
                    <UserReviewHorizontalBreak/>
                </UsersReviewBodyContainer>
            </ReviewMainContainer>
        </React.Fragment>
    )
}