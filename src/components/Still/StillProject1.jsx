
import React from 'react';
import ImageGrid from '../Home/ImageGrid';
import imageDatabase from '../../data/imageData';

function StillProject1() {

   // Hämta bilder från "still.project1"
    const stillProject1Images = imageDatabase.still?.project1?.thumbnails || [];
  


  return (
    <div className='min-h-screen'>
             <ImageGrid images = {stillProject1Images } 
             category='still'
            project='project1'/>
    </div>
  )
}

export default StillProject1;