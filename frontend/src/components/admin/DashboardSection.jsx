import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from './sections/Projects';
import Media from './sections/Media';
import General from './sections/General';

const DashboardSection = () => {
    const {section } = useParams();
    // return (
    //     
    // );
    switch (section) {
        case 'projects':
            return <Projects />
        case 'media':
            return <Media />
        case 'general':
            return <General />
        default:
            return (
                <div className='has-text-centered'>
        //         <h2 className='has-text-black is-size-2 mx-6'>Unknown Section Selected: {section}</h2>
        //     </div>
            )
    }
};

export default DashboardSection;