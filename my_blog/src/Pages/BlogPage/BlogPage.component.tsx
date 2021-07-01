import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';

import BlogCategoryPage from '../BlogCategoryPage/BlogCategoryPage.component';
import BlogContentPage from '../BlogContentPage/BlogContentPage.component';
import BlogNavigation from '../../Components/BlogNavigation/BlogNavigation.component';
import BlogPreview from '../../Components/BlogPreview/BlogPreview.component';

import './BlogPage.style.scss';

const BlogPage = ({ match }): JSX.Element =>  (
    <div className='blogpage'>
        <BlogNavigation />
        <Route path={`${match.url}`} exact component={BlogPreview}/>
        <Route path={`${match.url}/:category`} exact component={BlogCategoryPage} />
        <Route path={`${match.url}/:category/:articleTitle&:id`} component={BlogContentPage} />
    </div>
)

export default withRouter(BlogPage);