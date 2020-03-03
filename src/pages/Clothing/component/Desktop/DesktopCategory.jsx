import React from 'react';
import {Container, Row, Col} from "styled-bootstrap-grid";
import styled from "styled-components";
import DesktopFilter from "./DesktopFilter";
import Select from "react-select";


const Root = styled(Container)`
`;

const DesktopText = styled.div`
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.54px;
    color: #111111;
    text-align: center;
`;

const LeftCol = styled(Col)`
    padding-top: 4rem;
    // height: 92vh;
    // overflow-y: scroll;
`;

const RightCol = styled(Col)`
    padding: 5rem 3rem 0 3rem;
    // height: 92vh;
    // overflow-y: scroll;
`;

const Categories = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

const Category = styled.div`
    display: flex;
    height: 4.4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: solid 1px #111111;
    background-color: #ffffff;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #111111;
    margin-right: 1.6rem;
    cursor: pointer;
    
    &:last-child {
        margin-right: 0;
    }
    
    &.active {
        color: white;
        background: black;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`;

const LeftContainer = styled.div`
    display: flex;
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const SortName = styled.span`
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    cursor: pointer;
    
    &.active {
        font-weight: bold;
        color: #222222;
    }
`;

const Separator = styled.span`
    &:after {
        font-family: AppleSDGothicNeo;
        font-size: 1.6rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
        content: "|";
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const SelectCount = styled(Select)`
    width: 16rem;
    margin-left: 3rem;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #82828b;
`;

const ProductCount = styled.div`
    display: flex;
    white-space: pre;
    font-family: AppleSDGothicNeo;
    font-size: 1.6rem;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
`;

const ProductCountText = styled.div`
    font-weight: bold;
`;

const ProductRow = styled(Row)`
    margin: auto;
`;

const Product = styled(Col)`
    margin-bottom: 5rem;
`;

const Img = styled.img`
    width: 100%;
`;

const Badge = styled.span`
    padding: .5rem .5rem .3rem .6rem;
    border: solid 1px #e7e7e7;
    font-family: AppleSDGothicNeo;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666666;
    margin-right: .6rem;
`;

const ProductDetail = styled.div`
`;

const Brand = styled.div`
    opacity: 0.3;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: -0.5px;
    color: #000000;
    margin-top: 1.2rem;
`;

const Title = styled.div`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: #444444;
    margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

const OriginalPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: .8rem;
    text-decoration: line-through;
`;

const Price = styled.div`
    display: flex;
    width: 100%;
    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    color: #222222;
    
    &:after {
        content: " / 1 DAYS";
        white-space: pre;
        font-family: Montserrat;
        font-size: 1.4rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: -0.29px;
        color: #868e96;
    }
`;


function RenderProduct(props) {
    const {products} = props;
    return products.map(({thumbnail, badge, brand, title, originalPrice, price}, index) => {
        return (
            <Product col={3} className={"px-2"} key={index}>
                <Img src={thumbnail}/>
                <ProductDetail>
                    {badge.map((each, index) => {
                        return <Badge key={index}>{each}</Badge>
                    })}
                    <Brand>{brand}</Brand>
                    <Title>{title}</Title>
                    <PriceContainer>
                        <Price>{price.toLocaleString()}</Price>
                        <OriginalPrice>{originalPrice.toLocaleString()}</OriginalPrice>
                    </PriceContainer>
                </ProductDetail>
            </Product>
        )
    });
}

export default function DesktopCategory(props) {
    const {products} = props;

    const selectCountOptions = [
        {value: '20', label: '20개씩 보기'},
        {value: '40', label: '40개씩 보기'},
        {value: '60', label: '60개씩 보기'},
        {value: '80', label: '80개씩 보기'},
        {value: '100', label: '100개씩 보기'},
    ];

    return (
        <Root fluid>
            <Row>
                <LeftCol xl={2} lg={2}>
                    <DesktopFilter />
                </LeftCol>
                <RightCol xl={10} lg={9}>
                    <DesktopText>CLOTHING</DesktopText>
                    <Categories>
                        <Category onClick={(event) => event.target.classList.toggle('active')} className={"active"}>All</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>Dress</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>Outer</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>Top</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>Skirts</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>Pants</Category>
                        <Category onClick={(event) => event.target.classList.toggle('active')}>For man</Category>
                    </Categories>
                    <FlexContainer>
                        <LeftContainer>
                            <ProductCount>총 <ProductCountText>{products.length}</ProductCountText>개</ProductCount>
                        </LeftContainer>
                        <RightContainer>
                            <SortName className={"active"}>신상품순</SortName>
                            <Separator/>
                            <SortName>인기순</SortName>
                            <Separator/>
                            <SortName>낮은 가격순</SortName>
                            <Separator/>
                            <SortName>높은 가격순</SortName>
                            <SelectCount options={selectCountOptions} placeholder={"20개씩 보기"}  defaultValue={selectCountOptions[0]}/>
                        </RightContainer>
                    </FlexContainer>
                    <ProductRow>
                        <RenderProduct products={products}/>
                    </ProductRow>
                </RightCol>
            </Row>
        </Root>
    )
}