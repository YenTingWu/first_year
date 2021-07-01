import * as React from 'react';

import './StoryInputContainer.style.scss';

const StoryInputContainer: React.StatelessComponent<any> = ({ children, ...props }) => (
    <div {...props} >
        {children}
    </div>
);

export default StoryInputContainer;