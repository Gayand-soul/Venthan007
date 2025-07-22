

import React from 'react';
import ImageGrid from '../../components/Home/ImageGrid';
import imageDatabase from '../../data/imageData';

function StillProject2() {
   // Hämta bilder från "still.project2"
      const stillProject2Images = imageDatabase.still?.project2?.thumbnails || [];
    
  return (
    <div className='min-h-screen'>
        <ImageGrid images = {stillProject2Images } 
        category='still'
        project='project2'/>
    </div>
  );
};

export default StillProject2;