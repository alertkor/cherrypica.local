import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import {MobileLoginHeader} from './MobileRegisterForm';
import {DesktopRegisterHeader} from './DesktopRegisterForm';
import Checkbox from "../../../../component/Checkbox";


const desktopBreakpoint = media.lg;

const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 1;
    
    ${desktopBreakpoint`
        position: relative;
        padding: 9rem 0 9rem 0;
    `}
`;

const BodyContainer = styled.div`
    border-top: .1rem solid black; 
    border-bottom: .1rem solid black;
    padding-bottom: 2.7rem; 
`;

const Section = styled.div`
    margin-top: 3rem;
    padding-bottom: 3rem;
    border-bottom: .1rem solid black;
    
    &.section-03 {
        border-bottom: none;
        padding-bottom: unset;
    }
`;

const SectionHeader = styled.div`
    margin-bottom: 1.7rem;
`;

const SectionNumber = styled.div`
    display: inline-block;
    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: bold;
    color: #111111;
    padding-right: 1rem;
`;

const SectionTitle = styled.div`
    display: inline-block;
    font-family: NotoSansCJKkr;
    font-size: 1.9rem;
    font-weight: 500;
    color: #222222;
`;

const SectionBody = styled.div`
`;

const ConfirmText = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #777777;
`;

const ConfirmContainer = styled.div`
    text-align: center;
    
    ${desktopBreakpoint`
        text-align: left;        
    `}
`;

const ConfirmButton = styled.button`
    height: 4.4rem;
    width: 20rem;
    border: solid 1px #111111;
    background-color: #ffffff;
    cursor: pointer;
`;

const Label = styled(Col)`
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 500;
    color: #444444;
    margin-bottom: 1rem;
        
    ${media.sm`
        padding-top: 1.5rem;        
    `}
`;

const InputContainer = styled(Col)`
`;

const Input = styled.input`
    width: 100%;
    height: 4.4rem;
    border: .1rem solid #e7e7e7;
    background-color: #ffffff;
    padding-left: 1.2rem;
    font-size: 1.2rem;
`;

const SectionRow = styled(Row)`
    margin-bottom: 2rem;
    
    &.last-input {
        margin-bottom: unset;
    }
    
    ${desktopBreakpoint`
        margin-bottom: 1.2rem;        
    `}
`;

const AgreeText = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    color: #444444;
    margin-bottom: 2.9rem;
`;

const CheckBoxRow = styled.div`
    margin-bottom: 1.4rem;
`;

const CheckBoxName = styled.div`
    font-family: NotoSansCJKkr;
    display: inline-block;
    margin-left: .6rem;
    font-size: 1.2rem;
`;

const RegisterButton = styled.button`
    height: 4.4rem;
    width: 20rem;
    margin-top: 3rem;
    color: white;
    background-color: #111111;
    cursor: pointer;
`;

function ConfirmForm(props) {
    return (
        <React.Fragment>
            <ConfirmText>
                회원정보 관리 및 본인확인을 위한 모바일 인증이 필요합니다.<br/>
                만 14세 미만의 아동은 가입을 제한하고 있습니다
            </ConfirmText>
            <ConfirmContainer>
                <ConfirmButton>본인인증</ConfirmButton>
            </ConfirmContainer>
        </React.Fragment>
    )
}

function RegisterInputForm(props) {
    return (
        <React.Fragment>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>아이디</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input placeholder={"아이디 입력"}/>
                </InputContainer>
            </SectionRow>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>비밀번호</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input type={"password"}
                           placeholder={"영문, 숫자, 특수문자 중 2가지 이상 조합하여 8자 이상 입력"}/>
                </InputContainer>
            </SectionRow>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>비밀번호 확인</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input type={"password"} placeholder={""}/>
                </InputContainer>
            </SectionRow>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>이메일</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input placeholder={"이메일 입력"}/>
                </InputContainer>
            </SectionRow>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>이름</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input placeholder={"이체리"}/>
                </InputContainer>
            </SectionRow>
            <SectionRow>
                <Label xl={3} md={3} sm={3} xs={12}>휴대폰 번호</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input placeholder={"12345678"}/>
                </InputContainer>
            </SectionRow>
            <SectionRow className={"last-input"}>
                <Label xl={3} md={3} sm={3} xs={12}>생년 월일</Label>
                <InputContainer xl={6} md={7} sm={9} xs={12}>
                    <Input placeholder={"951223"}/>
                </InputContainer>
            </SectionRow>
        </React.Fragment>
    )
}

function CheckboxForm(props) {
    return (
        <React.Fragment>
            <AgreeText>
                체리피카 가입 시 <b>이용약관 및 개인정보 수집에 대한 동의</b>가 필요합니다.<br/>
                필수 항목에 모두 동의하셔야 가입이 가능합니다.
            </AgreeText>
            <CheckBoxRow>
                <Checkbox type="checkbox"/>
                <CheckBoxName>전체 동의하기</CheckBoxName>
            </CheckBoxRow>
            <CheckBoxRow>
                <Checkbox type="checkbox"/>
                <CheckBoxName>(필수) 체리피카 서비스 이용약관 동의</CheckBoxName>
            </CheckBoxRow>
            <CheckBoxRow>
                <Checkbox type="checkbox"/>
                <CheckBoxName>(필수) 개인정보 수집 및 이용동의</CheckBoxName>
            </CheckBoxRow>
            <CheckBoxRow>
                <Checkbox type="checkbox"/>
                <CheckBoxName>(선택) 광고성 정보 수신 동의</CheckBoxName>
            </CheckBoxRow>
        </React.Fragment>
    )
}

function RegisterForm(props) {
    const {history} = props;

    return (
        <Root>
            <MobileLoginHeader history={history}/>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xl={8} md={10} sm={11} xs={11}>
                        <DesktopRegisterHeader/>
                        <BodyContainer>
                            <Section className={"section-01"}>
                                <SectionHeader>
                                    <SectionNumber>01</SectionNumber>
                                    <SectionTitle>본인 인증</SectionTitle>
                                </SectionHeader>
                                <SectionBody>
                                    <ConfirmForm/>
                                </SectionBody>
                            </Section>

                            <Section className={"section-02"}>
                                <SectionHeader>
                                    <SectionNumber>02</SectionNumber>
                                    <SectionTitle>가입정보 입력(필수)</SectionTitle>
                                </SectionHeader>
                                <SectionBody>
                                    <RegisterInputForm/>
                                </SectionBody>
                            </Section>

                            <Section className={"section-03"}>
                                <SectionHeader>
                                    <SectionNumber>03</SectionNumber>
                                    <SectionTitle>약관 동의</SectionTitle>
                                </SectionHeader>
                                <SectionBody>
                                    <CheckboxForm/>
                                </SectionBody>
                            </Section>
                        </BodyContainer>
                        <Col className={"text-center"}>
                            <RegisterButton>가입하기</RegisterButton>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </Root>
    )
}

export default withRouter(RegisterForm);