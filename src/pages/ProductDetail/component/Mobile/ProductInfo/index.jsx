import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ProductDetail = styled.div`
    height: 100%;
    margin-bottom: 2rem;
`;

const ProductContainer = styled.div`
    padding: 1.4rem 2.2rem 1.1rem 2rem;
    background: white;
`;

const Brand = styled.div`
    opacity: 0.3;
    font-family: Montserrat;
    font-size: 1.1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #000000;
    text-decoration: underline;
    margin-bottom: .4rem;
`;

const Title = styled.div`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.35px;
    color: #222222;
    margin-bottom: .9rem;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: row;
    justify-content: center;
`;

const LimitTime = styled.div`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #ee4a4a;
    display: flex;
    width: 100%;
`;

const OriginalPrice = styled.div`
    display: flex;
    align-items: center;
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    margin-right: .9rem;
    text-decoration: line-through;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
`;

const DesignerContainer = styled.div`
    width: 100%;
    height: 4.8rem;
    padding: 0 1rem 0rem 1rem;
    padding-bottom: 1.1rem;
    background: white;
`;

const DesignerInfo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #222222;
`;

const LeftCol = styled.div`
    width: 4.7rem;
    align-items: center;
    height: 100%;
    display: flex;
    border-right: 1px solid black;
    justify-content: center;
    cursor: pointer;
`;

const RightCol = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1.6rem;
`;

const Badge = styled.div`
    display: flex;
    align-items: center;
    width: 6rem;
    height: 2rem;
    border-radius: 9px;
    background-color: #555555;
    font-family: Montserrat;
    font-size: .8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    margin-right: .8rem;
    
    &:after {
        content: "DESIGNER";
        color: #ffffff;
        width: 100%;
        text-align: center;
    }
`;

const DesignerName = styled.div`
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: #000000;
`;

const Description = styled.div`
    padding: 0rem 4rem 2rem 4rem;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: #444444;
`;

const ProductInfoContainer = styled.div`
    padding-left: 2rem;
    margin-bottom: 1.4rem;
`;

const ProductInfoSquare = styled.span`
    padding: .6rem .8rem .3rem .8rem;
    margin-right: 1rem;
    border: solid 1px #e7e7e7;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666666;
    
    &:last-child {
        margin-right: 0;
    }
`;

const ProductAdditionalInfoContainer = styled.div`
    height: 8rem;
    padding: 0 1rem 0 1rem;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
`;

const ProductAdditionalInfo = styled.div`
    cursor: pointer;
    padding: 1.3rem 0 1.2rem 2rem;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
`;

const ArrowDownIcon = styled(FontAwesomeIcon)`
    position: relative;
    float: right;
    margin-right: 2rem;
`;

export default function ProductInfo(props) {
    return (
        <React.Fragment>
            <ProductDetail>
                <ProductContainer>
                    <Brand>INUSWAY</Brand>
                    <Title>19FW Unbalance Long Shirts Dress - Ivory</Title>
                    <PriceContainer>
                        <LimitTime>3DAYS</LimitTime>
                        <OriginalPrice>499,000</OriginalPrice>
                        <Price>29,000</Price>
                    </PriceContainer>
                </ProductContainer>
                <DesignerContainer>
                    <DesignerInfo>
                        <LeftCol>
                            <img alt="ico-filled-like" src={require('../../../../../assets/files/icon/icon-detail-filled-like.svg')}/>
                        </LeftCol>
                        <RightCol>
                            <Badge/>
                            <DesignerName>lang&lu</DesignerName>
                        </RightCol>
                    </DesignerInfo>
                </DesignerContainer>
            </ProductDetail>

            <ProductInfoContainer>
                <ProductInfoSquare>바로 대여가능</ProductInfoSquare>
                <ProductInfoSquare>쇼룸에서 대여가능</ProductInfoSquare>
                <ProductInfoSquare>구매 가능</ProductInfoSquare>
            </ProductInfoContainer>

            <Description>
                래글런 디자인에 아방하게 떨어지는 소매 라인으로 포인트를 주었으며
                착용 시 한층 더 러블리하면서도 센슈얼한 무드가 느껴지고 허리와 소매
                스트랩이 세트로 함께 구성되어 있어 다양한 연출이 가능하면서 체형을
                알맞게 라인을 잡아줍니다.<br/><br/>

                여유있게 떨어지는 품으로 여리여리한 실루엣이 연출되고 롱한 기장으로
                누가 입어도 멋스러운 아웃핏이 표현됩니다
            </Description>

            <ProductAdditionalInfoContainer>
                <ProductAdditionalInfo>
                    사이즈 & 모델 사이즈 정보
                    <ArrowDownIcon icon={Icons.faChevronDown}/>
                </ProductAdditionalInfo>
                <ProductAdditionalInfo>
                    상품정보제공고시
                    <ArrowDownIcon icon={Icons.faChevronDown}/>
                </ProductAdditionalInfo>
            </ProductAdditionalInfoContainer>
        </React.Fragment>
    )
};