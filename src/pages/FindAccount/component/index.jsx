import React, {useState} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, media} from 'styled-bootstrap-grid';
import FindUseridForm from './FindUseridForm/';
import FindUserpwForm from './FindUserpwForm/';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const desktopBreakpoint = media.md;

const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: unset;
    z-index: 1;
    
    ${desktopBreakpoint`
        padding: 16rem 0 16rem 0;
        position: relative;
    `}
`;

const TabContainer = styled(Row)`
    margin-bottom: 3.7rem;
`;

const Tab = styled(Col)`
    display: inline-block;
    font-family: AppleSDGothicNeo;
    font-size: 1.4rem;
    background: #f1f1f1;
    width: 50%;
    height: 4.4rem;
    text-align: center;
    padding-top: 1.4rem;
    border-top: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    
    ${({active}) => active && 'background-color: white; border: 1px solid black; border-bottom: none; font-weight: bold;'}
`;

const MobileHeader = styled.div`
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

function FindAccountForm(props) {
    const {history} = props;
    const [isSelectFindid, setSelectFindid] = useState(true);

    return (
        <React.Fragment>
            <Root>
                <MobileHeader>
                    <CloseButton onClick={() => {history.goBack()}}>
                        <FontAwesomeIcon icon={Icons.faArrowLeft}/>
                    </CloseButton>
                    FIND ID/PW
                </MobileHeader>
                <Container className={"mb-5"}>
                    <TabContainer className={"justify-content-center text-center"}>
                        <Col xl={6}>
                            <Row className={"justify-content-center text-center"}>
                                <Tab xl={5} lg={3} md={4} sm={5} xs={5} active={isSelectFindid} onClick={() => setSelectFindid(true)}>아이디</Tab>
                                <Tab xl={5} lg={3} md={4} sm={5} xs={5}active={!isSelectFindid} onClick={() => setSelectFindid(false)}>비밀번호</Tab>
                            </Row>
                        </Col>
                    </TabContainer>
                    <Row className={"justify-content-center"}>
                        {
                            isSelectFindid === true
                                ? <FindUseridForm xl={5} lg={6} md={8} sm={10} xs={10}/>
                                : <FindUserpwForm xl={5} lg={6} md={8} sm={10} xs={10}/>
                        }
                    </Row>
                </Container>
            </Root>
        </React.Fragment>
    )
}

export default withRouter(FindAccountForm);