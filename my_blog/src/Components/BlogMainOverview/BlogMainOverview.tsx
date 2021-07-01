import React from 'react';

import BlogRightMainOverview from '../BlogRightMainOverview/BlogRightMainOverview.component';
import BlogItemLargeContainer from '../BlogItemLargeContainer/BlogItemLargeContainer.component';


import './BlogMainOverview.style.scss';

const BlogMainOverview = (): JSX.Element => (
    <div className='blog_main_overview'>
        <div className='blog_main_overview_container'>
            <BlogItemLargeContainer content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. .....'/>
            <BlogRightMainOverview />
        </div>
    </div>
);

export default BlogMainOverview