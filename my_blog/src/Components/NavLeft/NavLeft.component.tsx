import * as React from 'react';

import CustomLogo from '../CustomLogo/CustomLogo.component';
import OptionLink from '../OptionLink/OptionLink.component';
import ResponsiveDropDown from '../ResponsiveDropDown/ResponsiveDropDown.component';

import './NavLeft.style.scss'

const NavLeft: React.FC = () => (
    <div className='nav_left'>
                <ResponsiveDropDown />

        <CustomLogo />
        <div className='options'>
            <OptionLink to='/'>HOME</OptionLink>
            <OptionLink to='/blog'>Blog</OptionLink>
            <OptionLink to='/contact'>Contact</OptionLink>
        </div>
    </div>
);

export default NavLeft;