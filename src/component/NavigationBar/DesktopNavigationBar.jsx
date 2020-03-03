import React from "react";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Logo = require('../../assets/files/logo.svg');
const Hambuger = require('../../assets/files/icon/hambuger-ico.svg');
const SearchIcon = require('../../assets/files/icon/ico-search.svg');

const LargeBreakPoint = media.lg;
const ExtraLargeBreakPoint = media.xl;

const Root = styled(Container)`
    height: 8rem;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    margin: 0;
    
    ${LargeBreakPoint`
        max-width: 1199px;
    `}

    ${ExtraLargeBreakPoint`
        max-width: 100vw;
    `}
`;

const FilledRow = styled(Row)`
    height: 100%;
`;

const LeftCol = styled(Col)`
    padding-top: 3rem;
    padding-left: 3rem;
    border-right: 1px solid #e7e7e7;
`;

const MenuImg = styled.img`
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 100%;
    min-width: 10rem;
    max-width: 12rem;
`;

const MiddleCol = styled(Col)`
    border-right: 1px solid #e7e7e7;
    padding-left: 4rem;
`;

const MiddleRow = styled(Row)`
    padding-top: 2.5rem;
`;

const Item = styled(Link)`
    color: black;
    margin-right: 2rem;
    text-decoration: none;
    font-family: Montserrat;
    font-size: 1.3rem;
    color: #333333;
    cursor: pointer;
    font-weight: ${({active}) => active ? '800' : 'none'};
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    &:last-child {
        margin-right: 0;
    }
    
    ${ExtraLargeBreakPoint`
        font-size: 1.6rem;
    `}
`;

const RightCol = styled(Col)`
    padding-right: 0;  
    padding-left: 5rem;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    font-size: 1.8rem;
    font-weight: 300;
`;

const SearchImg = styled.img`
    position: absolute;
    left: 0;
    margin-left: 1rem;
    margin-top: 2.5rem;
    opacity: .3;
`;

function DesktopNavigationBar(props) {
    const {setSideBarOpen} = props;

    return (
        <Root>
            <FilledRow>
                <LeftCol xl={2} lg={2}>
                    <Row className={"text-center"}>
                        <Col col={3} className={"px-0"}>
                            <MenuImg src={Hambuger} onClick={() => setSideBarOpen(true)}/>
                        </Col>
                        <Col col={7} className={"px-0"}>
                            <Link to={"/"}><LogoImg src={Logo}/></Link>
                        </Col>
                    </Row>
                </LeftCol>
                <MiddleCol xl={8} lg={7}>
                    <MiddleRow>
                        <Col xl={9} lg={9}>
                            <Item to={"/product/"}>NEW</Item>
                            <Item to={"/clothing"}>CLOTHING</Item>
                            <Item to={"/product/"}>BAG</Item>
                            <Item to={"/product/"}>ACC</Item>
                            <Item to={"/product/"}>DESIGNERS</Item>
                            <Item to={"/magazine/"}>MAGAZINE</Item>
                        </Col>
                        <Col xl={3} lg={3} className={"text-right"}>
                            <Item to={"/how"}>이용안내</Item>
                            <Item to={"/login"}>LOGIN</Item>
                        </Col>
                    </MiddleRow>
                </MiddleCol>
                <RightCol xl={2} lg={2} className={""}>
                    <SearchInput placeholder={"Search"}/>
                    <SearchImg src={SearchIcon}/>
                </RightCol>
            </FilledRow>
        </Root>
    );
}

export default DesktopNavigationBar;
