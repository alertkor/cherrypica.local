import React from 'react';
import NavigationBar from '../../component/NavigationBar/';
import RegisterSelectForm from './component/RegisterSelectForm/';
import RegisterForm from './component/RegisterForm/';
import Footer from '../../component/Footer/';

export default class Register extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nextStep: false,
            mobileAuth: false,
            userid: '',
            userpw: '',
            verifyuserpw: '',
            phoneNumber: '',
            agreeAll: false,
            agreeAdvertise: false,
            agreePolicy: false,
            agreeTerms: false,
        };

        this.goNextStep = this.goNextStep.bind(this);
    }

    goNextStep() {
        this.setState({nextStep: true});
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                {
                    this.state.nextStep === false
                    ? <RegisterSelectForm goNextStep={this.goNextStep}/>
                    : <RegisterForm/>
                }
                <Footer/>
            </React.Fragment>
        )
    }
};