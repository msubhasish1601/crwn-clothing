import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password:'',
            confirmPassword: ''
        }

    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { signUpStart } = this.props;
        const {displayName, email,  password,  confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert ("Passwords don't match.");
            return;
        }

        signUpStart({displayName, email, password});
    }

    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]: value});
    }


    render(){
        const { displayName, email,  password,  confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        label="Display Name"
                        value={displayName} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="Email"
                        value={email} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={password} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        label="Confirm Password"
                        value={confirmPassword} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton 
                            type="submit" 
                        >Sign Up</CustomButton>
                        
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null,mapDispatchToProps)(SignUp);