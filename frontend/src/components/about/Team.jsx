import React from 'react';

const Team = () => {
    return (
        <div className='container mb-6'>
            <div className='columns'>
                <div className='column is-5'>
                    <hr className='team-hr'/>
                </div>
                <div className='column is-2'>
                    <h2 className='title is-size-4 mt-2 has-text-centered is-uppercase team-title'>Meet Our Team</h2>
                </div>
                <div className='column is-5'>
                    <hr className='team-hr'/>
                </div>
            </div>
            <div className='columns'>
                <div className='column is-3 is-offset-3'>
                    <div className='card card-bg has-text-centered'>
                        <div className='card-image'>
                            <figure className='image is-96x96 mx-auto p-2'>
                                <img src='https://picsum.photos/seed/picsum/200' />
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4 team-title'>Kim Carroll</p>
                                    <p className='subtitle is-5 team-title has-text-weight-semibold mt-1'>Co-Founder & Lead Developer</p>
                                </div>
                            </div>
                            <div className='content content-text'>
                                Drawn to code from a young age, they’ve built their skills through a mix of formal education and self-guided learning. Though life circumstances altered their academic path, their passion for growth and keeping current has remained constant.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-3'>
                    <div className='card card-bg has-text-centered'>
                        <div className='card-image'>
                            <figure className='image is-96x96 mx-auto p-2'>
                                <img src='https://picsum.photos/seed/picsum/200'/>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-content'>
                                    <p className='title is-4 team-title'>Earl Carroll</p>
                                    <p className='subtitle is-5 team-title has-text-weight-semibold mt-1'>Co-Founder & Lead <br />Designer</p>
                                </div>
                            </div>
                            <div className='content content-text'>
                                With a growing passion for design and layout, he brings a fresh perspective to every project. New to the industry and currently studying Graphic Design, he approaches each layout with curiosity, creativity, and a strong desire to learn and grow.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-3'></div>
            </div>
        </div>
    );
};

export default Team;