
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';


const Still = () => {
    // Hämta bilder från "still.main" (huvudkategori)
         const stillMainImages = imageDatabase.still?.main?.thumbnails || [];


    return (
         <div className='min-h-screen'>
            <ImageGrid images = {stillMainImages} 
            category='still'
            project='main'/>

        </div>
    );    
    
};

export default Still;
