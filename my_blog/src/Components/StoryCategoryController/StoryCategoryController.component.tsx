import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import StoryInputContainer from '../StoryInputContainer/StoryInputContainer.component';

import './StoryCategoryController.style.scss';

const StoryCategoryController: React.FC<any> = 
    ({ 
        categoriesBasedArticles, 
        handleArticleCategory,
        match
    }) =>  {
    
    const [selectValue, setSelectValue] = useState<string>(
        match.params.category ? 
        `${match.params.category.replace(new RegExp('\\_','g'), ' ').toUpperCase()}` 
        : `${Object.keys(categoriesBasedArticles)[0]}`
        );
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement> ): void => {
        setSelectValue((e.target as HTMLSelectElement).value);
        handleArticleCategory(
            (e.target as HTMLSelectElement).value.toLowerCase().replace(/ /g, '_')
        )
    }

    return (
        <StoryInputContainer className='category story_input_container'>
            <select 
                value={selectValue}
                className='story_page_category_selector' 
                onChange={e => handleSelectChange(e)}
                >
                {
                    Object.keys(categoriesBasedArticles).map((category, index) => 
                        <option key={index}>
                            {category.replace(new RegExp('\\_','g'), ' ').toUpperCase()}
                        </option>
                    )
                }
            </select>
        </StoryInputContainer>
)}


export default withRouter(StoryCategoryController);