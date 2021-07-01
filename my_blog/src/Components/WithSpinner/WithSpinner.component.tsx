import * as React from 'react';

const WithSpinner = 
    ( WrappedComponent: React.FC ): React.FC<any> => 
    ({isLoading, ...otherProps}) => {
    return isLoading ? 
        (
            <div>
                123
            </div>
        ) 
        :
        (
            <WrappedComponent {...otherProps}/>
        )
}

export default WithSpinner;