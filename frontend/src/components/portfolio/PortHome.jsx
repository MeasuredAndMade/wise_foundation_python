import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const PortHome = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch (`${apiUrl}/projects/`);
                if(!response.ok){
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, [apiUrl]);

    if(loading) return <p>Loading projects...</p>
    if(error) return <p className='has-text-danger'>{error}</p>
    return (
        <div className='container mb-5'>
            <h2 className='title is-3 has-text-centered has-text-grey-dark'>All Projects</h2>
            <div className='columns is-multiline'>
                {projects.map(project => (
                    <div key={project.id} className='column is-4'>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortHome;