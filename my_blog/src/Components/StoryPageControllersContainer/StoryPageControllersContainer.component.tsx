import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoriesBasedArticles } from '../../redux/articlesInfo/articlesInfo.selectors';

import StoryChaptersController from '../../Components/StoryChaptersController/StoryChaptersController.component';
import StoryCategoryController from '../../Components/StoryCategoryController/StoryCategoryController.component';
import StoryImageController from '../../Components/StoryImageController/StoryImageController.component';

import './StoryPageControllersConatiner.style.scss';


const StoryPageControllersContainer: React.FC<any> = ({ 
    chapters, 
    setChapters, 
    contents, 
    setContents,
    setCurrentContent,
    currentChapter,
    setCurrentChapter, 
    articleState, 
    categoriesBasedArticles
}) => {
    
    const handleArticleInfo = (property: string) => (articleStateValue: string): void => {
        if(articleState.current){
            articleState.current = 
                {
                    ...articleState.current, 
                    [property]: articleStateValue
                }
        }
    }
    
    return (
        <div className='story_page_controller_sections' contentEditable={false}>
            <StoryChaptersController 
                articleState={articleState}
                chapters={chapters}
                setChapters={setChapters}
                setCurrentContent={setCurrentContent}
                currentChapter={currentChapter}
                setCurrentChapter={setCurrentChapter}
                contents={contents}
                setContents={setContents}
                />
            <StoryCategoryController 
                categoriesBasedArticles={categoriesBasedArticles}
                handleArticleCategory={handleArticleInfo('category')}
                />
            <StoryImageController handleArticleImage={handleArticleInfo('image')}/>
        </div>
        )
    }

const mapStateToProps = createStructuredSelector<any, any>({
    categoriesBasedArticles: selectCategoriesBasedArticles,
});

export default connect(mapStateToProps)(StoryPageControllersContainer);