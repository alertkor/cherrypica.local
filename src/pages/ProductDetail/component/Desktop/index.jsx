import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import ProductInfo from "./ProductInfo";
import ProductShot from "./ProductShot";
import Footer from "../../../../component/Footer";
import SuggestStyles from "./SuggestStyles";
import AboutProduct from "./AboutProduct";

const ProductImageContainer = styled(Col)`
    height: 100vh;
    overflow-y: scroll;
`;

const ProductInfoContainer = styled(Col)`
`;

export default function DesktopProductDetail(props) {
    const product_detail = [require('../../../../assets/detail/thumbnail.png'), require('../../../../assets/detail/detail.jpg')];
    const reviews = [
        {
            image: require('../../../../assets/files/detail/desktop-detail-review-thumbnail.png'),
            score: 5,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
        {
            image: require('../../../../assets/files/detail/desktop-detail-review-thumbnail.png'),
            score: 3,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
        {
            image: require('../../../../assets/files/detail/desktop-detail-review-thumbnail.png'),
            score: 2,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
        {
            image: require('../../../../assets/files/detail/desktop-detail-review-thumbnail.png'),
            score: 1,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
        {
            image: "",
            score: 4,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
        {
            image: require('../../../../assets/files/detail/desktop-detail-review-thumbnail.png'),
            score: 5,
            userid: "lily***",
            contents: "너무 고급스럽고 특별한 자리에 딱이에요\n중요한 자리가 있어서 빌렸는데 너무 마음에 들어요 다음에도 비슷한 일이 있으면 또 빌리고 싶은 마음~\n길이도 너무 좋고 가격도 정말 만족스러워요!",
            date: "19.09.25",
        },
    ];
    const inquires = [
        {
            secret: false,
            kind: "배송",
            contents: "오늘 바로 출발인가요?",
            answer: "아뇨",
            isAnswer: true,
            userid: "jinjin***",
            date: "19. 09.25",
        },
        {
            secret: false,
            kind: "배송",
            contents: "30일까지 받아보려면 언제 주문해야 하나요?\n지금 바로 주문하려고 하려고합니다!\n빠른 답변 부탁드립니다.",
            answer: "주문 안돼요",
            isAnswer: true,
            userid: "jinjin***",
            date: "19. 09.25",
        },
        {
            secret: true,
            kind: "배송",
            contents: "상품 관련 문의입니다",
            answer: "",
            isAnswer: true,
            userid: "jinjin***",
            date: "19. 09.25",
        },
        {
            secret: true,
            kind: "배송",
            contents: "상품 관련 문의입니다",
            answer: "",
            isAnswer: true,
            userid: "jinjin***",
            date: "19. 09.25",
        },
        {
            secret: false,
            kind: "배송",
            contents: "오늘 바로 출발인가요?",
            answer: "",
            isAnswer: false,
            userid: "jinjin***",
            date: "19. 09.25",
        },
        {
            secret: true,
            kind: "배송",
            contents: "상품 관련 문의입니다",
            answer: "",
            isAnswer: true,
            userid: "jinjin***",
            date: "19. 09.25",
        },
    ];

    return (
        <React.Fragment>
            <Container fluid className={"px-0"}>
                <Row>
                    <ProductImageContainer className={"px-0"} lg={8} xl={9}>
                        <ProductShot product={product_detail}/>
                    </ProductImageContainer>
                    <ProductInfoContainer className={"px-0"} lg={4} xl={3}>
                        <ProductInfo product={""}/>
                    </ProductInfoContainer>
                </Row>
            </Container>
            <SuggestStyles/>
            <AboutProduct reviews={reviews} inquires={inquires}/>
            <Footer/>
        </React.Fragment>
    )
}