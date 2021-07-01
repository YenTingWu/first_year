import React  from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlogNavigationCategory from '../BlogNavigationCategoriy/BlogNavigationCategory.component';

import { IFocusingItem } from '../../redux/focusingItems/focusingItems.types';
import { IRootState } from '../../redux/root-reducer';

import { selectFocusingData } from '../../redux/focusingItems/focusingItems.selectors';

import './BlogNavigation.style.scss';

interface IProps {
    focusingItemsData: IFocusingItem[]
}

const BlogNavigation = ({ focusingItemsData }: IProps ): JSX.Element => (
    <div className={`blog_navigation`}>
        <div className='blog_inline_navigation'>
        {
            focusingItemsData
                // .filter((itemDate, index) => index < 4 + click)
                // use selector to check
                .map(({id, name}: {id: number; name: string}): JSX.Element => 
                    <BlogNavigationCategory key={id} name={name}/>)
        }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector<IRootState, IProps>({
    focusingItemsData: selectFocusingData 
});

export default connect(mapStateToProps)(BlogNavigation);