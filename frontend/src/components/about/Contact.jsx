import React from 'react';

const Contact = () => {
    return (
        <div className='container my-2'>
            <div className='columns'>
                <div className='column is-4'>
                    <hr className='team-hr'/>
                </div>
                <div className='column is-4'>
                    <h2 className='title is-size-4 mt-2 is-uppercase team-title has-text-centered'>Get In Contact</h2>
                </div>
                <div className='column is-4'>
                    <hr className='team-hr'/>
                </div>
            </div>
            <div className='columns'>
                <div className='column is-6 is-offset-3 has-text-centered'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                            <input placeholder='Name' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='text' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control'>
                            <input placeholder='Email' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='email' />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Tell Us More</label>
                        <div className='control'>
                            <textarea placeholder='Message' className='text-area has-background-grey-lighter textarea-width p-2'style={{ 'border': 'none', 'borderRadius': '5px', 'fontSize': '1rem'}}></textarea>
                        </div>
                    </div>
                    <div className='control py-3'>
                        <a className='button is-size-6 cta-button contact-button ' href='/contact'>Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;