import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'styled-bootstrap-grid';
import {media} from 'styled-bootstrap-grid';
import {withRouter} from 'react-router-dom';
import {DesktopLoginHeader, DesktopButtons, DesktopSocialLogin, DesktopBanner} from './DesktopForm';
import {MobileLoginHeader, MobileLogo, MobileButtons, MobileSocialLogin} from './MobileForm';

const desktopBreakpoint = media.md;

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
        padding: 16rem 0 16rem 0;
    `}
`;

const Input = styled.input`
    height: 4rem;
    width: 100%;
    font-size: 1.4rem;
    border: 1px solid #e7e7e7;
    padding-left: 1.6rem;
    font-family: Noto Sans KR;
    display: block;
    margin-bottom: 1.2rem;
`;


function Index(props) {
    const {history} = props;

    return (
        <Root>
            <div>
            <MobileLoginHeader history={history}/>
            <Container className={""}>
                <MobileLogo/>
                <Row className={"justify-content-center"}>
                    <Col xl={4} md={5} sm={8} xs={10}>
                        <form>
                            <DesktopLoginHeader/>
                            <Input placeholder="아이디" name="userid" className="userid"/>
                            <Input type="password" name="userpw" className="userpw" placeholder="비밀번호"/>
                            <DesktopButtons history={history}/>
                            <DesktopSocialLogin/>
                            <MobileButtons history={history}/>
                            <MobileSocialLogin/>
                        </form>
                    </Col>
                    <DesktopBanner xl={4} md={5} sm={5} xs={10}/>
                </Row>
            </Container>
            </div>
        </Root>
    )
}

export default withRouter(Index);