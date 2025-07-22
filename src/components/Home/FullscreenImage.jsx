import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const FullscreenImage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    // Debug-utskrift för att kontrollera inkommande data
    console.log('FullscreenImage received:', { id, state });
    
    // Hämta bilder från state eller tom array som fallback
    const images = state?.images || [];
    
    const currentImage = state?.images.find(img => img.id.toString() === id.toString());
    
    // Hitta bildens index för navigering
    const currentIndex = currentImage 
        ? images.findIndex(img => img.id.toString() === id.toString())
        : -1;
        if (!currentImage) {
      console.error('Image not found for ID:', id, 'Available IDs:', state?.images.map(img => img.id));

        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-xl mb-4">No image found</p>
                <button 
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Go Back
                </button>
            </div>
        );
    }
    // Ytterligare säkerhetskontroll
    if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= images.length) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-xl mb-4">Invalid image index</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Go Back
          </button>
        </div>
      );
    }

    return (
        <div className="flex flex-col min-h-screen pt-16">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="max-w-full max-h-[calc(100vh-8rem)] flex justify-center">
                    <img 
                        src={currentImage.fullsizeSrc} 
                        alt={currentImage.alt} 
                        className="object-contain max-h-full max-w-full"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-image.jpg';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
// NYA PROPTYPES (om vi vill validera state-strukturen)
FullscreenImage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          fullsizeSrc: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
          ]).isRequired
        })
      ).isRequired,
      currentIndex: PropTypes.number,
      totalImages: PropTypes.number
    })
  }),
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default FullscreenImage;