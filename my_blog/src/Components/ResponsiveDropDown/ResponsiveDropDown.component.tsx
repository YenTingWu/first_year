import React, { useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFocusingData } from '../../redux/focusingItems/focusingItems.selectors';

import './ResponsiveDropDown.style.scss';

const ResponsiveDropDown: React.FC<any> = ({ focusingItemsData, match }) => {

    const dropDownIcon = useRef<HTMLImageElement | null>(null);
    const handleDropDown = (): void => {
        if(dropDownIcon.current) {
            dropDownIcon.current.classList.toggle('drop');
        }
    } 
    
    return (

    <div className='responsive_drop_down' ref={dropDownIcon}>
        <div 
            className='responsive_drop_down_icon' 
            onClick={() => handleDropDown()}
            >
            <img 
                className='responsive_drop_down_icon_image' 
                src="/images/drop_down.png" 
                width='75' 
                height='75' 
                alt="drop_down_icon"
                />
        </div>
        <ul className='responsive_drop_down_list'>
            <Link to={`${match.url}`}>
                <li className='responsive_drop_down_list_item'>HOME</li>
            </Link>
            <Link className='dropdown_blog_link' to={`${match.url}blog`}>
                <li className='responsive_drop_down_list_item'>BLOG</li>
            </Link>
            <ul className='responsive_drop_down_list_blog_dropdown'>
                {
                    focusingItemsData
                        // .filter((itemDate, index) => index < 4 + click)
                        // use selector to check
                        .map(({id, name}: {id: number; name: string}): JSX.Element => 
                            <Link key={id} to={`${match.url}blog/${name.toLowerCase()}`}>
                                <li className='responsive_drop_down_blog_item'>{name.replace('_', ' ')}</li>
                            </Link>
                        )
                }
            </ul>
            <Link to={`${match.url}contact`}>
                <li className='responsive_drop_down_list_item'>CONTACT</li>
            </Link>
            
            
        </ul>
    </div>
    )
};

const mapStateToProps = createStructuredSelector<any, any>({
    focusingItemsData: selectFocusingData 
});

export default withRouter(connect(mapStateToProps)(ResponsiveDropDown));