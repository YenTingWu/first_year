import * as React from 'react';

import StoryInputContainer from '../../Components/StoryInputContainer/StoryInputContainer.component';
import StoryAddItemContainer from '../../Components/StoryAddItemContainer/StoryAddItemContainer.component';

const StoryImageController = ({ handleArticleImage }) => {

    const handleArticleImageUrlChange = () => {
        const inputList: NodeListOf<HTMLElement> | null = 
            document.getElementsByName('image'); 

        const imageUrlInput = inputList['0'];
        if(imageUrlInput) {
            handleArticleImage(imageUrlInput.value);
            imageUrlInput.value = '';
        } 
    }

    return (
        <StoryInputContainer className='story_input_container'>
            <StoryAddItemContainer 
                placeholder={`Enter an Image Url`}
                onClick={() => handleArticleImageUrlChange()}
                name='image'
                />
        </StoryInputContainer>
        )
    }

export default StoryImageController;