import React, { useState, useEffect, useContext, useRef,useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlogMainOverview from '../BlogMainOverview/BlogMainOverview';
import BlogCollectionsPreview from '../BlogCollectionsPreview/BlogCollectionsPreview.component';

import { AppDOMObject } from '../../App/App';

import { selectTimeBasedArticlesAmount } from '../../redux/articlesInfo/articlesInfo.selectors';

import './BlogPreview.style.scss';

interface IProps {
    timeBasedArticlesAmount: number;
}

const BlogPreview: React.FC<IProps> = ({ timeBasedArticlesAmount }) => {

    const appDiv = useContext(AppDOMObject);

    const useFetchMoreArticles = (timeBasedArticlesAmount: number): number => {

        const [pageNumber, setPageNumber] = useState<number>(1);
    
        useEffect(() => {
    
            const showMoreArticles = (): void => {
                const app: HTMLElement | null = appDiv.app.current;
                if(app && timeBasedArticlesAmount) {
                    if(window.scrollY + window.innerHeight >= app.scrollHeight) {
                        if(timeBasedArticlesAmount > pageNumber * 10) {
                            setPageNumber(pageNumber + 1)
                        }
                    }
                }
            }
            window.addEventListener('scroll', () => showMoreArticles());
            return () => window.removeEventListener('scroll', () => showMoreArticles());
        }, [pageNumber, timeBasedArticlesAmount]);
    
        return pageNumber;
    };

    const pageNumber = useFetchMoreArticles(timeBasedArticlesAmount)

    return (
    <div className='blog_preview'>
        <div className='occupation' >
            <h1>Make an experience</h1>
        </div>
        <BlogMainOverview />
        <BlogCollectionsPreview pageNumber={pageNumber}/>
    </div>
    )
};

const mapStateToProps = createStructuredSelector<any, any>({
    timeBasedArticlesAmount: selectTimeBasedArticlesAmount
});

export default connect(mapStateToProps)(BlogPreview);