import React from 'react';
import { Link, Links, useParams } from 'react-router-dom';
import '../../css/style.css'

const CategoryLinks = () => {
    const { category = ''} = useParams();
    const links = [
        { name: 'All Projects', path: '' },
        { name: 'Websites', path: 'websites' },
        { name: 'Designs', path: 'designs' },
        { name: 'Branding', path: 'branding' },
        { name: 'In Progress', path: 'inProgress' },
    ];
    const linksLength = links.length

    const isActive = (linkPath) => {
        if(!category && linkPath === '') return true;
        return category === linkPath;
    }
    return (
        <div className='container'>
            <div className='columns'>
                <div className='column is-8 is-offset-2 has-text-centered'>
                    <nav className='subtitle category-text'>
                        {links.map((link, i) => (
                            <React.Fragment key={i}>
                                <Link to={`/portfolio/${link.path}`} className={`category-link ${isActive(link.path) ? 'is-active' : ''}`}>{link.name}</Link>
                                {i < linksLength - 1 && ' | '}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CategoryLinks;