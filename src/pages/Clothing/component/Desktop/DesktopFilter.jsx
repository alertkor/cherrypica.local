import React, {useState} from 'react';
import styled from "styled-components";
import Calendar from "react-calendar";
import {Col, Row} from "styled-bootstrap-grid";
import Select from "react-select";


const FilterHeader = styled.div`
    display: flex;
    align-items: center;
`;

const FiltersText = styled.span`
    &:before {
        content: "Filters";
        font-family: Montserrat;
        font-size: 1.8rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
    }
`;

const ResetContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const ResetImg = styled.img`
    margin-right: .6rem;
`;

const ResetText = styled.span`
    cursor: pointer;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #999999;
`;

const Section = styled.div`
    margin-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e7e7e7;
`;

const SectionName = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 1.3rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 1rem;
`;

const SectionBody = styled.div`
`;

const LabelFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Label = styled.label`
    height: 2rem;
    align-items: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    margin-right: 3rem;
    
    &:last-child {
        margin-right: 0;
    }
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

const FlexContainer = styled.div`
    display: flex;
    flex-align: center;
`;

const StatusButton = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 4.4rem;
    border: solid 1px #e7e7e7;
    background-color: #ffffff;
    width: 100%;
    font-family: AppleSDGothicNeo;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #e7e7e7;
    margin-right: 1rem;
    
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
    cursor: pointer;
    height: 4.4rem;
    border: solid 1px #e7e7e7;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e7e7e7;
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

const FlexColorContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const ColorItem = styled.div`
    cursor: pointer;
    border-radius: 5rem;
    width: 3.4rem;
    height: 3.4rem;
    border: solid 1px #e7e7e7;
    margin-right: 1rem;
    margin-bottom: 1rem;
    background: ${({color}) => color && color}
`;

