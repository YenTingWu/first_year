import * as React from 'react';

import UnstartedHeader from '../UnstartedHeader/UnstartedHeader.component';
import StartedHeader from '../StartedHeader/StartedHeader.component';

import './Header.style.scss';

interface IHome {
    started: boolean
}

export interface IHeaderProps {
    home: IHome,
}

const Header = ({ started }: IHome): JSX.Element => (
    <div className={`header ${started ? `started` : ''}`}>
        {
            started ? <StartedHeader /> : <UnstartedHeader />
        }    
    </div>
)


export default Header;