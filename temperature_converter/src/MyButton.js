import React from 'react';
import "tachyons"

const MyButton = ( props ) => {
    return (
        <div>
            <button className="mt4 pa3 b--green grow" onClick={props.onClick}>{props.name}</button>
        </div>
    )
};


export default MyButton;


