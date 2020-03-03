import React from "react";
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';
import {Col, Row} from 'styled-bootstrap-grid';

const naver = require("../../../assets/files/icon/login-naver-icon.svg");
const kakao = require("../../../assets/files/icon/login-kakao-icon.svg");
const facebook = require("../../../assets/files/icon/login-facebook-icon.svg");

const desktopBreakpoint = media.md;

const DesktopLoginHeaderText = styled.div`
    display: none;
    font-family: Montserrat;
    font-size: 2.4rem;
    color: #111111;
    margin-bottom: 3rem;
    
    ${desktopBreakpoint`
        display: block;        
    `}    
`;

const DesktopSocialLoginHeader = styled.div`
    font-family: Montserrat;
    font-size: 2.4rem;
    margin-bottom: 3rem;
`;

const DesktopNaverLogin = styled.div`
    color: white;
    height: 4.4rem;
    font-size: 1.2rem;
    font-family: NotoSansCJKkr;
    background-color: #0dcd51;
    vertical-align: middle;
    line-height: 4.4rem;
    cursor: pointer;
`;

const DesktopKakaoLogin = styled.div`
    color: #391f1f;
    height: 4.4rem;
    font-size: 1.2rem;
    font-family: NotoSansCJKkr;
    background-color: #ffe500;
    vertical-align: middle;
    line-height: 4.4rem;
    cursor: pointer;
`;

const DesktopFacebookLogin = styled.div`
    color: white;
    height: 4.4rem;
    font-size: 1.2rem;
    font-family: NotoSansCJKkr;
    background-color: #4164bb;
    vertical-align: middle;
    line-height: 4.4rem;
    cursor: pointer;
`;

const DesktopIconWrapper = styled.div`
    position: relative;
    display: inline-block;
    top: .3rem;
    right: 0.6rem;
`;

const DesktopSocialLoginRoot = styled.div`
    margin-top: 4.2rem;
    display: none;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const RegisterButton = styled.button`
    height: 4.4rem;
    width: 100%;
    color: white;
    border: none;
    font-family: NotoSansCJKkr;
    background-color: black;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Button = styled.button`
    height: 4.4rem;
    width: 100%;
    border: solid 1px #111111;
    background-color: #ffffff;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    cursor: pointer;
    margin-bottom: 1.2rem;
`;

const DesktopButtonRoot = styled(Row)`
    display: none;
    
    ${desktopBreakpoint`
        display: flex;
    `}
`;

const DesktopBannerContainer = styled(Col)`
    display: none;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const Banner = styled.div`
    background-color: gray;
    height: 100%;
    padding-top: 19rem;
    text-align: center;
`;

function DesktopLoginHeader(props) {
    return (
        <DesktopLoginHeaderText>
            LOGIN
        </DesktopLoginHeaderText>
    )
}

function DesktopButtons(props) {
    const {history} = props;

    return (
        <DesktopButtonRoot>
            <Col xl={12} md={12} sm={12} xs={12}>
                <Button onClick={() => console.log('log-in')}>로그인</Button>
            </Col>
            <Col xl={6} md={6} sm={6} xs={6} className="pr-1">
                <Button onClick={() => history.push('find-account')}>아이디 찾기</Button>
            </Col>
            <Col xl={6} md={6} sm={6} xs={6} className="pl-1">
                <Button onClick={() => history.push('find-account')}>비밀번호 찾기</Button>
            </Col>
            <Col xl={12} md={12} sm={12} xs={12}>
                <RegisterButton onClick={() => history.push('register')}>회원가입</RegisterButton>
            </Col>
        </DesktopButtonRoot>
    )
}

function DesktopSocialLogin(props) {
    return (
        <DesktopSocialLoginRoot>
            <DesktopSocialLoginHeader>SNS LOGIN</DesktopSocialLoginHeader>
            <Row className={"text-center"}>
                <Col xl={4} md={4} sm={4} xs={4} className={"pr-0"}>
                    <DesktopNaverLogin>
                        <DesktopIconWrapper>
                            <img alt={"naver-ico"} src={naver}/>
                        </DesktopIconWrapper>
                        네이버
                    </DesktopNaverLogin>
                </Col>
                <Col xl={4} md={4} sm={4} xs={4} className={"px-3"}>
                    <DesktopKakaoLogin>
                        <DesktopIconWrapper>
                            <img alt={"kakao-ico"} src={kakao}/>
                        </DesktopIconWrapper>
                        카카오톡
                    </DesktopKakaoLogin>
                </Col>
                <Col xl={4} md={4} sm={4} xs={4} className={"pl-0"}>
                    <DesktopFacebookLogin>
                        <DesktopIconWrapper>
                            <img alt={"facebook-ico"} src={facebook}/>
                        </DesktopIconWrapper>
                        페이스북
                    </DesktopFacebookLogin>
                </Col>
            </Row>
        </DesktopSocialLoginRoot>
    )
}

function DesktopBanner(props) {
    return (
        <DesktopBannerContainer {...props}>
            <Banner>Banner</Banner>
        </DesktopBannerContainer>
    )
}

export {DesktopLoginHeader, DesktopButtons, DesktopSocialLogin, DesktopBanner};