import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Featured = () => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const response = await fetch(`${apiUrl}/featured_project/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch featured project");
                }
                const data = await response.json();
                setProject(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFeatured();
    }, [apiUrl]);

    if (loading) return <p>Loading featured project...</p>
    if (error) return <p className='has-text-danger'>{error}</p>
    if (!project) return null
    return (
        <div className='container my-6'>
            <h2 className='title is-3 has-text-centered has-text-grey-dark'>Featured Project</h2>
            <div className='columns'>
                <div className='column is-6 is-offset-3'>
                    <ProjectCard project={project} />
                </div>
            </div>
        </div>
    );
};

export default Featured;