import React from 'react';
import "tachyons"

const MySecondButton = ( props ) => {
    return (
        <div>
            <button className="mt4 pa3 b--green grow" onClick={props.onlick}>SecondButton!!!!!!</button>
        </div>
    )
};


export default MySecondButton;