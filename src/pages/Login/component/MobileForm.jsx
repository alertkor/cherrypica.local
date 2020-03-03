import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'styled-bootstrap-grid';
import {media} from "styled-bootstrap-grid";

const Logo = require("../../../assets/files/logo.svg");
const naver = require("../../../assets/files/icon/login-naver-icon.svg");
const kakao = require("../../../assets/files/icon/login-kakao-icon.svg");
const facebook = require("../../../assets/files/icon/login-facebook-icon.svg");


const desktopBreakpoint = media.md;

const MobileHeader = styled.div`
    height: 5rem;
    padding-top: 1.6rem;
    font-family: Montserrat;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    display: block;
    margin-bottom: 6rem;
    
    ${desktopBreakpoint`
        display: none;        
    `}
`;

const CloseButton = styled.span`
    font-size: 2rem;
    float: right;
    right: 2rem;
    position: relative;
    cursor: pointer;
`;

const MobileLogoRoot = styled.div`
    text-align: center;
    margin-bottom: 4.4rem;
    display: block;
    ${desktopBreakpoint`
        display: none;
    `}
`;

const MobileButtonContainer = styled(Row)`
    margin-top: 3.4rem;
    margin-bottom: 5rem;
    ${desktopBreakpoint`
        display: none;
    `}
`;

const MobileSocialLoginRoot = styled.div`
    border-top: 1px solid #f5f5f5;
    padding-top: 4.8rem;
    margin-bottom: 3rem;
    display: block;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const MobileSocialLoginHeader = styled.div`
    font-family: Montserrat;
    font-size: 16px;
    color: #111111;
    margin-bottom: 1.7rem;
    font-weight: 500;
    text-align: center;
`;

const SocialLoginWrapper = styled.div`
    text-align: center;
`;

const MobileNaverLogin = styled.div`
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;
    background: #0dcd51;
    margin-right: 1.4rem;
`;

const MobileKakaoLogin = styled.div`
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;
    background: #ffe500;
    margin-right: 1.4rem;
`;

const MobileFacebookLogin = styled.div`
    display: inline-block;
    width: 4.4rem;
    height: 4.4rem;
    background: #4164bb;
`;

const MobileIconWrapper = styled.div`
    margin-top: 1.1rem;
`;

const RegisterButton = styled.div`
    height: 4.4rem;
    text-align: center;
    cursor: pointer;
    padding-top: 1.2rem;
    border: 1px solid #e7e7e7;
    background: white;
    font-family: NotoSansCJKkr;
`;

const LoginButton = styled.div`
    height: 4.4rem;
    text-align: center;
    cursor: pointer;
    padding-top: 1.2rem;
    border: 1px solid #e7e7e7;
    background: black;
    color: white;
    font-family: NotoSansCJKkr;
`;

const MobileFindUserContainer = styled.div`
    display: block;
    font-family: NotoSansCJKkr;
    font-size: 1.3rem;
    text-align: right;  
    margin-top: 2rem;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const Text = styled.span`
    color: #444444; 
    cursor: pointer;
`;

function MobileLoginHeader(props) {
    const {history} = props;

    return (
        <MobileHeader>
            LOGIN
            <CloseButton onClick={() => history.goBack()}>✕</CloseButton>
        </MobileHeader>
    )
}

function MobileLogo(props) {
    return (
        <MobileLogoRoot>
            <img alt="logo" src={Logo}/>
        </MobileLogoRoot>
    )
}

function MobileButtons(props) {
    const {history} = props;

    return (
        <React.Fragment>
            <MobileFindUserContainer>
                <Text onClick={() => {
                    history.push('find-account')
                }}>아이디 찾기</Text>
                |
                <Text onClick={() => {
                    history.push('find-account')
                }}>비밀번호 찾기</Text>
            </MobileFindUserContainer>
            <MobileButtonContainer>
                <Col xl={6} md={6} sm={6} xs={6}>
                    <RegisterButton onClick={() => {
                        history.push('register')
                    }}>회원가입</RegisterButton>
                </Col>
                <Col xl={6} md={6} sm={6} xs={6}>
                    <LoginButton onClick={() => {
                        console.log('log-in')
                    }}>로그인</LoginButton>
                </Col>
            </MobileButtonContainer>
        </React.Fragment>
    )
}

function MobileSocialLogin(props) {
    return (
        <React.Fragment>
            <MobileSocialLoginRoot>
                <MobileSocialLoginHeader>SNS LOGIN</MobileSocialLoginHeader>
                <SocialLoginWrapper>
                    <MobileNaverLogin>
                        <MobileIconWrapper>
                            <img alt="naver-ico" src={naver}/>
                        </MobileIconWrapper>
                    </MobileNaverLogin>
                    <MobileKakaoLogin>
                        <MobileIconWrapper>
                            <img alt="kakao-ico" src={kakao}/>
                        </MobileIconWrapper>
                    </MobileKakaoLogin>
                    <MobileFacebookLogin>
                        <MobileIconWrapper>
                            <img alt="facebook-ico" src={facebook}/>
                        </MobileIconWrapper>
                    </MobileFacebookLogin>
                </SocialLoginWrapper>
            </MobileSocialLoginRoot>
        </React.Fragment>
    )
}

export {MobileLoginHeader, MobileLogo, MobileButtons, MobileSocialLogin};
