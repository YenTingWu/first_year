import React, { useState, useRef, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import StoryPageControllersContainer from '../../Components/StoryPageControllersContainer/StoryPageControllersContainer.component';
import StoryContentArea from '../../Components/StoryContentArea/StoryContentArea.component';
import StoryPublishButton from '../../Components/StoryPublishButton/StoryPublishButton.component';
import StorySaveButton from '../../Components/StorySaveButton/StorySaveButton.component';

import { selectCategoriesBasedArticles } from '../../redux/articlesInfo/articlesInfo.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './StoryPage.style.scss';

interface IArticleInfo {
    id: number;
    category: string;
    title: string;
    description: string;
    publishedAt: string;
    image: string;
    writer: string | null;
    content: {
        [chapterName: string]: string;
    }
}

interface IProps {
    categoriesBasedArticles: IArticleInfo;
    currentUser: string | null;
    match: any;
}

// Prototype of article info

export class ArticleInfo implements IArticleInfo {
    id: number;
    category: string;
    title: string;
    description: string;
    publishedAt: string;
    image: string;
    writer: string | null;
    content: {
        [chapterName: string]: string;
    }
    constructor(
        id: number, 
        category: string, 
        title: string, 
        description: string,
        publishedAt: string,
        image: string,
        writer: string | null, 
        content: {
            [chapterName: string]: string;
        }) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.publishedAt = publishedAt;
        this.image = image;
        this.writer = writer;
        this.content = content;
    }
}

// Build my formatted date ex. xxxx-xx-xx

export const buildFormatDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1 
    const date = now.getDate();

    const publishedAt = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date < 10 ? `0${date}` : `${date}`}`;

    return publishedAt;
}

const StoryPage: React.FC<IProps> = ({ 
    categoriesBasedArticles, 
    currentUser,
    match
}) => {
    const [chapters, setChapters] = useState<string[]>([]);
    const [contents, setContents] = useState<any[]>([]);
    const [currentChapter, setCurrentChapter] = useState<string>('');
    const [currentContent, setCurrentContent] = useState<string>('');
    const articleState =  useRef<IArticleInfo | null>(
        new ArticleInfo(
            0, 
            Object.keys(categoriesBasedArticles)[0], 
            '', 
            '', 
            buildFormatDate(),
            '', 
            'current user',
            {})      
    );

    // When user inputs value to div with contentEditable={true}, theh set the value into the articleState object

    const buildArticleInfo = (articleState): void => {
        const titleEl: HTMLElement | null = 
            document.querySelector('.story_textarea_title');
        const descriptionEl: HTMLElement | null = 
            document.querySelector('.story_textarea_description');
        const contentEl: HTMLElement | null = 
            document.querySelector('.story_textarea_content');
        const title: string | undefined = titleEl?.innerText;
        const description: string | undefined = descriptionEl?.innerText;
        const textContent = contentEl?.innerHTML;
        const currentInfo = articleState.current;
    
        if(titleEl && descriptionEl && contentEl) {
            if(title !== currentInfo.title) {
                articleState.current = 
                { ...articleState.current, 
                    title: titleEl?.innerText, 
                    publishedAt: buildFormatDate()
                } 
            } else if(description !== currentInfo.description) {
                articleState.current = 
                { ...currentInfo, 
                    description: descriptionEl?.innerText, 
                    publishedAt: buildFormatDate()
                }
            } else if(textContent && currentChapter) {
                const nextContent = {
                    [currentChapter]: textContent,
                }
                const contentObj = 
                    Object.assign({...articleState.current.content}, {...nextContent});

                articleState.current = 
                    {   ...currentInfo, 
                        content: {
                            ...contentObj
                        }, 
                        publishedAt: buildFormatDate()
                    }
            }
        }
    };

    // To handle save button

    const handleSaveBtn = (): void => {
        const textContent = document.querySelector('.story_textarea_content');
        const targetIndex = chapters.indexOf(currentChapter);
        const newContents = [...contents];
        newContents[targetIndex] = textContent?.innerHTML;
        setContents(newContents);
    }

    // If currentChapter has already existed and the corresponed content has already exist, then set the currentContent to the corresponed contebnt
    
    useEffect(() => {
        const targetIndex = chapters.indexOf(currentChapter);
        if(contents[targetIndex]) { 
            setCurrentContent(contents[targetIndex]);
        }
    }, [currentChapter, contents, chapters]);

    // Get the article we are targeting to edit

    const { category, id } = match.params;
    const articleToEdit = category && id ? 
        categoriesBasedArticles[category].find(article => article.id === Number(id)) : null;

    // If this is an article to edit, then set all aritcle infos to articleState
    
    useEffect(() => {
        if(articleToEdit) { 
            articleState.current = new ArticleInfo(
                articleToEdit.id, 
                articleToEdit.category,
                articleToEdit.title,
                articleToEdit.description,
                articleToEdit.publishedAt,
                articleToEdit.image,
                articleToEdit.writer,
                articleToEdit.content
                );
            setChapters(Object.keys(articleToEdit.content));
            setContents(Object.values(articleToEdit.content));
            setCurrentChapter(Object.keys(articleToEdit.content)[0])
        } 
    }, [articleToEdit]);

    return (
    <section className='story_page'>
        <article className='story_page_article'>
            <StoryPublishButton articleState={articleState}/>
            <StorySaveButton handleSaveBtn={() => handleSaveBtn()}/>
            <div 
                className='story_textarea' 
                onInput={() => buildArticleInfo(articleState)}
                suppressContentEditableWarning={true} 
                contentEditable='true'
                >
                <h3 className='story_textarea_title' data-ph='Title'>
                    {articleToEdit && articleToEdit.title ? articleToEdit.title : null}
                </h3>
                <h4 className='story_textarea_description' data-ph='Advanture Description'>
                    {articleToEdit && articleToEdit.description ? articleToEdit.description : null}
                </h4>
                <StoryPageControllersContainer 
                    contents={contents}
                    setContents={setContents}
                    chapters={chapters} 
                    setChapters={setChapters}
                    setCurrentContent={setCurrentContent}
                    currentChapter={currentChapter} 
                    setCurrentChapter={setCurrentChapter} 
                    articleState={articleState}
                    />
                <StoryContentArea chapters={chapters} currentContent={currentContent} />
            </div>
        </article>
    </section>
    )
};

const mapStateToProps = createStructuredSelector<any, any>({
    categoriesBasedArticles: selectCategoriesBasedArticles,
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(StoryPage);