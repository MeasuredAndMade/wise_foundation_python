import React from 'react';
import Hero from '../components/home/Hero';
import MultiSection from '../components/home/MultiSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    console.log('Home page loaded')
    return (
        <>
            <Helmet>
                <title>Measured & Made - Custom Web Development & Thoughtful Digital Design</title>
                {/* <title>TEST TITLE</title> */}
                <meta
                    name='description'
                    content='Measured & Made builds clean, responsive, human-centered websites with intentional engineering and modern design.'
                />

                {/* Open Graph */}
                <meta property="og:title" content="Measured & Made — Custom Web Development & Design" />
                <meta property="og:description" content="Thoughtful, responsive, human-centered digital solutions crafted with precision." />
                <meta property="og:image" content="/your-logo.png" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Hero />
            <MultiSection />
        </>
    );
};

export default Home;