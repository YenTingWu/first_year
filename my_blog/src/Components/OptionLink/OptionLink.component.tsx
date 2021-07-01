import * as React from 'react';
import { Link } from 'react-router-dom';

import './OptionLink.style.scss';


const OptionLink = ({ children, ...props }: any): JSX.Element => (
    <div className='option_link'>
        <Link className='option' { ...props }>{children}</Link>
        <div className='underline'></div>
    </div>
);

export default OptionLink;