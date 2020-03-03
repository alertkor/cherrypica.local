import React, {useState} from "react";
import {Row, media} from "styled-bootstrap-grid";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Logo = require('../../assets/files/logo.svg');
const Hamburger = require('../../assets/files/icon/hambuger-ico.svg');
const SearchIcon = require('../../assets/files/icon/ico-search.svg');
const ShopbagIcon = require('../../assets/files/icon/ico-shopbag.svg');


const SmallBreakPoint = media.sm;
const MediumBreakPoint = media.md;

const Root = styled.div`
    top: 0;
    z-index: 2;
    width: 100%;
    transition: transform 0.15s ease-in-out;
    border-bottom: 1px solid #e7e7e7;
    background: white;
    
    ${SmallBreakPoint`
        max-width: 767px;
    `}

    ${MediumBreakPoint`
        max-width: 991px;
    `}
`;

const FilledRow = styled(Row)`
    height: 4.9rem;
    align-items: center;
`;

const MenuImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    cursor: pointer;
`;

const LogoImg = styled.img`
    width: 10.8rem;
    height: 1.8rem;
`;

const SearchImg = styled.img`
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    right: 0;
    margin-right: 5rem;
    cursor: pointer;
`;

const ShopbagImg = styled.img`
    width: 100%;
    height: 100%;
`;

const LogoContainer = styled.div`
    margin: auto;
`;

const Item = styled(Link)`
    position: absolute;
    right: 0;
    margin-right: 1rem;
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
`;

const SearchContainer = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    border: 1px solid #e7e7e7;
    height: 4rem;
    width: 100%;
    display: none;
    ${({active}) => active && 'display: block;'}
`;

const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    border: none;
`;

const LogoLink = styled(Link)`
`;


function MobileNavigationBar(props) {
    const {setSideBarOpen} = props;
    const [isOpen, setOpen] = useState(false);
    let lastScroll, currentScroll = 0;

    window.addEventListener('scroll', () => {
        let mobileNavigation = document.getElementsByClassName('mobile-navigation')[0];
        currentScroll = document.documentElement.scrollTop;
        if (mobileNavigation) {
            if (currentScroll >= 150 && currentScroll > lastScroll) {
                mobileNavigation.style.position = "fixed";
                mobileNavigation.style.transform = "translateY(-5rem)";
            } else if (currentScroll === lastScroll) {
            } else if (currentScroll === 0) {
                mobileNavigation.style.position = "relative";
            } else {
                mobileNavigation.style.transform = "translateY(0rem)";
            }
        }
        lastScroll = currentScroll;
    });


    return (
        <Root className={"mobile-navigation"}>
            <FilledRow>
                <LogoContainer>
                    <LogoLink to={"/"}>
                        <LogoImg src={Logo}/>
                    </LogoLink>
                </LogoContainer>
                <MenuImg src={Hamburger} onClick={() => setSideBarOpen(true)}/>
                <SearchImg src={SearchIcon} onClick={() => setOpen(!isOpen)}/>
                <Item to={"/cart"}><ShopbagImg src={ShopbagIcon}/></Item>
            </FilledRow>
            <SearchContainer active={isOpen}>
                <SearchInput placeholder={"Search..."}/>
            </SearchContainer>
        </Root>
    );
}

export default MobileNavigationBar;
