import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: none;
    padding: 0;
    margin: 0;
    
    ${({active}) => {
    if (active) {
        setAnimationToSideBar(true);
        return 'display: block;';
    }
}}
`;

const OverridingBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #000;
    cursor: pointer;
    transition: opacity 400ms ease-out;
    
    &.active {
        opacity: .8;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100%;
    padding-top: 4rem;
    padding-left: 5rem;
    background: #000;
    transform: translate3d(-30rem,0,0);
    transition: transform 400ms ease-out;
    
    &.active {
        transform: translate3d(0, 0, 0);
    }
`;

const TopMenuContainer = styled.div`
    margin-bottom: 5rem;
`;

const TopMenu = styled.span`
    font-family: Montserrat;
    font-size: 1.4rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #f5f5f5;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Separator = styled.span`
    font-size: 1rem;
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    color: white;
    
    &:before {
        content: "|";
    }
`;

const CategoryContainer = styled.div`
`;

const MainCategory = styled.div`
    font-family: Montserrat;
    font-size: 2.4rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    color: #cccccc;
    margin-bottom: 2rem;
    cursor: pointer;
    
    &:last-child {
        margin-bottom: 6rem;
    }
    
    &:hover {
        text-decoration: underline;
    }
`;

const OtherContainer = styled.div`

`;

const OtherCategory = styled.div`
    opacity: 0.9;
    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.61px;
    color: #cccccc;
    margin-bottom: 2rem;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Item = styled(Link)`
    color: #cccccc;
    text-decoration: none;
`;

const setAnimationToSideBar = (active, setSideBarOpen) => {
    let MenuContainerElement = document.getElementsByClassName("desktop-sidebar-menu")[0];
    let OverridingBackgroundElement = document.getElementsByClassName("desktop-sidebar-background")[0];
    if (active) {
        setTimeout(() => {
            MenuContainerElement.classList.add('active');
            OverridingBackgroundElement.classList.add('active');
        }, 0);
    } else {

        OverridingBackgroundElement.classList.remove('active');
        MenuContainerElement.classList.remove('active');
        setTimeout(() => setSideBarOpen(false), 400);
    }
};

export default function DesktopSideBar(props) {
    const {isSideBarOpen, setSideBarOpen} = props;

    return (
        <Root active={isSideBarOpen}>
            <OverridingBackground className="desktop-sidebar-background"
                                  onClick={() => setAnimationToSideBar(false, setSideBarOpen)}/>
            <MenuContainer className="desktop-sidebar-menu">
                <TopMenuContainer>
                    <Link to={"/"}>
                        <TopMenu>HOME</TopMenu>
                    </Link>
                    <Separator/>
                    <Link to={"/login"}>
                        <TopMenu>MY PAGE</TopMenu>
                    </Link>
                    <Separator/>
                    <Link to={"/"}>
                        <TopMenu>LIKE</TopMenu>
                    </Link>
                </TopMenuContainer>
                <CategoryContainer>
                    <MainCategory>
                        <Item to={"/product/"}>
                            NEW
                        </Item>
                    </MainCategory>
                    <MainCategory>
                        <Item to={"/clothing"}>
                            CLOTHING
                        </Item>
                    </MainCategory>
                    <MainCategory>
                        <Item to={"/product/"}>
                            BAG
                        </Item>
                    </MainCategory>
                    <MainCategory>
                        <Item to={"/product/"}>
                            ACC
                        </Item>
                    </MainCategory>
                    <MainCategory>
                        <Item to={"/magazine"}>
                            MAGAZINE
                        </Item>
                    </MainCategory>
                </CategoryContainer>
                <OtherContainer>
                    <OtherCategory>이용안내</OtherCategory>
                    <OtherCategory>EVENT</OtherCategory>
                    <OtherCategory>NOTICE</OtherCategory>
                </OtherContainer>
            </MenuContainer>
        </Root>
    )
};