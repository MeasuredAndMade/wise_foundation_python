import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const apiBase = import.meta.env.VITE_API_URL.replace('/api', '');
    const images = project.images || [];
    let mainImage = 'https://placehold.co/800x600?text=No+Image';
    if(images.length > 0) {
        const img = images[0].image;
        if(img.startsWith('http')) {
            mainImage = img;
        } else {
            mainImage = apiBase + img;
        }
    }
    return (
        <div className='card project-card mb-5 project-card has-background-grey-light'>
            <div className='card-image has-background-grey-lighter'>
                <figure className='image is-16x9'>
                    <a href={`/project/${project.id}`}><img src={mainImage} alt={project.title} /></a>
                </figure>
            </div>
            
            <div className='card-content has-background-grey-light'>
                <Link to={`/project/${project.id}`} className='title is-4 has-text-grey-dark'>
                    {project.title} 
                </Link>
                {project.categories?.length > 0 && (
                    <span className='has-text-grey ml-2'>
                        - {project.categories.map(cat => cat.name).join(', ')}
                    </span>
                )}
                {project.creators?.length > 0 && (
                    <p className='is-size-6 mb-3 mt-2 has-background-grey-light has-text-grey-dark'>
                        <strong className='has-text-grey-dark'>Created by:</strong>{" "}
                        {project.creators.map(c => c.name).join(', ')}
                    </p>
                )}
                <p className='subtitle is-6 has-text-grey mt-4'>
                    {project.description?.length > 140 ? project.description.slice(0, 140) + '...' : project.description}
                </p>
            </div>
            
        </div>
    );
};

export default ProjectCard;