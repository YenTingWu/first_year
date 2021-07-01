import * as React from 'react';

import './BlogItemLargeContainer.style.scss'

const BlogItemLargeContainer = ({ content }): JSX.Element => (
    <div className='blog_item_large_container'>
        <div className='blog_item_large_inner_container'>
            <img className='blog_item_large_image' src="/images/bg.jpg"  alt="large_item_image"/>
            <div className='blog_item_large_content_container'>
                <h2 className='blog_item_large_container_title'>My title</h2>
                <p>{content}</p>
            </div>
        </div>
    </div>
);

export default BlogItemLargeContainer
