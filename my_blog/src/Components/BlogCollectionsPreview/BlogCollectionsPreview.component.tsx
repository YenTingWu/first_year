import React, { useEffect, useCallback, useRef } from 'react';
import { connect } from 'react-redux';

import BlogCollectionItem from '../BlogCollectionItem/BlogCollectionItem.component';

import { selectTenTimeBasedArticles, selectCategoriesBasedArticles, selectTimeBasedArticlesAmount } from '../../redux/articlesInfo/articlesInfo.selectors';

import { IRootState } from '../../redux/root-reducer';

import './BlogCollectionsPreview.style.scss';

interface IProps {
    pageNumber: number;
    timeBasedArticles: any[];
    categoresBasedArticles: any[];
    totalArticlesAmount: number;
}

const BlogCollectionsPreview = ({ pageNumber, timeBasedArticles, categoresBasedArticles, totalArticlesAmount }: IProps): JSX.Element =>  {


    const container = useRef<HTMLDivElement | null>(null);
    const toggleContainerStick = useCallback(() => {
        (function (container){
            const articleAmountContainer = container.current;
            if(articleAmountContainer) {
                const containerRect = articleAmountContainer.getBoundingClientRect();
                if(articleAmountContainer && containerRect) {
                    const windowY = window.pageYOffset 
                    if(windowY > 1252) {
                        articleAmountContainer.classList.add('stick');
                    } else {
                        articleAmountContainer.classList.remove('stick');
                    }
                }
            } 
        })(container)
    }, [container])

    useEffect(() => {
        window.addEventListener('scroll', () => toggleContainerStick());
        return window.removeEventListener('scroll', () => toggleContainerStick());
    }, [toggleContainerStick]);

    return(
    <div className='blog_all_items_overview'>
        <div className='blog_all_items_overview_container'>
            {
                timeBasedArticles
                    .filter((article, index) => index < pageNumber * 10)
                    .map((article, index): JSX.Element =>  
                        <BlogCollectionItem 
                            article={article}
                            key={index}
                            index={index}
                            />
                    )
            }
        </div>
        <div className='blog_all_items_overview_right_section'>
            <div 
                className='blog_all_items_overview_right_section_articles_amount_container'
                ref={container}
                >
                <h3>Total Articles: {totalArticlesAmount}</h3>
                <h4>Programming: {categoresBasedArticles['programming'].length}</h4>
                <h4>Outdoor Activities: {categoresBasedArticles['outdoor_activities'].length}</h4>
                <h4>Travel: {categoresBasedArticles['travel'].length}</h4>
                <h4>Music: {categoresBasedArticles['music'].length}</h4>
            </div>
        </div>
    </div>
)};

const mapStateToProps = (state: IRootState, ownProps: IProps) => ({
    timeBasedArticles: selectTenTimeBasedArticles(ownProps.pageNumber)(state),
    categoresBasedArticles: selectCategoriesBasedArticles(state),
    totalArticlesAmount: selectTimeBasedArticlesAmount(state),
});

export default connect(mapStateToProps)(BlogCollectionsPreview);



