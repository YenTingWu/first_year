import * as React from 'react';

import StoryPageControllersContainer from '../../Components/StoryPageControllersContainer/StoryPageControllersContainer.component';
import StoryPublishButton from '../../Components/StoryPublishButton/StoryPublishButton.component';

const NewStoryPage = ({ articleState, chapters, setChapters, currentChapter, buildArticleInfo }) => (
<section className='story_page'>
        <article className='story_page_article'>
            <StoryPublishButton articleState={articleState}/>
            <StoryPageControllersContainer 
                chapters={chapters} 
                setChapters={setChapters} 
                currentChapter={currentChapter} 
                articleState={articleState}
                />
            <div 
                onInput={() => buildArticleInfo(articleState, currentChapter)}
                className='story_textarea' 
                suppressContentEditableWarning={true} 
                contentEditable='true'
                >
                <h3 className='story_textarea_title' data-ph='Title'>
                </h3>
                <h4 className='story_textarea_description' data-ph='Advanture Description'>
                </h4>
                <div className='story_textarea_content'>
                    <p 
                        className='story_textarea_p' 
                        data-ph='Tell My Adventure...'
                        >
                    </p>
                </div>
            </div>
        </article>
    </section>
)

export default NewStoryPage;