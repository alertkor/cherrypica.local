import React, {useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";
import Select from 'react-select';
import Calendar from 'react-calendar';


const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    background: white;
    z-index: 3;
    display: none;
    
    ${({active}) => active && 'display: block;'}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #111111;
    margin-bottom: 3rem;
`;

const CloseButton = styled.span`
    position: absolute;
    font-size: 2rem;
    float: right;
    right: 2rem;
    cursor: pointer;
`;

const Body = styled.div`
    height: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Section = styled.div`
    margin-bottom: 3rem;
    
    &.last-section {
        margin-bottom: 16.6rem;
    }
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
    cursor: pointer;
    right: 0;
    display: none;
    z-index:2;
    
    ${({active}) => active && 'display: block;'}
`;

const HorizontalBreak = styled.div`
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
`;

const OrderContainer = styled.div`
    height: 15rem;
`;

const OrderInfoContainer = styled.div`
    height: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
`;

const CartButton = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9a9ba0;
    height: 5rem;
    margin-right: .8rem;
    text-align: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    cursor: pointer;
`;

const OrderButton = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background-color: #111111;
    text-align: center;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    cursor: pointer;
`;

const ResultPriceText = styled.div`
    display: inline-block;
    height: 100%;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    
    &:after {
        content: "총 대여 금액";
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

const OrderInfo = styled.div`
    display: grid;
    height: 100%;
    float: right;
    align-items: center;
`;

const SelectedDuration = styled.div`
    text-align: right;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #ee4a4a;
`;

const SelectedPrice = styled.div`
    font-family: Montserrat;
    font-size: 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
`;

export default function ProductOptions(props) {
    const {isOpenOption, setOpenOption} = props;
    const selectOptions = [
        {value: 'XS', label: 'XS'},
        {value: 'S', label: 'S'},
        {value: 'M', label: 'M'},
        {value: 'L', label: 'L'},
        {value: 'XL', label: 'XL'},
    ];
    const [rentalDuration, setRentalDuration] = useState({duration: 3, price: 29900});
    const [openCalendar, setOpenCalendar] = useState(false);

    // overriding body position relative to fixed
    // isOpenOption ? document.body.style.position = "fixed" : document.body.style.position = "relative";
    isOpenOption ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    return (
        <Root active={isOpenOption}>
            <Header>
                OPTION
                <CloseButton onClick={() => setOpenOption(false)}>✕</CloseButton>
            </Header>
            <Body>
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
                <Section className={"last-section"}>
                    <SectionName>날짜선택</SectionName>
                    <CalendarContainer>
                        <CalendarPlaceHolder onClick={() => setOpenCalendar(!openCalendar)}>날짜 선택</CalendarPlaceHolder>
                        <SelectCalendar active={openCalendar}/>
                    </CalendarContainer>
                </Section>

                <OrderContainer>
                    <HorizontalBreak/>
                    <OrderInfoContainer>
                        <ResultPriceText/>
                        <OrderInfo>
                            <SelectedDuration>{rentalDuration.duration}DAYS</SelectedDuration>
                            <SelectedPrice>{rentalDuration.price.toLocaleString()}</SelectedPrice>
                        </OrderInfo>
                    </OrderInfoContainer>
                    <Container>
                        <Row className={"justify-content-center"}>
                            <CartButton col={5}>장바구니</CartButton>
                            <OrderButton col={5}>주문하기</OrderButton>
                        </Row>
                    </Container>
                </OrderContainer>
            </Body>
        </Root>
    )
}