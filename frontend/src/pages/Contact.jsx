import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async'
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
        <>
            <Helmet>
                <title>Contact Measured & Made - Start Your Custom Web Project</title>
                <meta name="description" content='Ready to build something meaningful? Contact Measured & Made for custom web development, responsive design and thoughtful digital solutions' />
            </Helmet>
            <hr className='has-background-grey-lighter' />
            <div className='container my-6 has-text-centered pt-4'>
                <div className='title is-1 contact-text'>Start a Conversation</div>
                <div className='subtitle is-4 contact-text-softer mt-5'>Tell us about your project or ask a question. <br />We are here to listen and collaborate.</div>
            </div>
            <hr className='has-background-grey-lighter' />
            <div className='container my-6'>
                <div className='columns '>
                    <div className='column is-two-thirds ' style={{ "border-right": "1px solid black"}}>
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
                                    <textarea placeholder='Message' className='is-size-5 text-area has-background-grey-lighter textarea-width p-2'style={{ 'border': 'none', 'border-radius': '5px', 'font-size': '1rem'}} name='message' value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                            </div>
                            <div className='control py-3 pr-6 mx-6'>
                                <button className='button cta-button is-size-6 contact-button' type='submit'>Send Message</button>
                                {/* <a className='button is-size-6 cta-button contact-button '>Contact Us</a> */}
                            </div>
                        </form>
                    </div>
                    <div className='column ml-6'>
                        <div className='subtitle contact-text is-4'>Prefer Email?</div>
                        <div className='is-size-5'><a href='mailto:contact@measured-and-made.com?subject=Project Inquiry' className='contact-text'>contact@measured-and-made.com</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;