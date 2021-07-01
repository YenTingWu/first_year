import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { handleItemsContainerCPChange } from '../../redux/centerPoint/centerPoint.actions'; 
import { IHandleItemsContainerCenterPoint } from '../../redux/centerPoint/centerPoint.types'

import './FocusingItemContainer.style.scss';

interface IProps {
    name: string;
    image: string;
    id: number;
    rect: {
        [name: string]: number;
    };
    match: any;
    handleItemsContainerCPChange: any;
}

interface ICenterPoint {
    x: number;
    y: number;
}

interface IItemContainerInfo {
    centerPoint?: ICenterPoint
    index?: number;
}

const FocusingItemContainer: React.FC<IProps> = (
    { name, image, rect, id,handleItemsContainerCPChange }
    ) => {
    
    const [is765, setIs765] = useState<boolean>(false);
    
    const stlye: React.CSSProperties = {
        backgroundImage: `url(${image})`,
    }
    const containerStyle: React.CSSProperties = {
        top: rect.top ? rect.top : rect.bottom,
        right: rect.right ? rect.right : '',
        left: rect.left ? rect.left : ''
    }

    const setItemCenterPoint = (): void => {
        const index: number = id - 1;
        const nodeList: NodeListOf<HTMLElement>
            = document.querySelectorAll('.focusing_item_container');
        const container: HTMLElement | null = nodeList.item(index); 
        // nodeList.item is able to get nodes with true nodeType from nodeList
        if(container && window.pageYOffset === 0) {
            const position: DOMRect = container.getBoundingClientRect();
            const { x, y, width, height } = position;
            const centerPoint: ICenterPoint = {
                x: x + width / 2 - window.innerWidth * 10 / 100 + 40,
                y: y + height / 2 - window.innerHeight * 11 / 100
            }
            handleItemsContainerCPChange({
                centerPoint,
                index
            });
        }

        if(window.innerWidth < 765) {
            setIs765(true);
        } else {
            setIs765(false);
        }
    }

    useEffect(() => {
        setItemCenterPoint();
        return () => console.log('focusingItemContainer is cleared!');
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        window.addEventListener('resize', () => setItemCenterPoint())
        return window.removeEventListener('resize', () => setItemCenterPoint());
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Link to={`/blog/${name.toLowerCase()}`}>
            <div className='focusing_item_container' style={!is765 ? containerStyle : {}}>
                <div className='shaping_container'>  
                    <div className='inside_item_container' style={stlye} />
                    <div className='focusing_item_name_container'>
                        <h1>{name.replace('_', ' ')}</h1>
                    </div>
                </div>
            </div>
        </Link>
    )
};

const mapDispatchToProps = dispatch => ({
    handleItemsContainerCPChange: 
        (itemContainerInfo: IItemContainerInfo): IHandleItemsContainerCenterPoint => dispatch(handleItemsContainerCPChange(itemContainerInfo))
});

export default connect(null, mapDispatchToProps)(FocusingItemContainer);