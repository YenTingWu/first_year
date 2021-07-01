import * as React from 'react';

import './StorySaveButton.stlye.scss';

const StorySaveButton: React.FC<any> = ({ handleSaveBtn }) => (
    <div className='story_save_btn_container'>
        <button 
            className='story_save_btn' 
            onClick={() => handleSaveBtn()}
            >
            SAVE
        </button>
    </div>
);

export default StorySaveButton;