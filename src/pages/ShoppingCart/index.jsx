import React from 'react';
import {Container, Row} from 'styled-bootstrap-grid';
import NavigationBar from '../../component/NavigationBar/'

export default class ShoppingCart extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Container>
                    <Row className={"justify-content-center"}>
                        <p>
                            장바구니.
                        </p>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}