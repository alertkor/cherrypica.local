import React from 'react';
import styled from 'styled-components';
import {media} from 'styled-bootstrap-grid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
const naver = require('../../../../assets/files/icon/register-naver-icon.svg');
const kakao = require('../../../../assets/files/icon/register-kakao-icon.svg');
const facebook = require('../../../../assets/files/icon/register-facebook-icon.svg');

const desktopBreakpoint = media.md;

const Header = styled.div`
    display: block;
    height: 5rem;
    padding-top: 1.6rem;
    font-family: Montserrat;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 6rem;
    
    ${desktopBreakpoint`
        display: none;
    `}
`;

const CloseButton = styled.span`
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    left: 2rem;
    top: 1.2rem;
`;

const InfoTextContainer = styled.div`
    ${desktopBreakpoint`
        display: none;
    `}
`;

const WelcomeHeader = styled.div`
    width: 100%;
    font-family: Montserrat;
    font-size: 3.4rem;
    font-weight: 600;
    color: #111111;
    text-align: center;
    margin-bottom: 1.2rem;
`;

const WelcomeBody = styled.div`
    width: 100%;
    font-family: NotoSansCJKkr;
    font-size: 1.3rem;
    text-align: center;
    color: #555555;
    margin-bottom: 5rem;
`;

const ButtonContainer = styled.div`
    ${desktopBreakpoint`
        display: none;
    `}
`;

const LocalRegisterButton = styled.button`
    font-size: 1.4rem;
    height: 4.4rem;
    text-align: center;
    font-family: NotoSansCJKkr;
    width: 100%;
    background: #111111;
    color: white;
    font-weight: 500;
    margin-bottom: 2rem;
    cursor: pointer;
`;

const RegisterButton = styled.button`
    height: 4.4rem;
    width: 100%;
    border: solid 1px #777777;
    background-color: #ffffff;
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    color: #555555;
    margin-bottom: 1.2rem;
    cursor: pointer;
`;

const Icon = styled.img`
    position: absolute;
    float: left;
    left: 3rem;
`;



function MobileRegisterInfoText(props) {
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

function MobileRegisterHeader(props) {
    const {history} = props;
    return (
        <React.Fragment>
            <Header>
                <CloseButton onClick={() => {history.goBack()}}>
                    <FontAwesomeIcon icon={Icons.faArrowLeft}/>
                </CloseButton>
                JOIN US
            </Header>
        </React.Fragment>
    )
}

function MobileButtons(props) {
    const {goNextStep} = props;

    return (
        <React.Fragment>
            <ButtonContainer>
                <LocalRegisterButton onClick={() => goNextStep()}>체리피카 회원가입</LocalRegisterButton>
                <RegisterButton onClick={() => goNextStep()}><Icon alt="naver-ico" src={naver}/>네이버 회원가입</RegisterButton>
                <RegisterButton onClick={() => goNextStep()}><Icon alt="kakao-ico" src={kakao}/>카카오톡 회원가입</RegisterButton>
                <RegisterButton onClick={() => goNextStep()}><Icon alt="facebook-ico" src={facebook}/>페이스북 회원가입</RegisterButton>
            </ButtonContainer>
        </React.Fragment>
    )
}

export {MobileRegisterHeader, MobileRegisterInfoText, MobileButtons};