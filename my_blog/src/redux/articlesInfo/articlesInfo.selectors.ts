import { createSelector } from 'reselect';
import { IRootState } from '../root-reducer';
import { IArticlesInfoState } from './articlesInfo.reducers';

const selectArticlesInfo = (state: IRootState) => state.articlesInfo;

export const selectTimeBasedArticles = createSelector<IRootState, IArticlesInfoState, any>(
    [selectArticlesInfo],
    articlesInfo => articlesInfo.timeBasedArticles
);

export const selectCategoriesBasedArticles = createSelector<IRootState, any, any>(
    [selectArticlesInfo],
    articlesInfo => articlesInfo.categoriesBasedArticles
);

export const selectSpecificCategoriesArticle = (category: string, id: number) => createSelector(
    [selectCategoriesBasedArticles],
    articlesInfo => articlesInfo[category].filter(articleInfo => articleInfo.id === id)
);

export const selectTenTimeBasedArticles = (pageNumber: number) => createSelector(
    [selectTimeBasedArticles],
    timeBasedArticles => 
        timeBasedArticles.filter((timeBasedArticle, i) => i < (pageNumber + 1) * 10)
);

export const selectTimeBasedArticlesAmount = createSelector(
    [selectTimeBasedArticles],
    articlesInfo => articlesInfo.length
)

export const selectSpecificCategoryAmount = (category: string) => createSelector(
    [selectCategoriesBasedArticles],
    categoriesBasedArticle => categoriesBasedArticle[category].length
);


