import React, {useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import Review from "./Review";
import Inquire from "./Inquire";

const Root = styled(Container)`
`;

const HeaderRow = styled(Row)`
    height: 4.4rem;
    margin-bottom: 3rem;
    width: 100%;
    margin: auto;
`;

const HeaderColumn = styled(Col)`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    opacity: 0.5;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #111111;
    background: #f1f1f1;
    border-bottom: 1px solid black;
    cursor: pointer;
    
    ${({active}) => active && `
        opacity: 1;
        background: white;
        border: 1px solid black;
        border-bottom: none;
        font-weight: bold;
    `}
`;

const SectionRow = styled(Row)`
    width: 100%;
    margin: auto;
`;

const Section = styled(Col)`
    margin-top: 1.4rem;
    display: none;
    
    ${({active}) => active && 'display: block;'}
`;

export default function AboutProduct(props) {
    const {reviews, inquires} = props;
    const [isSelectedReview, setSelectedReview] = useState(true);
    const [isSelectedInquire, setSelectedInquire] = useState(false);
    const [isSelectedGuide, setSelectedGuide] = useState(false);

    return (
        <Root>
            <HeaderRow>
                <HeaderColumn col={4} active={isSelectedReview} onClick={() => {
                    setSelectedReview(true);
                    setSelectedInquire(false);
                    setSelectedGuide(false);
                }}>상품리뷰<br/>({reviews.length})</HeaderColumn>
                <HeaderColumn col={4} active={isSelectedInquire} onClick={() => {
                    setSelectedReview(false);
                    setSelectedInquire(true);
                    setSelectedGuide(false);
                }}>상품문의<br/>({inquires.length})</HeaderColumn>
                <HeaderColumn col={4} active={isSelectedGuide} onClick={() => {
                    setSelectedReview(false);
                    setSelectedInquire(false);
                    setSelectedGuide(true);
                }}>반품/교환 안내</HeaderColumn>
            </HeaderRow>
            <SectionRow>
                <Section col={12} className={"px-0"} active={isSelectedReview}>
                    <Review reviews={reviews}/>
                </Section>
                <Section col={12} className={"px-0"} active={isSelectedInquire}>
                    <Inquire inquires={inquires}/>
                </Section>
                <Section col={12} className={"px-0"} active={isSelectedGuide}>
                </Section>
            </SectionRow>
        </Root>
    )
}