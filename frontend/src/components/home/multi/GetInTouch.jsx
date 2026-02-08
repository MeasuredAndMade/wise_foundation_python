import React from 'react';

const GetInTouch = () => {
    return (
        <div>
            <div className='columns extra-mobile'>
                <div className='column has-text-centered'>
                    <h2 className='title is-size-3 service-title'>Get In Touch</h2>     
                </div>      
            </div>
            <div className='columns'>
                <div className='column has-text-centered'>
                    <p className='blog-excerpt'>
                        Reach out to start a new project.
                    </p>
                </div>
            </div>
            <div className='columns'>
                <div className='column has-text-centered'>
                    <a className='button is-size-6 cta-button' href='/contact'>Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;