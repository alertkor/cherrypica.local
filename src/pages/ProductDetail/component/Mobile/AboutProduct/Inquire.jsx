import React, {useState} from 'react';
import styled from "styled-components";
import {Row, Col} from "styled-bootstrap-grid";

const InquireHeaderContainer = styled.div`
    margin-bottom: 2rem;
`;

const InquireHeaderText = styled.div`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #111111;
    margin-bottom: .4rem;
`;

const InquireText = styled.div`
    display: block;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 2rem;
`;

const AddInquireButton = styled.div`
    display: flex;
    height: 4.4rem;
    width: 100%;
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

const InquireHorizontalBreak = styled(Row)`
    border-bottom: 1px solid #222;
    width: 100%;
    margin: auto;
`;

const InquireBodyRow = styled(Row)`
    padding-top: 1.4rem;
    width: 100%;
    height: 7rem;
    margin: auto; 
    border-bottom: 1px solid #d8d8d8;
    cursor: pointer;
`;

const InquireBodyText = styled(Col)`  
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #444444;
    padding: 0;
    
    &.contents {
        justify-content: unset;
    }
    
    &.is-answer {
        text-align: right;
        font-weight: bold;
    }
    
    &.userid {
        color: #444444;
        opacity: .8;
        white-space: pre;
        text-align: right;
    }
`;

const ContentInner = styled.span`
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    width: 19rem;
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
    font-size: 1.2rem;
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
    font-size: 1.2rem;
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
                <InquireBodyText col={9}>{kind}</InquireBodyText>
                <InquireBodyText col={3} className={"is-answer"}>{isAnswer ? '답변 완료' : '답변 대기'}</InquireBodyText>
                <InquireBodyText col={9} className={"contents"}>
                    <ContentInner>{secret ? <LockIcon/> : ''} {contents}</ContentInner>
                </InquireBodyText>
                <InquireBodyText col={3} className={"userid"}>{userid}      {date}</InquireBodyText>
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
            <InquireHorizontalBreak/>
            <ParseInquireList inquires={inquires}/>
            <HorizontalBreak/>
        </React.Fragment>
    )
}