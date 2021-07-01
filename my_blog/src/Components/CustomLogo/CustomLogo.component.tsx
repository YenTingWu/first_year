import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
 
import OptionLink from '../OptionLink/OptionLink.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './CustomLogo.style.scss';


const CustomLogo: React.FC<any> = ({ currentUser, history }) => {

    const style = currentUser ? { cursor: 'pointer' } : { cursor: 'default' };

    return (
        <div 
            className='CustomLogo' 
            style={style}
            >
            <img className='logo_img' alt='profile_img' src='/images/my_profile.jpg'/>
            {/* <h1 className='logo_my_name'>YenTing Wu</h1> */}
                { //currentUser ?
                    <OptionLink    
                        to='/story'
                        >
                        New Story
                    </OptionLink> 
                   // :
                   // null
                }
        </div>
        )
    };

const mapStateToProps = createStructuredSelector<any, any>({
    currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(CustomLogo));