interface IContent {
    [name: string]: string
}

export interface IArticlesInfo {
    id: number;
    category: string;
    title: string;
    description: string;
    publishedAt: string;
    image: string;
    writer: string;
    content: IContent
}

interface Types {
    [name: string]: string
}

export const articlesInfoActionsType: Types = {
    ADD_TIME_BASED_ARTICLE: 'ADD_TIME_BASED_ARTICLE',
    ADD_NEW_CATEGORY_BASED_ARTICLE: 'ADD_NEW_CATEGORY_BASED_ARTICLE',
    DELETE_TIME_BASED_ARTICLE: 'DELETE_TIME_BASED_ARTICLE',
    DELETE_CATEGORY_BASED_ARTICLE: 'DELETE_CATEGORY_BASED_ARTICLE'
}

