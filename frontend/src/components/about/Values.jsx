import React from 'react';
import { Helmet } from 'react-helmet-async';

const Values = () => {
    return (
        <>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-5'>
                        <hr className='team-hr'/>
                    </div>
                    <div className='column is-2'>
                        <h2 className='title is-size-4 mt-2 is-uppercase team-title has-text-centered'>Our Values</h2>
                    </div>
                    <div className='column is-5'>
                        <hr className='team-hr'/>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column is-2 is-offset-1 p-4 has-text-centered'>
                        <h3 className='title is-size-4 is-uppercase is-underlined value-title'>Integrity</h3>
                        <p className='value-title'>We believe in doing the right thing—even when it’s harder or takes longer. Integrity guides how we communicate, collaborate, and build, ensuring trust and transparency at every step.</p>
                    </div>
                    <div className='column is-2 p-4 has-text-centered'>
                        <h3 className='title is-size-4 is-uppercase is-underlined value-title'>People</h3>
                        <p className='value-title'>Every person brings value to the process. We create space for open conversation, mutual respect, and thoughtful collaboration because great work starts with feeling heard.</p>
                    </div>
                    <div className='column is-2 p-4 has-text-centered'>
                        <h3 className='title is-size-4 is-uppercase is-underlined value-title'>Ideas</h3>
                        <p className='value-title'>No idea is dismissed. We believe meaningful solutions come from exploration, curiosity, and refinement—turning diverse perspectives into stronger outcomes.</p>
                    </div>
                    <div className='column is-2 p-4 has-text-centered'>
                        <h3 className='title is-size-4 is-uppercase is-underlined value-title'>Intention</h3>
                        <p className='value-title'>We don’t rush the process. By planning thoughtfully and building carefully, we create work that is purposeful, well-considered, and built to last.</p>
                    </div>
                    <div className='column is-2 p-4 mb-2 has-text-centered'>
                        <h3 className='title is-size-4 is-uppercase is-underlined value-title'>Growth</h3>
                        <p className='value-title'>Learning never stops. We stay curious, adapt to change, and continuously expand our knowledge to ensure our work remains relevant, refined, and responsible.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Values;