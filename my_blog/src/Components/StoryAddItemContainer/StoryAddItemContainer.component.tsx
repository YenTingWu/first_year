import * as React from 'react';
import './StoryAddItemContainer.style.scss';

const StoryAddItemContainer = ({ onClick, placeholder, name }) => (
    <>
        <input 
            className='story_page_chapter_input' 
            type="text"
            placeholder={placeholder}
            name={name}
            />
        <button 
            className='story_page_chapter_addBtn' 
            type='button'
            onClick={onClick}
            >
            <span role='img' aria-label='add-btn'>🌑</span>
        </button>
    </>
)

export default StoryAddItemContainer;