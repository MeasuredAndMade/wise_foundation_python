import React from 'react';

const Hero = () => {
    return (
        <section className='hero home-hero is-fullheight-with-navbar is-fullwidth '>
            <div className='hero-body has-text-centered'>
                <div className='container'>
                    <div className='titles'>
                        <h1 className='title hero-text is-size-1'>Thoughfully Designed. Purposefully Built</h1>
                        <hr className='title-hr m-auto' />
                        <h2 className='subtitle hero-text is-size-3 mt-5'>Measured & Made creates custom digital expreiences that are intentionally designed, carefully crafted, and built to grow with you needs.</h2>
                    </div>
                    <div className='cta-area mt-6'>
                        <a className='button is-size-4 cta-button' href='/contact'>Let's build something together!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;