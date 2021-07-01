import * as React from 'react';

import BrainStorming from '../../Components/BrainStorming/BrainStorming.component';

import './HomePage.styles.scss';

const HomePage: React.FC = () => (
    <div className='homepage'>
        <BrainStorming />
    </div>
);

export default HomePage;