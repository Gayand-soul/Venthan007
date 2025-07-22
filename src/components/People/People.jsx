
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';


const People = () => {

     // Hämta bilder från "people.main" (huvudkategori)
     const peopleMainImages = imageDatabase.people?.main?.thumbnails || [];

    return(
        <div className='min-h-screen'>
            <ImageGrid images = {peopleMainImages} 
            category='people'
            project='main'/>
        </div>
    );
};

export default People;