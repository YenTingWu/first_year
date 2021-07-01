import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { deleteTimeBasedArticle, deleteCategoryBasedArticle } from '../../redux/articlesInfo/articlesInfo.actions';


const DeleteButtonContainer = ({ isDeleteBtnClicked, setIsDeleteBtnClicked, article, deleteTimeBasedArticle, deleteCategoryBasedArticle }) => {

    const toggleDeleteBtnClicked = () => setIsDeleteBtnClicked(!isDeleteBtnClicked);
    const closeDeleteContainer = () => setIsDeleteBtnClicked(false);

    const handleDeleteAritcle = (articleInfo) => {
        deleteTimeBasedArticle(articleInfo);
        deleteCategoryBasedArticle(articleInfo);
        setIsDeleteBtnClicked(false)
    }

    return (
        <>
            {/* {
                currentUser ?  */}
                <div 
                    className='blog_collection_item_delete_btn'
                    onClick={() => toggleDeleteBtnClicked()}
                    >X
                </div>

                {/* :
                null
            } */}
            {
                isDeleteBtnClicked ? 
                <div className='blog_collection_item_delete_checkbox'>
                    <main>Are you sure to delete the article?</main>
                    <div className='blog_collection_item_delete_checkbox_btn_container'>
                        <button 
                            type='button' 
                            onClick={() => handleDeleteAritcle(article)}>
                                Go Ahead!
                        </button>
                        <button 
                            type='button'
                            onClick={() => closeDeleteContainer()}
                            >
                                Hell NO!
                        </button>
                    </div>
                </div> : null
            }
        </>
    )
}


const mapStateToProps = createStructuredSelector<any, any>({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    deleteTimeBasedArticle: articleInfo => dispatch(deleteTimeBasedArticle(articleInfo)),
    deleteCategoryBasedArticle: articleInfo => dispatch(deleteCategoryBasedArticle(articleInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButtonContainer);