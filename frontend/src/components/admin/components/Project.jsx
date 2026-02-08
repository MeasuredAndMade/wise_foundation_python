import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const firstImage = project.images?.[0]?.image?.startsWith('http') ? project.images[0].image : `${apiUrl}${project.images[0].image}`;
    console.log(project)
    return (
        <Link to={`/project/${project.id}`} className='project-link'>
            <div className='box' style={{ backgroundColor: 'transparent'}}>
                <article className='media'>
                    {/* Project Image */}
                    <figure className='media-left'>
                        <p className='image is-128x128'>
                            {firstImage && <img src={firstImage} alt={project.title} style={{ objectFit: 'cover'}} />}
                        </p>
                    </figure>
                    {/* Content */}
                    <div className='media-content'>
                        <div className='content'>
                            <p>
                                <strong className='is-size-4 has-text-black'>
                                    {project.title}
                                </strong> &nbsp;- &nbsp;
                                {project.categories?.map((cat, i) => (
                                    <span key={cat.id} className='has-text-grey'>{cat.name}{i < project.categories.length - 1 && ', '}</span>
                                ))}
                                <br />
                                <span className='is-size-6 has-text-grey' >
                                    {project.description?.length > 140 ? project.description.slice(0, 140) + '...' : project.description}
                                </span>
                            </p>
                            {/* Tags */}
                            <div className='tags'>
                                {project.tags?.map(tag => (
                                    <span key={tag.id} className='tag cta-button'>{tag.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default Project;