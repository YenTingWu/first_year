import * as React from 'react';
import { connect } from 'react-redux';

import { toggleHomePageStart } from '../../redux/home/home.actions';

import './UnstartedHeader.style.scss';

interface IProps {
    toggleHomePageStart: () => void
}

const UnstartedHeader = ({ toggleHomePageStart }: IProps ): JSX.Element =>  (
        <div className='my_intro'>
            <img className='my_profile_img' alt='profile_img' src='/images/my_profile.jpg'/>
            <h1 className='my_name'>YenTing Wu</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque consequuntur, voluptatum dolorem id quidem veritatis placeat ullam nostrum voluptas quae, enim dolores delectus quam quod excepturi temporibus itaque sapiente!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iusto quibusdam hic cum excepturi cumque officia quasi quaerat. Ratione amet quod doloribus nisi iusto cum ipsam consequatur illo natus obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio, suscipit optio, praesentium, et commodi facilis ut saepe ipsa non quo minus laudantium dolorum blanditiis sapiente vitae at quisquam mollitia.
            </p>
            <button className='start_btn' onClick={() => toggleHomePageStart()}>Long Talk</button>
        </div>
    )


const mapDispatchToProps = (dispatch) => ({
    toggleHomePageStart: () => dispatch(toggleHomePageStart())
});

export default connect(null, mapDispatchToProps)(UnstartedHeader);