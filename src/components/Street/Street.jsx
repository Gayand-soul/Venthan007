
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';

const Street = () => {

    // Hämta bilder från "street.main" (huvudkategori)
    const streetMainImages = imageDatabase.street?.main?.thumbnails || [];
    

    return (
        <div className='min-h-screen'>
            <ImageGrid images={streetMainImages} 
            category='street'
            project='main'/>

        </div>
    );
};

export default Street;