import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import {MobileRegisterHeader, MobileRegisterInfoText, MobileButtons} from './MobileRegisterSelectForm';
import {DesktopRegisterHeader, DesktopRegisterInfoText, DesktopButtons} from './DesktopRegisterSelectForm';

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
        padding: 9rem 0 9rem 0;
    `}
`;

const DesktopBodyContainer = styled.div`
    display: none;
    border-top: .2rem solid black;
    border-bottom: .2rem solid black;
    padding-top: 7rem;
    padding-bottom: 7rem;
    
    ${desktopBreakpoint`
        display: block;
    `}
`;

function RegisterSelectForm(props) {
    const {history, goNextStep} = props;
    return (
        <Root>
            <MobileRegisterHeader history={history}/>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xl={9} md={11} sm={10} xs={12}>
                        <DesktopRegisterHeader/>
                        <DesktopBodyContainer>
                            <DesktopRegisterInfoText/>
                            <DesktopButtons goNextStep={goNextStep}/>
                        </DesktopBodyContainer>
                        <MobileRegisterInfoText/>
                        <MobileButtons goNextStep={goNextStep}/>
                    </Col>
                </Row>
            </Container>
        </Root>
    )
}

export default withRouter(RegisterSelectForm);