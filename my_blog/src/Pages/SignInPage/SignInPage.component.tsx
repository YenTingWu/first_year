import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignInFormInput from '../../Components/SignInFormInput/SignInFormInput.component';

import { handleCurrentUser } from '../../redux/user/user.actions';
import { selectUserInfos } from '../../redux/user/user.selectors';

import './SignInPage.style.scss';

const SignInPage: React.FC<any> = ({ userInfos, handleCurrentUser }) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleInputChange = targetFunc => (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetEl: HTMLInputElement = e.target
        targetFunc(targetEl.value);
    }  
    const handleLogIn = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault();

        const isUserExisted = userInfos.find(userInfo => userInfo.email === email && userInfo.password === password );

        handleCurrentUser(isUserExisted)
    }

    return (
        <div className='signin_page'>
            <div className='signin_page_container'>
                <form className='sigin_page_container_form' onSubmit={e => handleLogIn(e)}>
                    <h2>Enter Your Info</h2>
                    <SignInFormInput 
                        typeName='email'
                        onChange={handleInputChange(setEmail)}
                        length={email.length}
                        />
                    <SignInFormInput 
                        typeName='password'
                        onChange={handleInputChange(setPassword)} 
                        length={password.length}
                        />
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        </div>
        )
    };

const mapStateToProps = createStructuredSelector({
    userInfos: selectUserInfos
});

const mapDispatchToProps = dispatch => ({
    handleCurrentUser: userInfo => dispatch(handleCurrentUser(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);