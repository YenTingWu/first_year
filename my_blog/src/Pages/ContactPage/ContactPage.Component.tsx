import * as React from 'react';

import './ContactPage.style.scss';

const ContactPage = () => (
    <div className='contact_page'>
        <div className='contact_page_contact_options'> 
            <a className='contact_page_contact_options_btn' href="mailto: a9600125a@gmail.com" target='_blank' rel="noopener noreferrer">
                <img src="/images/gmail.png" alt="gmail" width="100" height="100"/>
            </a>
            <a className='contact_page_contact_options_btn' href='https://github.com/YenTingWu' target='_blank' rel="noopener noreferrer">
                <img  src="/images/github.png" alt="github" width="100" height="100"/>
            </a>
        </div>
    </div>
);

export default ContactPage;