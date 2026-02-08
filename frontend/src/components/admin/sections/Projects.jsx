import React, { useEffect, useState } from 'react';
import api from '../../../api.js';
import Project from '../components/Project.jsx';
import NewProject from '../components/NewProject.jsx';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        api.get('projects/', { withCredentials: true }).then(res => setProjects(res.data))
          .catch(err => console.error(err));
    }, []);


    console.log(projects);
    return (
        <div className='projects'>
            {/* Header */}
            <div className='accordion-header mb-4 has-background-grey-lighter p-4' onClick={() => setOpen(!open)} style={{cursor: 'pointer', borderRadius: '6px'}}>
                <h2 className='is-size-4 has-text-black'>{open ? '➖ Close Add Project' : '➕ Add New Project'}</h2>
            </div>
            {/* Add a New Project */}
            {open && (
                <div className='accordion-content p-4 mb-6' style={{border: '1px solid #ddd', borderRadius:'6px'}}>
                    {/* You can replace this with your real UploadProject form */}
                    <h3 className="is-size-5 mb-3">Add a New Project</h3>
                    <NewProject />
                </div>
            )}
            {/* List of Projects */}
            <h2 className='title is-3 mt-5 has-text-black'>Projects</h2>
            {/* If No Projects */}
            {projects.length === 0 && <p>No Projects Found</p>}
            {/* Projects Listed */}
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;