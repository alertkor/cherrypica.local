import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from "styled-bootstrap-grid";
import Checkbox from '../../../component/Checkbox/';

const Root = styled(Container)`
`;

const JoinHeader = styled.div`
    width: 100px;
    height: 18px;
    font-family: Montserrat;
    font-size: 2.4rem;
    font-weight: 500;
    color: #111111;
    margin-bottom: 2.9rem;
`;

const HorizontalBreak = styled.hr`
    border-bottom: .1rem solid black;
    margin-bottom: 2.9rem;
    width: 100%;
`;

const Section = styled.div`
    margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
    margin-bottom: 3rem;
`;

const SectionBody = styled.div`
`;

const SectionNumber = styled.div`
    display: inline-block;
    font-family: Montserrat;
    font-size: 2.2rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #111111;
    padding-right: 1rem;
    line-height: .82rem;
`;

const SectionName = styled.span`
    font-family: Noto Sans KR;
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #222222;
    line-height: .8rem;
`;

const DefaultButton = styled.button`
    width: 20rem;
    height: 4.4rem;
    border: solid 1px #111111;
    background-color: white;
    cursor: pointer;
`;

const Label = styled(Col)`
    display: flex;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #444444;
    align-items: center;
`;

const InputRow = styled(Row)`
    width: 100%;
    height: 4rem;
    margin-bottom: 1.2rem;
`;

const Input = styled.input`
    height: 100%;
    width: 100%;
    border: solid 1px #e7e7e7;
    background-color: white;
    display: inline-block;
    padding-left: 1.2rem;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
`;

const CheckBoxRow = styled.div`
    margin-bottom: 1.4rem;
`;

const CheckBoxName = styled.div`
    display: inline-block;
    margin-left: .6rem;
    font-size: 1.2rem;
`;

const AgreeInfoText = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #444444;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const RegisterButton = styled.button`
    width: 20rem;
    height: 4.4rem;
    color: white;
    margin: auto;
    display: block;
    font-family: Noto Sans KR;
    font-size: 1.2rem;
    background-color: black;
    cursor: pointer;
`;


function RegisterForm(props) {
    return (
        <Root>
            <Row className={"justify-content-center"}>
                <Col xl={6} md={7} sm={9} xs={12}>
                    <form onSubmit={(e) => props.SubmitHandler(e)}>
                        <JoinHeader>JOIN US</JoinHeader>
                        <HorizontalBreak/>
                        <Section>
                            <SectionHeader>
                                <SectionNumber>01</SectionNumber>
                                <SectionName>본인 인증</SectionName>
                            </SectionHeader>
                            <SectionBody>
                                <DefaultButton>모바일 인증</DefaultButton>
                            </SectionBody>
                        </Section>
                        <HorizontalBreak/>
                        <Section>
                            <SectionHeader>
                                <SectionNumber>02</SectionNumber>
                                <SectionName className={"mb-4"}>가입정보 입력(필수)</SectionName>
                            </SectionHeader>
                            <SectionBody>
                                <InputRow>
                                    <Label xl={3} md={3} sm={3} xs={4}>아이디</Label>
                                    <Col xl={7} md={7} sm={7} xs={7}>
                                        <Input name={"userid"} onChange={(e) => props.InputHandler(e)} placeholder={"아이디 입력"}/>
                                    </Col>
                                </InputRow>
                                <InputRow>
                                    <Label xl={3} md={3} sm={3} xs={4}>비밀번호</Label>
                                    <Col xl={7} md={7} sm={7} xs={7}>
                                        <Input type="password" name={"userpw"}  onChange={(e) => props.InputHandler(e)}
                                               placeholder={"영문, 숫자, 특수문자 중 2가지 이상 조합하여 8자 이상 입력"}/></Col>
                                </InputRow>
                                <InputRow>
                                    <Label xl={3} md={3} sm={3} xs={4}>비밀번호 확인</Label>
                                    <Col xl={7} md={7} sm={7} xs={7}>
                                        <Input type="password" name={"verifyuserpw"}  onChange={(e) => props.InputHandler(e)} />
                                    </Col>
                                </InputRow>
                                <InputRow>
                                    <Label xl={3} md={3} sm={3} xs={4}>이름</Label>
                                    <Col xl={7} md={7} sm={7} xs={7}>
                                        <Input name={"name"} onChange={(e) => props.InputHandler(e)} />
                                    </Col>
                                </InputRow>
                                <InputRow>
                                    <Label xl={3} md={3} sm={3} xs={4}>휴대폰 번호</Label>
                                    <Col xl={7} md={7} sm={7} xs={7}>
                                        <Input type={"number"} name={"phoneNumber"}  onChange={(e) => props.InputHandler(e)}  placeholder={"-없이 입력"} />
                                    </Col>
                                </InputRow>
                            </SectionBody>
                        </Section>
                        <HorizontalBreak/>
                        <Section>
                            <SectionHeader>
                                <SectionNumber>03</SectionNumber>
                                <SectionName>약관 동의</SectionName>
                            </SectionHeader>
                            <SectionBody>
                                <CheckBoxRow>
                                    <Checkbox checked={props.state.agreeAll} name={"agreeAll"} type="checkbox" CheckboxHandler={props.CheckboxHandler}/>
                                    <CheckBoxName>전체 동의하기</CheckBoxName>
                                </CheckBoxRow>
                                <CheckBoxRow>
                                    <Checkbox checked={props.state.agreeTerms} name={"agreeTerms"} type="checkbox" CheckboxHandler={props.CheckboxHandler}/>
                                    <CheckBoxName>(필수) 체리피카 서비스 이용약관 동의</CheckBoxName>
                                </CheckBoxRow>
                                <CheckBoxRow>
                                    <Checkbox checked={props.state.agreePolicy} name={"agreePolicy"} type="checkbox" CheckboxHandler={props.CheckboxHandler}/>
                                    <CheckBoxName>(필수) 개인정보 수집 및 이용동의</CheckBoxName>
                                </CheckBoxRow>
                                <CheckBoxRow>
                                    <Checkbox checked={props.state.agreeAdvertise} name={"agreeAdvertise"} type="checkbox" CheckboxHandler={props.CheckboxHandler}/>
                                    <CheckBoxName>(선택) 광고성 정보 수신 동의</CheckBoxName>
                                </CheckBoxRow>
                            </SectionBody>
                        </Section>
                        <HorizontalBreak/>
                        <Section>
                            <AgreeInfoText>
                                <Bold>체리피카 서비스 이용약관</Bold>을 확인하였고 동의합니다.<br/>
                                고객님께서는 <Bold>개인정보 수집 및 이용동의</Bold>를 거부하실 수있으며, 동의거부시 회원가입이 제한됩니다.
                            </AgreeInfoText>
                        </Section>
                        <RegisterButton type={"submit"}>가입하기</RegisterButton>
                    </form>
                </Col>
            </Row>
        </Root>
    )
}

export default RegisterForm;