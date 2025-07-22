
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase  from '../../data/imageData';


const PeopleProject1 = () => {

    

    // Hämta bilder från "people.project1"
    const peopleProject1Images = imageDatabase.people?.project1?.thumbnails || [];


    return (
        <div className='min-h-screen'>
            <ImageGrid images = {peopleProject1Images } 
            category='people'
            project='project1'/>
        </div>
    );
};

export default PeopleProject1;




