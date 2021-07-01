import React, { useEffect, useRef } from 'react';

const StoryContentArea = ({ chapters, currentContent }) => {

    const container = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(container.current) {
            const children = container.current.childNodes;
            while(children[1]) {
                console.log(container.current)
                container.current.removeChild(children[1]);
            }
            (children[0] as HTMLElement).innerText = '';
        }
    }, [chapters]);

    return (
        <div 
            className='story_textarea_content'
            contentEditable={chapters.length ?  true : false}
            suppressContentEditableWarning={chapters.length ?  true : false}
            >
            {
            currentContent ? 
                <div 
                    className='story_textarea_content' 
                    data-storytextarea='story_textarea_content_container' 
                    dangerouslySetInnerHTML={{ __html: currentContent }}
                    >
                </div>
                :
                <div 
                    data-storytextarea='story_textarea_content_container'
                    ref={container} 
                    className='story_textarea_content_container'>
                    <p className='story_textarea_p' data-ph='Tell My Adventure...'>
                    </p> 
                </div>
            }
        </div>
    )
}

export default StoryContentArea;

// (children[0] as HTMLElement).innerText = ''; 
// USE HTMLElement to convert node to html Element!!!!