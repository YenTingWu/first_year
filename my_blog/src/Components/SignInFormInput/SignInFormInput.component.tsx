import * as React from 'react';

import './SignInFormInput.style.scss';

const SignInFormInput = ({ typeName, onChange, length }) => (
    <div className='signin_page_container_form_input_container'>
        
        <input 
            className='signin_page_container_form_input' 
            type={typeName} 
            autoComplete={`${typeName === 'password' ? `current-${typeName}` : ''}`}
            onChange={onChange}
            />
        <label 
            htmlFor={`${typeName}`} 
            className={`signin_page_container_form_input_label 
            ${length ? 'shrink' : ''}`}
            >
            {`${typeName.charAt(0).toUpperCase()}${typeName.slice(1)}`}
        </label>
    </div>
);

export default SignInFormInput;