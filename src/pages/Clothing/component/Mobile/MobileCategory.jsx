import React, {useState} from 'react';
import {Container, Row, Col} from "styled-bootstrap-grid";
import styled from "styled-components";
import Select from "react-select";
import MobileFilter from "./MobileFilter";


const MobileHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.4rem;
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #ffffff;
    background: black;
`;

const ScrollingCategories = styled.div`
    overflow-y: scroll;
    white-space: nowrap;
    height: 3.6rem;
    padding-left: 2rem;
    margin-bottom: 2rem;
`;

const Item = styled.span`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: -0.23px;
    color: #777777;
    margin-right: 2rem;
    cursor: pointer;
`;

const FilterContainer = styled.div`
    margin-bottom: 1.4rem;
    text-align: right;
`;

const FilterText = styled.span`
    margin-right: 1rem;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #111111;
    cursor: pointer;
`;

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    margin-bottom: 1.2rem;
`;

const ProductCount = styled.div`
    display: flex;
    margin-left: 1rem;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-right: 8.4rem;
`;

const CountText = styled.div`
    font-weight: bold;
`;

const SelectCount = styled(Select)`
    width: 25rem;
    margin-right: .6rem;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #82828b;
`;

const SelectSort = styled(Select)`
    width: 100%;
    margin-right: 1rem;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #82828b;
`;

const ProductContainer = styled(Row)`
    margin: auto;
`;

const Product = styled(Col)`
    margin-bottom: 3rem;
`;

const ProductDetail = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
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
    margin-top: .6rem;
`;

const Title = styled.div`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: #444444;
    margin-bottom: .2rem;
`;

const OriginalPrice = styled.div`
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 1.2rem;
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
    font-family: Montserrat;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    color: #222222;
    
    &:after {
        content: " / 1 DAYS";
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
            <Product col={6} className={"px-0"} key={index}>
                <Img src={thumbnail}/>
                <ProductDetail>
                    {badge.map((each, index) => {
                        return <Badge key={index}>{each}</Badge>
                    })}
                    <Brand>{brand}</Brand>
                    <Title>{title}</Title>
                    <OriginalPrice>{originalPrice.toLocaleString()}</OriginalPrice>
                    <Price>{price.toLocaleString()}</Price>
                </ProductDetail>
            </Product>
        )
    });
}

export default function MobileCategory(props) {
    const {products} = props;
    const [openFilter, setOpenFilter] = useState(false);
    const selectCountOptions = [
        {value: '20', label: '20'},
        {value: '40', label: '40'},
        {value: '60', label: '60'},
        {value: '80', label: '80'},
        {value: '100', label: '100'},
    ];

    const selectSortOptions = [
        {value: 'last', label: '최신순'},
        {value: 'like', label: '좋아요 많은 순'},
    ];

    return (
        <React.Fragment>
            <MobileHeader>CLOTHING</MobileHeader>
            <ScrollingCategories>
                <Item>All</Item>
                <Item>Dress</Item>
                <Item>Outer</Item>
                <Item>Top</Item>
                <Item>Skirts</Item>
                <Item>Pants</Item>
                <Item>For Man</Item>
            </ScrollingCategories>
            <FilterContainer>
                <FilterText onClick={() => setOpenFilter(true)}>+ Filter</FilterText>
            </FilterContainer>
            <SortContainer>
                <ProductCount>총 <CountText>{products.length}</CountText>개</ProductCount>
                <SelectCount options={selectCountOptions} placeholder={"20"}/>
                <SelectSort options={selectSortOptions} placeholder={"최신순"}/>
            </SortContainer>
            <Container fluid className={"px-0"}>
                <ProductContainer>
                    <RenderProduct products={products}/>
                </ProductContainer>
            </Container>

            <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter}/>
        </React.Fragment>
    )
}