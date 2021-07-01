import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import DeleteButtonContainer from '../DeleteButtonContainer/DeleteButtonContainer.component';

import './BlogCollectionItem.style.scss';

const BlogCollectionItem: React.FC<any> = ({ blogCategoryPage, article}) => {

    const { id, title, description, content, category } = article;
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState<boolean>(false);
    const [textboxContent, setTextboxContent] = useState<any>(Object.values(content)[0]);
    
    useEffect(() => {
        setTextboxContent(Object.values(content)[0])
    }, [category, content]); 

    return (
        <div className={`
            blog_collection_item 
            ${blogCategoryPage ? 'blogCategoryPage' : ''}
            ${isDeleteBtnClicked ? 'delete_btn_clicked' : ''}
            `}>
            <Link 
                className='blog_collection_item_link'
                to={`/blog/${category}/${title.replace(/\s+/g,'-')}&${id}`}>

                <div className='blog_collection_item_inner_container'>
                    <img className='blog_collection_item_image' src="/images/bg.jpg"  alt="blog_collection_item_image"/>
                    <div className='blog_collection_item_content_container'>
                    <h2 className='blog_collection_item_container_title'>{title}</h2>
                    <h4 className='blog_collection_item_container_description'>{description}</h4>
                    {
                        Object.values(content)[0] ?
                        <div 
                        className='blog_collection_item_content_showcase'
                        dangerouslySetInnerHTML={{__html: textboxContent}}
                        ></div> : null
                    } 
                    </div>
                    
                </div>
            </Link>
            <DeleteButtonContainer 
                        article={article} 
                        isDeleteBtnClicked={isDeleteBtnClicked}
                        setIsDeleteBtnClicked={setIsDeleteBtnClicked}
                        />
           
        </div> 
        )
    }


export default withRouter(BlogCollectionItem);