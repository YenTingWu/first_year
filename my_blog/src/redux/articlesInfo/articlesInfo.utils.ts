export const addArticleToTimeBasedArticles = (timeBasedArticlesArray, articleToAdd) => [articleToAdd, ...timeBasedArticlesArray];

export const addArticleToCategoryBasedArticles = (categoryBasedArticlesObject, articleToAdd) => {
    const targetCategory = articleToAdd.category;
    const newTargetCategoryArray = [articleToAdd, ...categoryBasedArticlesObject[targetCategory]]

    console.log(targetCategory);
    return {...categoryBasedArticlesObject, [targetCategory]: newTargetCategoryArray}
};

export const deleteArticleFromTimeBasedArticles = (timeBasedArticlesArray, articleToDelete) => {
    const index = timeBasedArticlesArray.findIndex(article => article.category === articleToDelete.category && article.id === articleToDelete.id);
    timeBasedArticlesArray.splice(index, 1);

    return [...timeBasedArticlesArray];
}

export const deleteArticleFromCategoryBasedArticles = (categoryBasedArticlesObject, articleToDelete) => {
    const { category, id } = articleToDelete;
    const targetCategoryArticles = categoryBasedArticlesObject[category]
    const index = targetCategoryArticles.findIndex(article => article.id === id);
    targetCategoryArticles.splice(index, 1);
    
    return {
        ...categoryBasedArticlesObject,
        [category]: targetCategoryArticles
    }
}