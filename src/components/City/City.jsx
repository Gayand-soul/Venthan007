
import React from 'react'
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';


const City = () => {
     // Hämta bilder från "city.main" (huvudkategori)
     const cityMainImages = imageDatabase.city?.main?.thumbnails || [];

    return (

        <div className='min-h-screen'>
            <ImageGrid images = {cityMainImages} 
            category='city'
            project='main'/>
        </div>
    );
};

export default City;




