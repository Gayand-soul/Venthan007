
import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import ImageGrid from '../../components/Home/ImageGrid';
import imageDatabase from '../../data/imageData'; 


const HomePage = () => {
    // Hämta bilder från welcome.main
  const welcomeImages = imageDatabase.welcome?.main?.thumbnails || [];

    return (
        <div className="min-h-screen">
            <ImageGrid images={welcomeImages} 
            category='welcome'
            project='main'
            />
            
        </div>
    );
};

export default HomePage;