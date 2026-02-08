import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Helmet } from 'react-helmet-async';

const CATEGORY_MAP = {
    websites: 1,
    designs: 2, 
    branding: 3, 
    inProgress: 4,
}

const CATEGORY_SEO = {
    websites: {
        title: "Website Projects — Custom Web Development",
        description:
            "Explore custom websites crafted with clean engineering, responsive layouts, and thoughtful design.",
    },
    designs: {
        title: "Design Projects — UI/UX & Visual Design",
        description:
            "A curated selection of design work including UI/UX, layout systems, and visual identity pieces.",
    },
    branding: {
        title: "Branding Projects — Identity & Visual Systems",
        description:
            "Brand identity systems crafted with intention, clarity, and cohesive visual storytelling.",
    },
    inProgress: {
        title: "In Progress — Current Projects & Workflows",
        description:
            "A look at what Measured & Made is currently building. New projects are always underway.",
    },
};


const PortfolioCategory = () => {
    const { category } = useParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const isInProgress = category === 'inProgress';

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);

            const categoryId = CATEGORY_MAP[category];
            const url = `${apiUrl}/projects/?category=${categoryId}`;

            const response = await fetch(url);
            const data = await response.json();

            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, [category, apiUrl]);

    if (loading) return <p>Loading...</p>
    return (
        <>
            {category && ( <Helmet> <title>{CATEGORY_SEO[category].title}</title> <meta name="description" content={CATEGORY_SEO[category].description} /> </Helmet> )}

            <div className='container mb-5'>
                <h2 className='title is-3 has-text-centered has-text-grey-dark'>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                {projects.length === 0 && !isInProgress && (
                    <p className='has-text-centered fade-in has-text-grey-dark mt-5'>Sorry, We haven't created anything like that yet!</p>
                )}
                {projects.length === 0 && isInProgress && (
                    <p className='has-text-centered fade-in has-text-grey-dark mt-5'>Sorry, We don't have any current projects! Let's work on yours!</p>
                )}
                {projects.length > 0 && (
                    <div className='columns fade-in is-multiline'>
                        {projects.map((project) => (
                            <div key={project.id} className='column is-4'>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default PortfolioCategory;