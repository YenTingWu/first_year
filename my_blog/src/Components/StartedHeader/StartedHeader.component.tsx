import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NavLeft from '../NavLeft/NavLeft.component';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { handleCurrentUser } from '../../redux/user/user.actions';

import './StartedHeader.style.scss';


const StartedHeader: React.FC<any> = ({ currentUser, signOutCurrentUser, location }) => (
    <div className='started_header'>
        <NavLeft />
        <div className='started_header_nav_right'>
            <Link 
                className='started_header_signin_btn' 
                to={`${!currentUser ? '/signin' : `${location.pathname}`}`} 
                onClick={() => currentUser ? signOutCurrentUser(null): () => false}
                >
                {currentUser ? 'Sign Out' : 'Sign In'}
            </Link>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector<any, any>({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutCurrentUser: userInfo => dispatch(handleCurrentUser(userInfo))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartedHeader));