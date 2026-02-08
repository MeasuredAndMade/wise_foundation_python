import React from 'react';
import logo from '../../assets/logo.png';
const StoryMission = () => {
    return (
        <div className='container my-6'>
            <div className='columns is-vcentered'>
                <div className='column is-3 py-5'>
                    <figure className='image is-196x196'>
                        <img src={logo} alt='Measured & Made Logo' />
                    </figure>
                </div>
                <div className='column'>
                    <h2 className='title pl-3 is-size-3 story-title'>Our Story</h2>
                    <p className='is-size-6 story-text mb-2 pl-3'>Measured & Made was created out of a desire to do things differently—and do them better.</p>

                    <p className='is-size-6 story-text mb-2 pl-3'>This company was built on the belief that how we work matters just as much as what we create. From the beginning, Measured & Made has been grounded in strong morals, mutual respect, and the understanding that every person brings value to the table. Every voice matters. Every idea deserves to be heard.</p>

                    <p className='is-size-6 story-text mb-2 pl-3'>Too often, people are rushed, overlooked, or made to feel like their vision doesn’t fit a mold. We set out to create a space where collaboration feels safe, thoughtful, and human—where ideas are explored, refined, and respected, not dismissed.</p>

                    <p className='is-size-6 story-text mb-2 pl-3'>We measure before we make. That means listening first, asking the right questions, and planning with intention. It means taking the time to understand not just the project, but the people behind it. Only then do we build—carefully, purposefully, and with pride.</p>

                    <p className='is-size-6 story-text mb-2 pl-3'>Measured & Made exists to create work that reflects integrity, care, and intention. Work that honors individuality. Work that’s built to last. Work that proves you don’t have to compromise your values to create something exceptional.</p>

                    <p className='is-size-6 story-text mb-2 pl-3'>This is what happens when ideas are respected, people are valued, and work is done the right way.</p>

                    <h2 className='title pl-3 mt-5 is-size-3 story-title'>Our Mission</h2>
                    <p className='is-size-6 story-text mb-2 pl-3'>We exist to slow the process just enough to do it right—listening first, valuing every idea, and building with care, honesty, and purpose.</p>
                </div>
            </div>
            
        </div>
    );
};

export default StoryMission;