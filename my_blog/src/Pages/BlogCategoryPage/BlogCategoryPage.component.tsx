import * as React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { RouteComponentProps } from 'react-router';

import { selectCategoriesBasedArticles } from '../../redux/articlesInfo/articlesInfo.selectors';

import BlogCollectionItem from '../../Components/BlogCollectionItem/BlogCollectionItem.component';

import './BlogCategoryPage.style.scss';

interface IProps {
    match: RouteComponentProps;
    categoriesBasedArticles: object;
}

const BlogCategoryPage: React.FC<IProps> = ({ match, categoriesBasedArticles }) => {
    const { params: { category } } = match;

    return (
    <div className='blog_category_page'>
        <div className='occupation' >
            <h1 className='blog_category_page_title'>
                {category.replace('_', ' ').toUpperCase()}
            </h1>
        </div>
 
        <div className='blog_category_page_main_section'>
            {
                categoriesBasedArticles[category.replace(/\s+/g, "_")].map((article, index) => 
                    <BlogCollectionItem 
                        key={index}
                        article={article}
                        blogCategoryPage
                        />
                 )
            }      
        </div>
    </div>
)};

const mapStateToProps = createStructuredSelector<any, any>({
    categoriesBasedArticles: selectCategoriesBasedArticles
});

export default connect(mapStateToProps)(BlogCategoryPage);

