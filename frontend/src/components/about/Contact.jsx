import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        message: '',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/contact/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        if(response.ok){
            navigate('/thank-you');
            setFormData({name: "", email: '', message: ''});
        } else {
            alert('Something went wrong.');
        }
    };
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
                <div className='column is-8 is-offset-2 is-underlined'>
                    <form onSubmit={handleSubmit}>
                        <div className='field mx-6 pr-6 '>
                            <label className='label has-text-grey-dark'>Name</label>
                            <div className='control'>
                                <input placeholder='Name' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='text' name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='field pr-6 mx-6'>
                            <label className='label has-text-grey-dark'>Email</label>
                            <div className='control'>
                                <input placeholder='Email' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='email' name='email' value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='field pr-6 mx-6'>
                            <label className='label has-text-grey-dark'>Tell Us More</label>
                            <div className='control'>
                                <textarea placeholder='Message' className='is-size-5 text-area has-background-grey-lighter textarea-width p-2'style={{ 'border': 'none', 'borderRadius': '5px', 'fontSize': '1rem'}} name='message' value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                        <div className='control py-3 pr-6 mx-6'>
                            <button className='button cta-button is-size-6 contact-button' type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;