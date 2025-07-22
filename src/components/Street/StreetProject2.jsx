
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';



const StreetProject2 = () => {

    // Hämta bilder från "street.project2"
    const streetProject2Images = imageDatabase.street?.project2?.thumbnails || [];
    
    return (
        <div className='min-h-screen'>
            <ImageGrid images = {streetProject2Images} 
            category='street'
            project='project2'/>
        </div>
    );
};

export default StreetProject2;