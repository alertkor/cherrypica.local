import React, {useState} from 'react';
import styled from "styled-components";
import {Row, Col} from 'styled-bootstrap-grid';
import Calendar from 'react-calendar';
import Select from "react-select";

const Root = styled.div`
    display: none;
    z-index: 2;
    background: white;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    ${({active}) => active && 'display: block;'}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #111111;
    border-bottom: 1px solid #e6e6e6;
`;

const CloseButton = styled.span`
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    right: 2rem;
    top: 1.2rem;
`;

const Body = styled.div`
    padding: 2rem;
`;

const Section = styled.div`

`;

const SectionName = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 1rem;
`;

const SectionBody = styled.div`
`;

const HorizontalBreak = styled.div`
    border-bottom: 1px solid #e7e7e7;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    height: 2rem;
    width: 100%;
    align-items: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
`;

const Radiobox = styled.input`
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

const Button = styled.div`
    display: flex;
    height: 4.4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: solid 1px #e6e6e6;
    background-color: #ffffff;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    margin-right: 1rem;
    color: #e6e6e6;
    border: solid 1px #e6e6e6;
    
    &:last-child {
        margin-right: 0;
    }
    
    &.active {
        border: solid 2px #111111;
        color: #111111;
    }
`;

const SizeButton = styled.div`
    display: flex;
    width: 100%;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e6e6e6;
    border: solid 1px #e6e6e6;
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        border: solid 2px #111111;
        background-color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        color: #111111;
    }
`;

const SeasonButton = styled.div`
    display: flex;
    width: 100%;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e6e6e6;
    border: solid 1px #e6e6e6;
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        border: solid 2px #111111;
        background-color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        color: #111111;
    }
`;

const TPORow = styled(Row)`
    margin: auto;
`;

const TPOButton = styled(Col)`
    display: flex;
    width: 100%;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e6e6e6;
    border: solid 1px #e6e6e6;
    margin-left: 0;
    margin-right: 1rem;
    margin-bottom: 1rem;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        border: solid 2px #111111;
        background-color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        color: #111111;
    }
`;

const PriceButton = styled.div`
    display: flex;
    white-space: nowrap;
    width: 100%;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e6e6e6;
    border: solid 1px #e6e6e6;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        border: solid 2px #111111;
        background-color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        color: #111111;
    }
`;

const SelectBrand = styled(Select)`
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #111111;
`;


export default function MobileFilter(props) {
    const {openFilter, setOpenFilter} = props;
    const [openCalendar, setOpenCalendar] = useState(false);
    const selectBrandOptions = [
        {value: 'AUGUSTE', label: 'AUGUSTE'},
        {value: 'GUCCI', label: 'GUCCI'},
        {value: 'IL GUFO KIDS', label: 'IL GUFO KIDS'},
        {value: 'BALENSIAGA', label: 'BALENSIAGA'},
        {value: 'MIGUEL ASES', label: 'MIGUEL ASES'},
    ];

    return (
        <Root active={openFilter} className={"overrding"}>
            <Header>
                FILTER
                <CloseButton onClick={() => setOpenFilter(false)}>✕</CloseButton>
            </Header>
            <Body>
                <Section>
                    <SectionName>대여일</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <Label>
                                <Radiobox type={"radio"} name={"duration"}/>
                                3 DAYS
                            </Label>
                            <Label>
                                <Radiobox type={"radio"} name={"duration"}/>
                                5 DAYS
                            </Label>
                            <Label>
                                <Radiobox type={"radio"} name={"duration"}/>
                                7 DAYS
                            </Label>
                        </FlexContainer>
                        <CalendarContainer>
                            <CalendarPlaceHolder onClick={() => setOpenCalendar(!openCalendar)}>날짜 선택</CalendarPlaceHolder>
                            <SelectCalendar active={openCalendar}/>
                        </CalendarContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>상태상품</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <Button onClick={(event) => {event.target.classList.toggle('active')}}>당일 발송 가능</Button>
                            <Button onClick={(event) => {event.target.classList.toggle('active')}}>쇼룸에서 확인가능</Button>
                        </FlexContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>선택대여/구매</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <Label>
                                <Radiobox type={"radio"} name={"duration"}/>
                                대여 ONLY 상품만
                            </Label>
                            <Label>
                                <Radiobox type={"radio"} name={"duration"}/>
                                구매 ONLY 상품만
                            </Label>
                        </FlexContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>사이즈</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <SizeButton onClick={(event) => event.target.classList.toggle('active')}>XS</SizeButton>
                            <SizeButton onClick={(event) => event.target.classList.toggle('active')}>S</SizeButton>
                            <SizeButton onClick={(event) => event.target.classList.toggle('active')}>M</SizeButton>
                            <SizeButton onClick={(event) => event.target.classList.toggle('active')}>L</SizeButton>
                            <SizeButton onClick={(event) => event.target.classList.toggle('active')}>XL</SizeButton>
                        </FlexContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>색상</SectionName>
                    <SectionBody>
                        {/*  TODO: Select the checbox with colors  */}
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>계절</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>봄</SeasonButton>
                            <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>여름</SeasonButton>
                            <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>가을</SeasonButton>
                            <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>겨울</SeasonButton>
                        </FlexContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>TPO</SectionName>
                    <SectionBody>
                        <TPORow>
                            <TPOButton col={3} onClick={(event) => event.target.classList.toggle('active')}>Date</TPOButton>
                            <TPOButton col={3} onClick={(event) => event.target.classList.toggle('active')}>Party</TPOButton>
                            <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Formal Look</TPOButton>
                            <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Vacation</TPOButton>
                            <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Wedding</TPOButton>
                            <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>For women</TPOButton>
                            <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>For men</TPOButton>
                        </TPORow>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>가격1 DAYS</SectionName>
                    <SectionBody>
                        <FlexContainer>
                            <PriceButton onClick={(event) => event.target.classList.toggle('active')}>~ 7,900원</PriceButton>
                            <PriceButton onClick={(event) => event.target.classList.toggle('active')}>8,000원 ~ 11,000원</PriceButton>
                            <PriceButton onClick={(event) => event.target.classList.toggle('active')}>11,100원 ~</PriceButton>
                        </FlexContainer>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
                <Section>
                    <SectionName>브랜드</SectionName>
                    <SectionBody>
                        <SelectBrand options={selectBrandOptions} isMulti={true}/>
                    </SectionBody>
                </Section>
                <HorizontalBreak/>
            </Body>
        </Root>
    )
}