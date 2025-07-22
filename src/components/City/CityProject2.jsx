
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';

function CityProject2 () {
   // Hämta bilder från "city.project2"
       const cityProject2Images = imageDatabase.city?.project2?.thumbnails || [];

  return (
    <div className='min-h-screen'>
         <ImageGrid images = {cityProject2Images } 
         category='city'
          project='project2'/>
    </div>
  )
}

export default CityProject2;