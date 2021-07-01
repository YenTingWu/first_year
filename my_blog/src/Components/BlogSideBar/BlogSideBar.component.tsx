import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './BlogSideBar.style.scss';

const BlogSideBar = ({ content, handleChaperNumber, match }) => (
    <div className='blog_content_page_main_section_sidebar'>
        <div className='blog_content_page_main_section_sidebar_container'>
            <ul className='blog_content_page_main_section_sidebar_options'>
                {
                    Object.keys(content).map((chapterTitle, index) => 
                        <li 
                            key={index} 
                            onClick={() => handleChaperNumber(index)}
                            >
                                {index + 1} {chapterTitle}
                        </li>)
                }
            </ul>
            <Link to={`/story/${match.params.category}&${match.params.id}`}>
                <img src="/images/article_edit.png" alt="edit" width='52' height='52'/>
            </Link>
        </div>
        <img 
            id='hand-icon'
            className='hand-icon' 
            src="/images/hand.png" 
            alt="hand-icon" 
            width='40' 
            height='40'
            />
    </div>
)

export default withRouter(BlogSideBar);