import React, {useState} from 'react';
import styled from "styled-components";
import {Row, Col, Container} from "styled-bootstrap-grid";
import Select from "react-select";
import Calendar from "react-calendar";

const Root = styled.div`
    padding-top: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
`;

const BrandContainer = styled(Row)`
    margin-bottom: 1.2rem;
`;

const Brand = styled.div`
    opacity: 0.3;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: -0.35px;
    color: #000000;
    display: flex;
`;

const Icon = styled.img`
    width: 1.6rem;
    height: 1.7rem;
    display: inline-block;
    float: right;
    cursor: pointer;
`;

const Title = styled.div`
    margin-bottom: 2rem;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`;

const OriginalPrice = styled.div`
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    text-decoration: line-through;
    text-align: right;
`;

const LimitTime = styled.div`
    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.46px;
    color: #ee4a4a;
    display: flex;
    width: 100%;
`;

const Price = styled.div`
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #111111;
`;

const DesignerContainer = styled.div`
    width: 100%;
    height: 4.8rem;
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

const DesignerBadge = styled.div`
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

const HorizontalBreak = styled.div`
    border: 1px solid #e7e7e7;
    margin: 3rem 0 3rem 0;
`;

const ProductBadgeContainer = styled.div`
    margin-bottom: 2rem;
`;

const Badge = styled.span`
    width: 100%;
    border: solid 1px #e7e7e7;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666666;
    margin-right: 1rem;
    padding: .6rem .8rem .3rem .8rem;
`;

const Description = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 1.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.4px;
  color: #777777;
  margin-bottom: 3rem;
`;

const Section = styled.div`
    margin-bottom: 3rem;
`;

const SectionName = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    margin-bottom: 1rem;
`;

const SelectSize = styled(Select)`
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #111111;
    border: solid 1px #e7e7e7;
    background-color: #f9f9f9;
    outline: none;
    cursor: pointer;
`;

const RentalRow = styled(Row)`
    height: 4.4rem;
    justify-content: center;
`;

const RentalDuration = styled(Col)`
    max-width: 20rem;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    border: solid 1px #e7e7e7;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #e7e7e7;
    margin-right: 1rem;
    cursor: pointer;
    
    ${({selected}) => selected && `
        color: black;
        font-weight: 600;
        border: solid 2px black;
    `}
`;

const CalendarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CalendarPlaceHolder = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.4rem;
    border: solid 1px #e7e7e7;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #e7e7e7e7;
`;

const SelectCalendar = styled(Calendar)`
    position: absolute;
    width: 100%!important;
    cursor: pointer;
    right: 0;
    display: none;
    z-index:2;
    
    ${({active}) => active && 'display: block;'}
`;

const CartButton = styled.div`
    display: flex;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    background-color: #9a9ba0;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 1.4rem;
`;

const OrderButton = styled.div`
    display: flex;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 4.4rem;
`;

const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 1.4rem;
    cursor: pointer;
`;

const ArrowIcon = styled.img`
    margin-right: 1.1rem;
`;

const Info = styled.div`
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #444444;
`;

export default function ProductInfo(props) {
    const selectOptions = [
        {value: 'XS', label: 'XS'},
        {value: 'S', label: 'S'},
        {value: 'M', label: 'M'},
        {value: 'L', label: 'L'},
        {value: 'XL', label: 'XL'},
    ];
    const [rentalDuration, setRentalDuration] = useState({duration: 3, price: 29900});
    const [openCalendar, setOpenCalendar] = useState(false);

    return (
        <Root>
            <BrandContainer>
                <Col col={9}>
                    <Brand>INUSWAY</Brand>
                </Col>
                <Col col={1} className={"px-0"}>
                    <Icon src={require('../../../../../assets/files/icon/icon-detail-like.svg')}/>
                </Col>
                <Col col={1} className={"px-0"}>
                    <Icon src={require('../../../../../assets/files/icon/icon-detail-share.svg')}/>
                </Col>
            </BrandContainer>

            <Title>iuw278 shoulder shirring knit style (purple)</Title>

            <OriginalPrice>499,000</OriginalPrice>
            <PriceContainer>
                <LimitTime>3DAYS</LimitTime>
                <Price>29,000</Price>
            </PriceContainer>

            <DesignerContainer>
                <DesignerInfo>
                    <LeftCol>
                        <img alt="ico-like" src={require('../../../../../assets/files/icon/icon-detail-like.svg')}/>
                    </LeftCol>
                    <RightCol>
                        <DesignerBadge/>
                        <DesignerName>lang&lu</DesignerName>
                    </RightCol>
                </DesignerInfo>
            </DesignerContainer>

            <HorizontalBreak/>
            <ProductBadgeContainer>
                <Badge>바로 대여가능</Badge>
                <Badge>쇼룸에서 대여가능</Badge>
                <Badge>구매 가능</Badge>
            </ProductBadgeContainer>

            <Description>착용 시 한층 더 러블리하면서도 센슈얼한 무드가 느껴지고 허리와 소매 스트랩이 세트로 함께 구성되어 있어 다양한 연출이 가능하면서 체형을 알맞게 라인을 잡아줍니다</Description>

            <Section>
                <SectionName>사이즈</SectionName>
                <SelectSize options={selectOptions} placeholder={"사이즈 선택"}/>
            </Section>
            <Section>
                <SectionName>대여일</SectionName>
                <Container>
                    <RentalRow>
                        <RentalDuration col={3} onClick={() => setRentalDuration({duration: 3, price: 29900})} selected={rentalDuration.duration === 3}>
                            3DAYS
                            29,900
                        </RentalDuration>
                        <RentalDuration col={3} onClick={() => setRentalDuration({duration: 5, price: 59900})} selected={rentalDuration.duration === 5}>
                            5DAYS
                            59,900
                        </RentalDuration>
                        <RentalDuration col={3} onClick={() => setRentalDuration({duration: 7, price: 79900})} selected={rentalDuration.duration === 7}>
                            7DAYS
                            79,900
                        </RentalDuration>
                    </RentalRow>
                </Container>
            </Section>
            <Section>
                <SectionName>날짜선택</SectionName>
                <CalendarContainer>
                    <CalendarPlaceHolder onClick={() => setOpenCalendar(!openCalendar)}>날짜 선택</CalendarPlaceHolder>
                    <SelectCalendar active={openCalendar}/>
                </CalendarContainer>
            </Section>

            <HorizontalBreak/>

            <CartButton>장바구니</CartButton>
            <OrderButton>주문하기</OrderButton>

            <InfoContainer>
                <ArrowIcon src={require('../../../../../assets/files/icon/icon-info-arrow.svg')}/>
                <Info>사이즈 & 모델 사이즈 정보</Info>
            </InfoContainer>

            <InfoContainer>
                <ArrowIcon src={require('../../../../../assets/files/icon/icon-info-arrow.svg')}/>
                <Info>상품정보제공고시</Info>
            </InfoContainer>
        </Root>
    )
}