const PatternSilver = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 5rem;
    width: 3.4rem;
    height: 3.4rem;
    border: solid 1px #e7e7e7;
    margin-right: 1rem;
    background: radial-gradient(circle at 50% 50%, #ffffff, #dddddd 181%);
`;

const PatternGold = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 5rem;
    width: 3.4rem;
    height: 3.4rem;
    border: solid 1px #e7e7e7;
    margin-right: 1rem;
    background: radial-gradient(circle at 50% 50%, #ffffff, #d9c090 181%);
`;

const Pattern = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    border: solid 1px #e7e7e7;
    object-fit: contain;
    border-radius: 5rem;
    width: 3.4rem;
    height: 3.4rem;
    background: url(${({color}) => color && color});
    background-size: cover;
    background-repeat: no-repeat;  
    margin-right: 1rem;  
`;

const SeasonButton = styled.div`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 4.4rem;
    border: solid 1px #e7e7e7;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e7e7e7;
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
    border: solid 1px #e6e6e6;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.1rem;
    color: #e6e6e6;
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

const PriceFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PriceButton = styled.div`
    display: flex;
    white-space: nowrap;
    border: solid 1px #e6e6e6;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1.2rem;
    color: #e6e6e6;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        border: solid 2px #111111;
        background-color: #ffffff;
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

export default function DesktopFilter(props) {
    const [openCalendar, setOpenCalendar] = useState(false);
    const selectBrandOptions = [
        {value: 'AUGUSTE', label: 'AUGUSTE'},
        {value: 'GUCCI', label: 'GUCCI'},
        {value: 'IL GUFO KIDS', label: 'IL GUFO KIDS'},
        {value: 'BALENSIAGA', label: 'BALENSIAGA'},
        {value: 'MIGUEL ASES', label: 'MIGUEL ASES'},
    ];

    return (
        <React.Fragment>
            <FilterHeader>
                <FiltersText/>
                <ResetContainer>
                    <ResetImg src={require('../../../../assets/files/icon/ico-reset-filter.svg')}/>
                    <ResetText>초기화</ResetText>
                </ResetContainer>
            </FilterHeader>
            <Section>
                <SectionName>대여일</SectionName>
                <SectionBody>
                    <LabelFlexContainer className={"mb-4"}>
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
                    </LabelFlexContainer>
                    <CalendarContainer>
                        <CalendarPlaceHolder onClick={() => setOpenCalendar(!openCalendar)}>날짜 선택</CalendarPlaceHolder>
                        <SelectCalendar active={openCalendar}/>
                    </CalendarContainer>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>상품상태</SectionName>
                <SectionBody>
                    <FlexContainer>
                        <StatusButton onClick={(event) => event.target.classList.toggle('active')}>당일 발송
                            가능</StatusButton>
                        <StatusButton onClick={(event) => event.target.classList.toggle('active')}>쇼륨에서
                            확인가능</StatusButton>
                    </FlexContainer>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>대여/구매 선택</SectionName>
                <SectionBody>
                    <LabelFlexContainer>
                        <Label>
                            <Radiobox type={"radio"} name={"duration"}/>
                            대여 ONLY 상품만
                        </Label>
                        <Label>
                            <Radiobox type={"radio"} name={"duration"}/>
                            구매 ONLY 상품만
                        </Label>
                    </LabelFlexContainer>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>사이즈</SectionName>
                <FlexContainer>
                    <SizeButton onClick={(event) => event.target.classList.toggle('active')}>XS</SizeButton>
                    <SizeButton onClick={(event) => event.target.classList.toggle('active')}>S</SizeButton>
                    <SizeButton onClick={(event) => event.target.classList.toggle('active')}>M</SizeButton>
                    <SizeButton onClick={(event) => event.target.classList.toggle('active')}>L</SizeButton>
                    <SizeButton onClick={(event) => event.target.classList.toggle('active')}>XL</SizeButton>
                </FlexContainer>
            </Section>
            <Section>
                <SectionName>색상</SectionName>
                <SectionBody>
                    <FlexColorContainer className={"mb-2"}>
                        <ColorItem color={"#323232"}/>
                        <ColorItem color={"#999999"}/>
                        <ColorItem color={"#ffffff"}/>
                        <ColorItem color={"#ede2d0"}/>
                        <ColorItem color={"#a37651"}/>
                        <ColorItem color={"#c0402b"}/>
                        <ColorItem color={"#ed7946"}/>
                        <ColorItem color={"#f6cb60"}/>
                        <ColorItem color={"#6fa280"}/>
                        <ColorItem color={"#4969b2"}/>
                        <ColorItem color={"#a277b4"}/>
                        <ColorItem color={"#f7a0b6"}/>
                        <PatternSilver/>
                        <PatternGold/>
                        <Pattern color={require('../../../../assets/files/icon/ft-pattern-03@2x.jpg')}/>
                        <Pattern color={require('../../../../assets/files/icon/ft-pattern-04@2x.jpg')}/>
                        <Pattern color={require('../../../../assets/files/icon/ft-pattern-05@2x.jpg')}/>
                        <Pattern color={require('../../../../assets/files/icon/ft-pattern-06@2x.jpg')}/>
                    </FlexColorContainer>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>계절</SectionName>
                <FlexContainer>
                    <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>봄</SeasonButton>
                    <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>여름</SeasonButton>
                    <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>가을</SeasonButton>
                    <SeasonButton onClick={(event) => event.target.classList.toggle('active')}>겨울</SeasonButton>
                </FlexContainer>
            </Section>
            <Section>
                <SectionName>TPO</SectionName>
                <SectionBody>
                    <TPORow>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Date</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Party</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Formal Look</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Vacation</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>Wedding</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>For women</TPOButton>
                        <TPOButton col={4} onClick={(event) => event.target.classList.toggle('active')}>For men</TPOButton>
                    </TPORow>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>1DAYS 가격</SectionName>
                <SectionBody>
                    <PriceFlexContainer>
                        <PriceButton onClick={(event) => event.target.classList.toggle('active')}>~ 7,900원</PriceButton>
                        <PriceButton onClick={(event) => event.target.classList.toggle('active')}>8,000원 ~ 11,000원</PriceButton>
                        <PriceButton onClick={(event) => event.target.classList.toggle('active')}>11,100원 ~</PriceButton>
                    </PriceFlexContainer>
                </SectionBody>
            </Section>
            <Section>
                <SectionName>브랜드</SectionName>
                <SectionBody>
                    <SelectBrand options={selectBrandOptions} isMulti={true}/>
                </SectionBody>
            </Section>
        </React.Fragment>
    )
}