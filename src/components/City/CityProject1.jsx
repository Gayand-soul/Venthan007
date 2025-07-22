
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';


const CityProject1 = () => {
    // Hämta bilder från "city.project1"
     const cityProject1Images = imageDatabase.city?.project1?.thumbnails || [];

    return (
            <div className='min-h-screen'>
                <ImageGrid images = {cityProject1Images} 
                category='city'
                project='project1'/>
            </div>
        );
};

export default CityProject1;