import React from 'react';
import {connect} from "react-redux";
import {fetchLogin} from "../../redux/action/auth";
import NavigationBar from '../../component/NavigationBar/'
import Footer from '../../component/Footer/';
import LoginForm from './component';


class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.InputHandler = this.InputHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);

        this.state = {
            userid: "",
            userpw: "",
        };

        console.log("[현재 리덕스 스토어 상태]");
        console.log("[userid] = " + this.props.userid);
        console.log("[userpw] = " + this.props.token);
        console.log("==================");
    }

    InputHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    SubmitHandler(e) {
        e.preventDefault();
        //로그인 콘솔 확인
        // console.log(
        //     "[Submit] Email address is " +
        //     this.state.userid +
        //     " Password is " +
        //     this.state.userpw
        // );

        //Action
        // console.log("[Action]");
        // return fetchLogin(this.state.userid, this.state.userpw)
        //     .then(console.log("Login Success"));
        this.props.fetchLogin(this.state.userid, this.state.userpw)
            .then((res) => {
                console.log(res.payload.data);
                localStorage.setItem('t', res.payload.data.token);
            });


        //쿠기에 저장
        console.log("쿠키에 저장은 react-cookie 사용해서 저장... ");
    };


    render(props) {
        return (
            <React.Fragment>
                <NavigationBar/>
                <LoginForm props={props}/>
                {/*<LoginForm*/}
                {/*    InputHandler={this.InputHandler}*/}
                {/*    SubmitHandler={this.SubmitHandler}*/}
                {/*/>*/}
                <Footer/>
            </React.Fragment>
        )
    }
}

export default connect(
    state => {
        return {
            userid: state.authentication.userid,
            token: state.authentication.token,
        };
    },
    {fetchLogin}
)(Login);