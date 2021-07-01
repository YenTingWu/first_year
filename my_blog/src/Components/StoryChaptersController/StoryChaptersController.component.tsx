import * as React from 'react';

import StoryInputContainer from '../StoryInputContainer/StoryInputContainer.component';
import StoryAddItemContainer from '../StoryAddItemContainer/StoryAddItemContainer.component';

import './StoryChaptersController.style.scss';

const StoryChaptersController: React.FC<any> = ({ chapters, articleState, contents, setContents, setChapters, setCurrentContent, currentChapter, setCurrentChapter }) => {

    const resetStoryTextAreaContent = (): void => {
        if(articleState.current) {
            const contentTextArea = document.querySelector('.story_textarea_content_container');
                    
            if(contentTextArea) {
                setCurrentContent('');
            }
        }
    }

    const addChapterToChatpers = (newChapter: string): void => {

        if(!chapters.some(chap => chap === newChapter)) {
            const content = document.querySelector('.story_textarea_content_container');

            if(content) {
                if(chapters.length) {
                    const targetIndex = chapters.indexOf(currentChapter);
                    const newArray = [ ...contents ];
                    if(content.innerHTML === '') newArray[targetIndex] = '';
                    newArray[targetIndex] = content.innerHTML;
                    newArray[targetIndex + 1] = '';
                    setContents(newArray);
                }
                resetStoryTextAreaContent();
            }
            setChapters([...chapters, newChapter]);
        } 
    };

    const handleAddChapterToChapters = (): void => {
        const input: HTMLInputElement | null = 
            document.querySelector('.story_page_chapter_input');
        if(input && input.value.trim() !== '') {
            addChapterToChatpers(String(input.value)); 
            setCurrentChapter(input.value);
            input.value = '';
        }   
    };

    const haddleChaptersSelectorChange = e => {
        if(e.target) setCurrentChapter(e.target['value']);
    }

    return (
        chapters.length ? 
            <StoryInputContainer className='story_input_container'>
                <select 
                    className='story_page_chapter_selector'
                    value={currentChapter}
                    onChange={(e) => haddleChaptersSelectorChange(e)}
                    >
                    {chapters.map((chapter, index) => 
                        <option className='story_page_chapter_options' value={chapter} key={index}>{chapter}</option>)}
                </select> 
                <StoryAddItemContainer 
                    placeholder={`Chapters of Adventure`}
                    onClick={() => handleAddChapterToChapters()}
                    name='chapter'
                    />
            </StoryInputContainer>
            : 
            <StoryInputContainer className='story_input_container'>
                <StoryAddItemContainer 
                    placeholder={`Chapters of Adventure`} 
                    onClick={() => handleAddChapterToChapters()}
                    name='chapter'
                    />
            </StoryInputContainer>
        )
    }

export default StoryChaptersController;