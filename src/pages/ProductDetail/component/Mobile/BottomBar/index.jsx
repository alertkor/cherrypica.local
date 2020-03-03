import React, {useState} from 'react';
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const desktopBreakpoint = media.lg;

const Root = styled.div`
    position: fixed;
    z-index: 2;
    bottom: 0;
    width: 100%;
    transition: transform 0.15s ease-in-out;
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const Content = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: white;
`;

const HideContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Hide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 2rem;
    border-top-right-radius: .8rem;
    border-top-left-radius: .8rem;
    background: white;
    cursor: pointer;
`;

const ProductDetail = styled.div`
    height: 100%;
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

const BuyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 7rem;
    background-color: #f5f5f5;
    padding: 1rem;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 5rem;
    max-height: 5rem;
    width: 100%;
    height: 100%;
    border: solid 1px #e7e7e7;
    background-color: #ffffff;
    margin-right: .5rem;
    cursor: pointer;
`;

const BuyButton = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    background-color: #111111;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    margin-left: .5rem;
`;

function ShowInitialize(props) {
    const {setOpenDetail} = props;

    return (
        <React.Fragment>
            <HideContainer>
                <Hide onClick={() => setOpenDetail(true)}>
                    <FontAwesomeIcon icon={Icons.faChevronDown}/>
                </Hide>
            </HideContainer>
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
        </React.Fragment>
    )
}

export default function BottomBar(props) {
    const {setOpenOption} = props;
    const [isOpenDetail, setOpenDetail] = useState(false);
    let lastScroll, currentScroll = 0;

    window.addEventListener('scroll', () => {
        let mobileBottomBar = document.getElementsByClassName('mobile-bottom-bar')[0];
        currentScroll = document.documentElement.scrollTop;
        // Sometimes occur error.
        if (mobileBottomBar) {
            if (currentScroll >= 150 && currentScroll > lastScroll) {
                mobileBottomBar.style.transform = "translateY(23rem)";
            } else if (currentScroll === lastScroll) {
            } else {
                mobileBottomBar.style.transform = "translateY(0rem)";
            }
        }
        lastScroll = currentScroll;
    });

    return (
        <Root className={"mobile-bottom-bar"}>
            {
                isOpenDetail === false
                    ? <ShowInitialize setOpenDetail={setOpenDetail}/>
                    : ''
            }
            <Content>
                <BuyContainer>
                    <Button><img alt="ico-like" src={require('../../../../../assets/files/icon/icon-detail-like.svg')}/></Button>
                    <Button><img alt="ico-share" src={require('../../../../../assets/files/icon/icon-detail-share.svg')}/></Button>
                    <BuyButton onClick={() => {
                        setOpenOption(true)
                    }}>주문하기</BuyButton>
                </BuyContainer>
            </Content>


        </Root>
    )

};