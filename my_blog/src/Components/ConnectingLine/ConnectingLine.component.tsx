import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IRootState } from '../../redux/root-reducer';
import { ICenterPointState } from '../../redux/centerPoint/centerPoint.types';

import {
    selectItemsContainerCenterPoint, 
    selectProfileImageCenterPoint
} from '../../redux/centerPoint/centerPoint.selectors';

import './ConnectingLine.style.scss';

const ConnectingLine = ({ itemsContainerCenterPoint, profileImageCenterPoint, id }: any): JSX.Element => {

    const index: number = id - 1;
    const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({
        top: '',
        left: ''
    });


    useEffect(() => {
        if(itemsContainerCenterPoint[index] && profileImageCenterPoint['x']) {
            const itemCP = itemsContainerCenterPoint[index];

            const distanceX = (itemCP.x - profileImageCenterPoint.x);
            const distanceY = (itemCP.y - profileImageCenterPoint.y);
            const distance = Math.pow((distanceX ** 2 + distanceY ** 2), .5);

            const arc = Math.atan2(distanceY, distanceX) * 180 / Math.PI;
         
            setContainerStyle({
                ...containerStyle,
                top: `${itemCP.y}px`,
                left: `${itemCP.x}px`,
                width: `${distance}px`,
                transform: `rotateZ(${arc - 180}deg)`
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemsContainerCenterPoint, profileImageCenterPoint]);    
    
    return (
    <div className='connecting_line' style={containerStyle}>
    </div>
    )
};

const mapStateToProps = createStructuredSelector<IRootState, ICenterPointState>({
    itemsContainerCenterPoint: selectItemsContainerCenterPoint,
    profileImageCenterPoint: selectProfileImageCenterPoint
});

export default connect(mapStateToProps)(ConnectingLine);
