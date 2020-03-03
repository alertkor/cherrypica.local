import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from "styled-bootstrap-grid";
import SVG from 'react-inlinesvg';
import naver from '../../../assets/files/icon/register-naver-icon.svg';
import kakao from '../../../assets/files/icon/register-kakao-icon.svg';
import facebook from '../../../assets/files/icon/register-facebook-icon.svg';


const Root = styled(Container)`
    padding: 11rem 0 11rem;
`;

const JoinHeader = styled.div`
    width: 100px;
    height: 18px;
    font-family: Montserrat;
    font-size: 2.4rem;
    font-weight: 500;
    color: #111111;
    margin-bottom: 3rem;
`;

const HorizontalBreak = styled.hr`
    border-bottom: .2rem solid black;
    margin-bottom: 7rem;
    width: 100%;
`;

const WelcomeHeader = styled.div`
    width: 100%;
    text-align: center;
    height: 4rem;
    font-family: Montserrat;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: -.1rem;
    color: #111111;
    margin-bottom: 1.4rem;
`;

const WelcomeBody = styled.div`
    width: 100%;
    font-family: Noto Sans KR;
    font-size: 1.2rem;
    letter-spacing: -.02rem;
    text-align: center;
    color: #555555;
    margin-bottom: 9rem;
`;

const RegisterHeader = styled.div`
  width: 100%;
  text-align: center;
  height: 1.8rem;
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin-bottom: 3rem;
  color: #111111;
`;

const RegisterBodyPoint = styled.div`
    width: 100%;
    height: 1.8rem;
    font-family: Noto Sans KR;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: center;
    color: #222222;
    margin-bottom: .8rem;
`;

const RegisterBody = styled.div`
    width: 100%;
    height: 28px;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: center;
    color: #555555;
    margin-bottom: 5.8rem;
`;

const RegisterButton = styled.button`
    width: 20rem;
    height: 4.4rem;
    color: white;
    background-color: black;
    cursor: pointer;
`;

const RegisterSocialButton = styled.button`
    width: 20rem;
    height: 4.4rem;
    font-size: 1.2rem;
    color: #555555;
    border: 1px solid #777777;
    background-color: white;
    margin-bottom: 1.2rem;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    position: absolute;
    padding-left: 2.5rem;
`;

function RegisterSelectForm(props) {
    return (
        <Root>
            <Row className={"justify-content-center text-center"}>
                <Col xl={6} md={7} sm={9} xs={12}>
                    <JoinHeader>JOIN US</JoinHeader>
                    <HorizontalBreak/>
                    <WelcomeHeader>WELCOME</WelcomeHeader>
                    <WelcomeBody>
                        CherryPica에 오신 것을 환영합니다.<br/>
                        회원가입하신 후 CherryPica의 다양한 서비스를 이용해보세요.
                    </WelcomeBody>
                    <Row>
                        <Col xl={6} md={6} sm={6} xs={6}>
                            <RegisterHeader>체리피카 회원가입</RegisterHeader>
                            <RegisterBodyPoint>신규회원 3000포인트 적립</RegisterBodyPoint>
                            <RegisterBody>
                                체리피카 회원가입 완료 후 서비스 이용시<br/>
                                포인트를 사용을 하실 수 있습니다
                            </RegisterBody>
                            <RegisterButton onClick={() => props.RegisterHandler()}>회원가입</RegisterButton>
                        </Col>
                        <Col xl={6} md={6} sm={6} xs={6}>
                            <RegisterHeader>간편 회원가입</RegisterHeader>
                            <RegisterSocialButton>
                                <IconWrapper>
                                    <SVG src={naver}/>
                                </IconWrapper>
                                네이버 회원가입
                            </RegisterSocialButton>
                            <RegisterSocialButton>
                                <IconWrapper>
                                    <SVG src={kakao}/>
                                </IconWrapper>
                                카카오톡 회원가입
                            </RegisterSocialButton>
                            <RegisterSocialButton>
                                <IconWrapper>
                                    <SVG src={facebook}/>
                                </IconWrapper>
                                페이스북 회원가입
                            </RegisterSocialButton>
                        </Col>
                    </Row>
                    <HorizontalBreak/>
                </Col>
            </Row>
        </Root>
    )
}

export default RegisterSelectForm;