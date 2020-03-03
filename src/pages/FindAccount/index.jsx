import React from 'react';
// import styled from 'styled-components';
// import {Container, Row, Col, media} from 'styled-bootstrap-grid';
import FindAccountForm from './component/';
import NavigationBar from '../../component/NavigationBar/';


class FindAccount extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isSelectedPw: true,
        };
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <FindAccountForm/>
            </React.Fragment>
        )
    }
}

export default FindAccount;