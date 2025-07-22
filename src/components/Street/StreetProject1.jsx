
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';


const StreetProject1 = () => {

     // Hämta bilder från "street.project1"
        const streetProject1Images = imageDatabase.street?.project1?.thumbnails || [];

    return (
        <div className='min-h-screen'>
            <ImageGrid images = {streetProject1Images} 
            category='street'
            project='project1'/>
        </div>
    );
};

export default StreetProject1;