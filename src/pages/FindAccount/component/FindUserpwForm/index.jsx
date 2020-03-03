import React, {useState} from "react";
import styled from 'styled-components';
import {Col, Container, Row, media} from "styled-bootstrap-grid";
// import axios from "axios";

const desktopBreakpoint = media.md;

const HeaderText = styled.div`
    font-weight: bold;
    
    ${desktopBreakpoint`
        display: inline-block;
    `}
`;

const BodyText = styled.div`
    color: gray;
    font-size: 1.3rem;
    margin-bottom: 3rem;
    
    ${desktopBreakpoint`
        display: inline-block;
        margin-left: .8rem;
    `}
`;

const Input = styled.input`
    height: 4.4rem;
    border: 1px solid #e7e7e7;
    padding-left: 1.4rem;
    width: 100%;
    font-size: 1.4rem;
    display: block;
    margin-bottom: 1.5rem;
`;

const PhonenumberWrapper = styled(Row)`
    height: 4.4rem;
`;

const PhonenumberContainer = styled(Col)`
    border: 1px solid #e7e7e7;
    height: 100%;
`;

const Phonenumber = styled.div`
    padding-top: .9rem;
`;

const PhonenumberInput = styled.input`
    position: absolute;
    font-size: 1.4rem;
    padding-left: 1rem;
    top: 1.2rem;
    border: none;
`;

const SendButton = styled.button`
    font-size: 1rem;
    border: 1px solid #e7e7e7;
    height: 100%;
    width: 100%;
    text-align: center;
    background: white;
    cursor: pointer;
`;


const SendSMSHandler = async ({event, setSend, userid, phoneNumber}) => {
    event.preventDefault();
    setSend(true);
};

function FindUserpwForm(props) {
    const [isSend, setSend] = useState(false);
    const [userid, setUserid] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    return (
        <React.Fragment>
            <Col {...props} className={"px-0"}>
                <HeaderText>비밀번호 찾기</HeaderText>
                <BodyText>등록하신 아이디와 휴대폰 번호로 비밀번호 찾기가 가능합니다.</BodyText>
                <Input name={"userid"} placeholder={"아이디"} onChange={(e) => setUserid(e.target.value)}/>
                <Container>
                    <form onSubmit={(event) => SendSMSHandler({event, setSend, userid, phonenumber})}>
                        <PhonenumberWrapper className={"mb-4"}>
                            <PhonenumberContainer xl={8} md={8} sm={8} xs={8} className={"mb-4"}>
                                <Phonenumber>
                                    010
                                    <PhonenumberInput name="phoneNumber" placeholder={"-없이 입력"}
                                                      onChange={(e) => setPhonenumber(e.target.value)}/>
                                </Phonenumber>
                            </PhonenumberContainer>
                            <Col xl={4} md={4} sm={4} xs={4} className={"mb-4 pr-0"}>
                                <SendButton type="submit">인증번호전송</SendButton>
                            </Col>
                        </PhonenumberWrapper>
                    </form>
                    {
                        isSend === true
                            ? 'Sended'
                            : 'Not Sended'
                    }
                </Container>
            </Col>
        </React.Fragment>
    )
}

export default FindUserpwForm;