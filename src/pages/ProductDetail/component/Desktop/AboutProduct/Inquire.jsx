import React, {useState} from 'react';
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";

const InquireHeaderContainer = styled.div`
    position: relative;
    margin-bottom: 2rem;
`;

const InquireHeaderText = styled.div`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #111111;
    margin-bottom: .6rem;
`;

const InquireText = styled.div`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
`;

const AddInquireButton = styled.div`
    position: absolute;
    top: 0;
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

const InquireHeaderRow = styled(Row)`
    display: flex;
    height: 6rem;
    border-top: 2px solid #222;
    border-bottom: 1px solid #222;
`;

const InquireHeader = styled(Col)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.75;
    letter-spacing: normal;
    color: #555555;
    padding: 0;
`;

const InquireBodyRow = styled(Row)`
    border-bottom: 1px solid #d8d8d8;
    height: 6rem;
    cursor: pointer;
`;

const InquireBodyText = styled(Col)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 4.29;
    letter-spacing: normal;
    color: #444444;
    padding: 0;
    
    &.contents {
        justify-content: unset;
    }
    
    &.is-answer {
        font-weight: bold;
    }
`;

const ContentInner = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    width: 27rem;
    white-space: nowrap;
`;

const Img = styled.img`
    margin-right: 1.2rem;
`;

const HorizontalBreak = styled.div`
    border-bottom: 2px solid #222;
    margin-bottom: 6.3rem;
`;

const MoreRow = styled(Row)`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const AnswerRow = styled(Row)`
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #fbfbfb;
`;

const Answer = styled(Col)`
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #444444;
    
    &:before {
        content: "[답변]";
        display: block;
        font-weight: bold;
    }
`;

const MoreContents = styled(Col)`
    white-space: pre;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #444444;
`;

const MoreContainer = styled(Row)`
    display: none;
    ${({active}) => active && 'display: block;'}
`;


function LockIcon() {
    return <Img src={require('../../../../../assets/files/icon/icon-lock.svg')}/>
}

const ShowMore = ({secret, kind, contents, answer, isAnswer, userid, date}) => {
    const [state, toggleShow] = useState(false);

    return (
        <React.Fragment>
            <InquireBodyRow onClick={() => toggleShow(!state)}>
                <InquireBodyText col={2}>{kind}</InquireBodyText>
                <InquireBodyText col={7} className={"contents"}>
                    <ContentInner>{secret ? <LockIcon/> : ''} {contents}</ContentInner>
                </InquireBodyText>
                <InquireBodyText col={1} className={"is-answer"}>{isAnswer ? '답변 완료' : '답변 대기'}</InquireBodyText>
                <InquireBodyText col={1}>{userid}</InquireBodyText>
                <InquireBodyText col={1}>{date}</InquireBodyText>
            </InquireBodyRow>

            <MoreContainer active={state}>
                <MoreRow>
                    <Col col={2}/>
                    <MoreContents col={7}>{contents}</MoreContents>
                    <Col col={1}/>
                    <Col col={1}/>
                    <Col col={1}/>
                </MoreRow>
                <AnswerRow>
                    <Col col={2}/>
                    <Answer col={7}>{answer}</Answer>
                    <Col col={1}/>
                    <Col col={1}/>
                    <Col col={1}/>
                </AnswerRow>
            </MoreContainer>
        </React.Fragment>
    )
};

const ParseInquireList = ({inquires}) => {
    return inquires.map(({secret, kind, contents, answer, isAnswer, userid, date}, index) => {
        return (
            <React.Fragment key={index} >
                <ShowMore secret={secret} kind={kind} contents={contents} answer={answer} isAnswer={isAnswer} userid={userid} date={date}/>
            </React.Fragment>
        )
    });
};

export default function Inquire(props) {
    const {inquires} = props;

    return (
        <React.Fragment>
            <InquireHeaderContainer>
                <InquireHeaderText>상품 문의</InquireHeaderText>
                <InquireText>상품에 대해 궁금하신 점이 있으신 경우 문의해주세요</InquireText>
                <AddInquireButton>상품 문의하기</AddInquireButton>
            </InquireHeaderContainer>
            <InquireHeaderRow>
                <InquireHeader col={2}>구분</InquireHeader>
                <InquireHeader col={7}>내용</InquireHeader>
                <InquireHeader col={1}>답변여부</InquireHeader>
                <InquireHeader col={1}>닉네임</InquireHeader>
                <InquireHeader col={1}>등록일</InquireHeader>
            </InquireHeaderRow>
            <ParseInquireList inquires={inquires}/>
            <HorizontalBreak/>
        </React.Fragment>
    )
}