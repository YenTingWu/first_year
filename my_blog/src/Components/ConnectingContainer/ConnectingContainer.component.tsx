import * as React from 'react';

import FocusingItemContainer from '../FocusingItemContainer/FocusingItemContainer.component';
import ConnectingLine from '../ConnectingLine/ConnectingLine.component';

import { IFocusingItem } from '../../redux/focusingItems/focusingItems.types';

const ConnectingContainer = ({ id, ...props}: IFocusingItem): JSX.Element => {

    const anotherKey: number = id + 1;
  

    return(
    <div key={id}  className='connecting_container'>
        <FocusingItemContainer key={id} id={id} {...props}/>
        <ConnectingLine key={anotherKey} id={id} {...props}/>
    </div>
)};

export default ConnectingContainer;