import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ShopBagIcon = require('../../assets/files/icon/ico-d-shopbag.svg');
const ProfileIcon = require('../../assets/files/icon/ico-profile.svg');
const LikeIcon = require('../../assets/files/icon/ico-product-like.svg');
const ScrollToTopIcon = require('../../assets/files/icon/ico-scroll-top.svg');

const Root = styled.div`
    z-index: 1;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 2rem;
`;

const IconWrapper = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 1.6rem;
    height: 1.6rem;
`;

const TopImg = styled.img`
    padding-top: .9rem;
    padding-left: 1.4rem;
    padding-bottom: .8rem;
    padding-right: 1.3rem;
`;

const MainMenu = styled.div`
    width: 4.8rem;
    height: 14.9rem;
    border-radius: 24px;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 1.2rem;
`;

const SubMenu = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 24px;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    cursor: pointer;
    margin-bottom: 4rem;
`;

const Item = styled(Link)`
    color: transparent;
    text-decoration: none;
`;

function ScrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

// const getSize = () => {
//     const gridSize = document.getElementsByClassName("my-masonry-grid")[0].offsetHeight; // grid size
//     const footerSize = document.getElementsByClassName("desktop-footer")[0].offsetHeight; // footer size
//     return gridSize - footerSize * 4;
// };

export default function DesktopQuickMenu() {
    return (
        <React.Fragment>
            <Root>
                <MainMenu>
                    <IconWrapper>
                        <Item to={"/cart"}>
                            <Icon src={ShopBagIcon}/>
                        </Item>
                    </IconWrapper>
                    <IconWrapper>
                        <Item to={"/login"}>
                            <Icon src={ProfileIcon}/>
                        </Item>
                    </IconWrapper>
                    <IconWrapper>
                        <Item to={"/login"}>
                            <Icon src={LikeIcon}/>
                        </Item>
                    </IconWrapper>
                </MainMenu>
                <SubMenu onClick={() => (ScrollToTop())}>
                    <TopImg src={ScrollToTopIcon}/>
                </SubMenu>
            </Root>
        </React.Fragment>
    )
};