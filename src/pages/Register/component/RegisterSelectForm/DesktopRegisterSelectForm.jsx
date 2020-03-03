import React from 'react';
import styled from "styled-components";
import {Row, Col, media} from "styled-bootstrap-grid";
const naver = require('../../../../assets/files/icon/register-naver-icon.svg');
const kakao = require('../../../../assets/files/icon/register-kakao-icon.svg');
const facebook = require('../../../../assets/files/icon/register-facebook-icon.svg');

const desktopBreakpoint = media.md;

const Header = styled.div`
    display: none;
    width: 100%;
    font-family: Montserrat;
    font-size: 2.4rem;
    font-weight: 500;
    padding-bottom: 3rem;
    color: #111111;

    ${desktopBreakpoint`
        display: flex;
    `}
`;

const InfoTextContainer = styled.div`
    display: none;
    margin-bottom: 9rem;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

const WelcomeHeader = styled.div`
    width: 100%;
    font-family: Montserrat;
    font-size: 4rem;
    font-weight: 600;
    color: #111111;
    text-align: center;
    margin-bottom: 1.2rem;
    letter-spacing: -1px;
`;

const WelcomeBody = styled.div`
    width: 100%;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    text-align: center;
    color: #555555;
    margin-bottom: 5rem;
`;

const LocalRegisterButton = styled.button`
    position: relative;
    font-size: 1.2rem;
    width: 20rem;
    height: 4.4rem;
    text-align: center;
    font-family: NotoSansCJKkr;
    background: #111111;
    color: white;
    font-weight: 500;
    margin-bottom: 2rem;
    cursor: pointer;
`;

const RegisterButton = styled.button`
    position: relative;
    height: 4.4rem;
    width: 20rem;
    border: solid 1px #777777;
    background-color: #ffffff;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    color: #555555;
    margin-bottom: 1.2rem;
    cursor: pointer;
`;

const Icon = styled.img`
    position: absolute;
    float: left;
    left: 2rem;
`;

const BoldText = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 2rem;
    font-weight: 500;
    color: #111111;
    text-align: center;
    margin-bottom: 3rem;
`;

const DesktopButotnRow = styled(Row)`
    text-align: center;
    display: none;
    
    ${desktopBreakpoint`
        display: flex;
    `}
`;

function DesktopRegisterHeader(props) {
    return (
        <Header>
            JOIN US
        </Header>
    )
}

function DesktopRegisterInfoText(props) {
    return (
        <React.Fragment>
            <InfoTextContainer>
                <WelcomeHeader>WELCOME</WelcomeHeader>
                <WelcomeBody>CherryPica에 오신 것을 환영합니다.<br/>
                    회원가입하신 후 CherryPica의 다양한 서비스를 이용해보세요.</WelcomeBody>
            </InfoTextContainer>
        </React.Fragment>
    )
}

function DesktopButtons(props) {
    const {goNextStep} = props;

    return (
        <React.Fragment>
            <DesktopButotnRow className={"justify-content-center"}>
                <Col xl={5} md={5} sm={5} xs={5}>
                    <BoldText>체리피카</BoldText>
                    <LocalRegisterButton onClick={() => goNextStep()}>회원가입</LocalRegisterButton>
                </Col>
                <Col  xl={1} md={1} sm={1} xs={1}/>
                <Col  xl={5} md={5} sm={5} xs={5}>
                    <BoldText>간편 회원가입</BoldText>
                    <RegisterButton onClick={() => goNextStep()}><Icon alt="naver-ico" src={naver}/>네이버 회원가입</RegisterButton>
                    <RegisterButton onClick={() => goNextStep()}><Icon alt="kakao-ico" src={kakao}/>카카오톡 회원가입</RegisterButton>
                    <RegisterButton onClick={() => goNextStep()}><Icon alt="facebook-ico" src={facebook}/>페이스북 회원가입</RegisterButton>
                </Col>
            </DesktopButotnRow>
        </React.Fragment>
    )
}

export {DesktopRegisterHeader, DesktopRegisterInfoText, DesktopButtons};