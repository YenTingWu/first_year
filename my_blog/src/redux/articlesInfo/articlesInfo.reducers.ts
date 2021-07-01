import { articlesInfoActionsType } from './articlesInfo.types';
import { IArticlesActionsType } from './articlesInfo.actions';

import { 
    addArticleToTimeBasedArticles, 
    addArticleToCategoryBasedArticles, 
    deleteArticleFromTimeBasedArticles,
    deleteArticleFromCategoryBasedArticles } from './articlesInfo.utils';
import { ARTICLES_DATA_TIMES, ARTICLES_DATA_CATEGORIES } from '../../data/articleData';

export type IArticlesInfoState = typeof INITIAL_STATE;

const INITIAL_STATE = {
    timeBasedArticles: ARTICLES_DATA_TIMES,
    categoriesBasedArticles: ARTICLES_DATA_CATEGORIES
};

const articlesInfoReducers = (
    state: typeof INITIAL_STATE = INITIAL_STATE, 
    action: IArticlesActionsType): IArticlesInfoState => {
        switch(action.type) {
            case articlesInfoActionsType.ADD_TIME_BASED_ARTICLE: 
                return {
                    ...state,
                    timeBasedArticles: addArticleToTimeBasedArticles(state.timeBasedArticles, action.payload)
                };
            case articlesInfoActionsType.ADD_NEW_CATEGORY_BASED_ARTICLE:
                return {
                    ...state,
                    categoriesBasedArticles: addArticleToCategoryBasedArticles(state.categoriesBasedArticles, action.payload)
                }
            case articlesInfoActionsType.DELETE_TIME_BASED_ARTICLE:
                return {
                    ...state,
                    timeBasedArticles: deleteArticleFromTimeBasedArticles(state.timeBasedArticles, action.payload)
                }
            case articlesInfoActionsType.DELETE_CATEGORY_BASED_ARTICLE: 
                return {
                    ...state, 
                    categoriesBasedArticles: deleteArticleFromCategoryBasedArticles(state.categoriesBasedArticles, action.payload)
                }
            default: 
                return state;
        }
};

export default articlesInfoReducers;