import * as React from 'react';

import './BlogItemSmallContainer.style.scss';

const BlogItemSmallContainer = ({ content }: { content: string }): JSX.Element => {

    return (
    <div className='blog_item_small_container'>
        <div className='blog_item_small_inner_container'>
            <img className='blog_item_small_image' src="/images/bg.jpg"  alt="small_item_image"/>
            <div className='blog_item_small_content_container'>
                <h2 className='blog_item_small_container_title'>My title</h2>
                <p>{content}</p>
            </div>
        </div>
    </div>
    )
};

export default BlogItemSmallContainer;