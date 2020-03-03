import React from 'react';
import styled from 'styled-components';
import {Container} from 'styled-bootstrap-grid';
import NavigationBar from '../../component/NavigationBar';
import axios from 'axios';
import {connect} from "react-redux";


const Root = styled(Container)`
`;

class Mypage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
        }
    }

    componentWillMount() {
        axios.get('http://0.0.0.0:8081/user/profile', {
            headers: { Authorization: `Bearer ${this.props.token}` }
        }).then((res) => {
            this.setState({auth: true});
        }).catch((error) => {
            window.location.href="/";
        });
    }

    render() {
        return(
            <Root>
                <NavigationBar/>
                {
                    this.state.auth === true
                    ? <p>Already logged-in</p>
                    : ''
                }
            </Root>
        )
    }
}

export default connect(
    state => {
        return {
            userid: state.authentication.userid,
            token: state.authentication.token,
        };
    }
)(Mypage);