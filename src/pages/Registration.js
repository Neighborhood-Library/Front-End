import React from 'react';
import RegisterForm from '../components/registration/RegisterForm.js';

const Registration = () => {
    return(
        <section className="login">
            <p className='login-title'>Sign Up</p>
            <RegisterForm />
            <hr />
            <div className="alt-login">
                <p>Or Sign In Using</p>
                <div className="icons">
                    <a href={`${process.env.REACT_APP_REQ_URL}/auth/google`}> 
                    <i className="fab fa-google"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Registration;