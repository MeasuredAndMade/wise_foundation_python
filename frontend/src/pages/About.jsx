import React, { useEffect } from 'react';
import AboutHero from '../components/about/Hero';
import StoryMission from '../components/about/StoryMission';
import Team from '../components/about/Team';
import Values from '../components/about/Values';
import Contact from '../components/about/Contact';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Measured & Made - Purposeful Web Development & Design Philosophy</title>
                <meta name='description' content='Learn the story behind Measured & Made. Discover a development approach rooted in clarity, craftsmanship, and thoughful problem-solving' />
            </Helmet>
            <AboutHero />
            <StoryMission />
            <Team />
            <Values />
            <Contact />
        </>
    );
};

export default About;