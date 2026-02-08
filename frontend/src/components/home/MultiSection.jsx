import React from 'react';
import Services from './multi/Services';
import AboutUs from './multi/About'
import BlogPreview from './multi/BlogPreview';
import GetInTouch from './multi/GetInTouch';

const MultiSection = () => {
    return (
        <div>
            <div className='columns  is-multiline m-6'>
                <Services />
            </div>
            <hr className='has-background-grey-light mx-6' />
            <div className='columns is-fullwidth is-multiline my-6 mx-6'>
                <div className='column is-8' style={{ borderRight: '1px solid #333'}}>
                    <AboutUs />
                </div>
                <div className='column is-3'>
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
};

export default MultiSection;