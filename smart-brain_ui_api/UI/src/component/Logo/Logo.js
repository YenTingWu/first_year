import React from 'react';
import brain from './brain.png'
import Tilt from 'react-tilt'
import './Logo.css'


const Logo = () =>{
    return (
        <div className='ma4 mt0'>
            <Tilt 
                 className="Tilt br2 shadow-2" 
                 options={{ max : 65 }}   
                 style={{ height: 150, width: 150 }} 
                  >
                <div className="Tilt-inner">
                    <img alt="logo" src={brain}/>
                </div>
            </Tilt>
        </div>
    );
} 

export default Logo; 