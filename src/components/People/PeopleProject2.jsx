
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase  from '../../data/imageData';


const PeopleProject2 = () => {
    // Hämta bilder från "people.project2"
        const peopleProject2Images = imageDatabase.people?.project2?.thumbnails || [];
    return (
        <div className='min-h-screen'>
             <ImageGrid images = {peopleProject2Images } 
             category='people'
            project='project2'/>
        </div>
    );
};

export default PeopleProject2;