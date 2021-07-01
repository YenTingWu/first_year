import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { selectSpecificCategoriesArticle } from '../../redux/articlesInfo/articlesInfo.selectors';
import { IRootState } from '../../redux/root-reducer';

import BlogSideBar from '../../Components/BlogSideBar/BlogSideBar.component';

import './BlogContentPage.style.scss';

const BlogContentPage: React.FC<any> = ({ categoriesBasedArticles }) => {

    const targetArticle = categoriesBasedArticles[0];
    const { writer, title, description, publishedAt, content } = targetArticle;
    const articleWholeContents = Object.values(content);
    const [chapterNumber, setChapterNumber] = useState<number>(0);
    const [chapterContent, setChapterContent] = useState<any>(articleWholeContents[chapterNumber]);

    const handleChaperNumber = (number) => {
        setChapterNumber(number);
        setChapterContent(articleWholeContents[number])
    }

    useEffect(() => {
        if(targetArticle) {
            window.scrollTo({
                top: window.innerHeight - 500,
                left: 0
            })
        }
    }, [chapterNumber, targetArticle]);

    return(
    <>
        <div className='occupation' >
            <div className='blog_content_page_main_section_info'>
                <h1 className='blog_content_page_main_section_title'>
                    {title}
                </h1>
                <h3 className='blog_content_page_main_section_description'>
                    {description}
                </h3>
                <small>
                    Published at {publishedAt.replace(new RegExp('\\-','g'), ' ')} By {writer}
                </small>
            </div>
        </div>
        <div className='blog_content_page_main_section'>
            <BlogSideBar content={content} handleChaperNumber={handleChaperNumber}/>
            <div 
                id='content_showcase' 
                dangerouslySetInnerHTML={{__html: chapterContent}}
                >
            </div>
        </div>
    </>
)};

const mapStateToProps = (state: IRootState, ownprops) => ({
    categoriesBasedArticles: selectSpecificCategoriesArticle(ownprops.match.params.category, Number(ownprops.match.params.id))(state)
});

export default connect(mapStateToProps)(BlogContentPage);