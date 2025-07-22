
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';





const ImageGrid = ({ images, category = 'welcome', project = 'main' }) => { 
  

   // Dela upp bilderna i två kolumner=Beräkna mittpunkten för att dela upp bilderna
  const midPoint = Math.ceil(images.length / 2);
  const [column1, column2] = [images.slice(0, midPoint), images.slice(midPoint)];

  const navigate = useNavigate();

  const handleImageClick = (image, index) => {
    navigate(`/fullscreen/${category}/${project}/${image.id}`, {
      state: {
        images,
        category,
        project,
        selectedImageId: image.id
        
      }
    });
    console.log('Selected image:', {
    id: image.id,
    calculatedIndex: images.findIndex(img => img.id === image.id),
    passedIndex: index
});
  };


    return (
        <div className="flex flex-col md:flex-row justify-center gap-[0.455rem] md:gap-1 mt-16 md:mt-[70px] px-4 md:px-0">

            {/* Kolumn 1 */}
            <div className="flex flex-col gap-[0.575rem] md:gap-2.0 w-full md:w-auto md:max-w-[400px] md:justify-end md:items-end md:ml-[250px]">
                {column1.map((image, index) => (
                    <div 
                        key={`col1-${image.id}`} 
                        className="group"
                        onClick={() => handleImageClick(image, index)}
                        aria-label={`Visa ${image.alt}`}> 
                        <img
                        
                        src={image.thumbnailSrc} 
                        alt={image.alt} 
                        loading="lazy"
                        className="w-full h-auto cursor-pointer rounded-lg md:rounded-none"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.error('Failed to load image:', image.thumbnailSrc);
                        }}
                        />
                    </div>
                ))}
            </div>

            {/* Kolumn 2 */}
            <div className="flex flex-col gap-[0.575rem] md:gap-2.0 w-full md:w-auto md:max-w-[400px] md:justify-end md:items-end md:ml-2 mt-2 md:mt-0">
                {column2.map((image, index) => (
                    <div 
                        key={`col2-${image.id}`} 
                        className="group"
                        onClick={() => handleImageClick(image, midPoint + index)}
                        aria-label={`Visa ${image.alt}`}>
                        <img 
                        src={image.thumbnailSrc} 
                        alt={image.alt} 
                        loading="lazy"
                        className="w-full h-auto cursor-pointer rounded-lg md:rounded-none"
                        
                        />
                    </div>
                ))}
            </div>

        </div>
    );

};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailSrc: PropTypes.string.isRequired,
      fullsizeSrc: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      id:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    })
  ).isRequired,
  category: PropTypes.string,
  project: PropTypes.string
};


export default ImageGrid;