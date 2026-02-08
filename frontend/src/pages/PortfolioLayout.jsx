import React, { useEffect } from 'react';
import PortHero from '../components/portfolio/PortHero.jsx'
import {Routes, Route, useParams, Outlet} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CategoryLinks from '../components/portfolio/CategoryLinks.jsx';
import Featured from '../components/portfolio/Featured.jsx';

const Portfolio = () => {
    const { category } = useParams();
    return (
        <>
            <Helmet>
                <title>Portfolio - Custom Websites & Digital Solutions by Measured & Made</title>
                <meta name='description' content='Explore our custom websites and digital solutions built by Measured & Made. Thoughtful design, clean engineering, and responsive expreiences.'/>
            </Helmet>
            <PortHero />
            <CategoryLinks />
            <hr className='has-background-grey-lighter' />
            <Outlet />
            <Featured />
        </>
    );
};

export default Portfolio;