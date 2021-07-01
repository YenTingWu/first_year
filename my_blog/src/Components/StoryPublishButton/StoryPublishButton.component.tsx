import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { ArticleInfo } from '../../Pages/StoryPage/StoryPage.component';

import { addTimeBasedArticle, addCategoryBasedArticle } from '../../redux/articlesInfo/articlesInfo.actions';
import { selectCategoriesBasedArticles } from '../../redux/articlesInfo/articlesInfo.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { buildFormatDate } from '../../Pages/StoryPage/StoryPage.component';

import './StoryPublishButton.style.scss';

const StoryPublishButton: React.FC<any> = ({ 
    addCategoryBasedArticle, 
    addTimeBasedArticle, 
    articleState,
    categoriesBasedArticles,
    currentUser,
    history
}) => {

    const handleAddArticleToState = () => {
        const { title, description, content, category } = articleState.current;

        if(title && description && category && Object.keys(content).length && 
            Object.values(content).length) {

            addCategoryBasedArticle(articleState.current);
            addTimeBasedArticle(articleState.current);
            articleState.current = new ArticleInfo(
                0, 
                Object.keys(categoriesBasedArticles)[0], 
                '', 
                '', 
                buildFormatDate(), 
                '', 
                currentUser, 
                {}
            );

            const storyTextarea: HTMLInputElement | null = document.querySelector('.story_textarea');

            if(storyTextarea) {
                const textElements = storyTextarea.childNodes;
                for(let i = 0; i < textElements.length; i++) {
                    textElements.item(i)['innerHTML'] = ''
                }
            }
            history.push('/blog');
        }
    };

    return (
        <div className='story_published_btn_container'>
            <button 
                className='story_published_btn' 
                onClick={() => handleAddArticleToState()}>
                PUBLISH
            </button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector<any, any>({
    categoriesBasedArticles: selectCategoriesBasedArticles,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    addCategoryBasedArticle: articleInfo => dispatch(addCategoryBasedArticle(articleInfo)),
    addTimeBasedArticle: articleInfo => dispatch(addTimeBasedArticle(articleInfo))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryPublishButton));