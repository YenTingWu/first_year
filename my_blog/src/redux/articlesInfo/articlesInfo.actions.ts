import { IArticlesInfo, articlesInfoActionsType } from './articlesInfo.types';

interface IAddTimeBasedArticle {
    type: typeof articlesInfoActionsType.ADD_TIME_BASED_ARTICLE,
    payload: IArticlesInfo
}

interface IAddCategoryBasedArticle {
    type: typeof articlesInfoActionsType.ADD_NEW_CATEGORY_BASED_ARTICLE,
    payload: IArticlesInfo
}

interface IDeleteTimeBasedArticle {
    type: typeof articlesInfoActionsType.DELETE_TIME_BASED_ARTICLE,
    payload: IArticlesInfo
}

interface IDeleteCategoryBasedArticle {
    type: typeof articlesInfoActionsType.DELETE_CATEGORY_BASED_ARTICLE,
    payload: IArticlesInfo
}

export type IArticlesActionsType = 
    IAddTimeBasedArticle | 
    IAddCategoryBasedArticle | 
    IDeleteTimeBasedArticle | 
    IDeleteCategoryBasedArticle;

export const addTimeBasedArticle = (articleInfo: IArticlesInfo): IArticlesActionsType => ({
    type: articlesInfoActionsType.ADD_TIME_BASED_ARTICLE,
    payload: articleInfo
});

export const addCategoryBasedArticle = (articleInfo: IArticlesInfo): IArticlesActionsType => ({
    type: articlesInfoActionsType.ADD_NEW_CATEGORY_BASED_ARTICLE,
    payload: articleInfo
});


export const deleteTimeBasedArticle = (articleInfo: IArticlesInfo): IArticlesActionsType => ({
    type: articlesInfoActionsType.DELETE_TIME_BASED_ARTICLE,
    payload: articleInfo
});

export const deleteCategoryBasedArticle = (articleInfo: IArticlesInfo): IArticlesActionsType => ({
    type: articlesInfoActionsType.DELETE_CATEGORY_BASED_ARTICLE,
    payload: articleInfo
})