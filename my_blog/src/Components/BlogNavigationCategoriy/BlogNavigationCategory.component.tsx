import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './BlogNavigationCategory.style.scss';


const BlogNavigationCategory = ({ match, name }): JSX.Element => (
    <Link 
        className='blog_navigation_categories' to={`${match.url}/${name.toLowerCase()}`}
        >{name.replace('_', ' ')}
    </Link>
);


export default withRouter(BlogNavigationCategory);