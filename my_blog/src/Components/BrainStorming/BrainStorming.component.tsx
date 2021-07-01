import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
  
import ConnectingContainer from '../ConnectingContainer/ConnectingContainer.component';

import { handleProfileImageCPChange } from '../../redux/centerPoint/centerPoint.actions';
import { selectFocusingData } from '../../redux/focusingItems/focusingItems.selectors';
import { IFocusingItem } from '../../redux/focusingItems/focusingItems.types'
import { IRootState } from '../../redux/root-reducer';

import './BrainStorming.style.scss';

export interface ICenterPoint {
    x?: number;
    y?: number;
}

interface IProps {
    focusingItemsData: IFocusingItem[];
    handleProfileImageCPChange: any;
}


const setProfileImage = ( handleProfileImageCPChange ) => {
    const profileImageContainer: HTMLElement | null = document.querySelector('.profile_image_BrainStorming_component');

    if(profileImageContainer && window.pageYOffset === 0) {
        const position: DOMRect = profileImageContainer.getBoundingClientRect();
        const { x, width, y, height }: DOMRect = position;
        handleProfileImageCPChange({
            x: x + width / 2 - window.innerWidth * 10 / 100 + 40,
            y: y + height / 2 - window.innerHeight * 11 / 100    
        });
    }
    return (): void => console.log('clear up')
}

const BrainStorming = ({ focusingItemsData, handleProfileImageCPChange }: IProps)
    : JSX.Element => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setProfileImage(handleProfileImageCPChange), []);

    useEffect(() => {
        window.addEventListener('resize', () => setProfileImage(handleProfileImageCPChange));
        return window.removeEventListener('resize', () => setProfileImage(handleProfileImageCPChange));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
    <div className='brainstorming'>
        <div className='profile_image_BrainStorming_component'>
            <img src="/images/my_profile.jpg" alt="my_profile" width='200' height='200'/>
        </div>
        <div className='connecting_container_showcase'>
        {
            focusingItemsData.map(({id, ...props}): JSX.Element => (
                <ConnectingContainer id={id} key={id} {...props}/>
            ))          
        }
        </div>     
    </div>
    )
};

interface ISelector {
    focusingItemsData: IFocusingItem[]
};

const mapStateToProps = createStructuredSelector<IRootState, ISelector>({
    focusingItemsData: selectFocusingData
});

const mapDispatchToProps = (dispatch: any) => ({
    handleProfileImageCPChange: centerPoint => dispatch(handleProfileImageCPChange(centerPoint))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrainStorming);
