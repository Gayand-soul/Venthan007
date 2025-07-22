
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import FullscreenImage from '../../components/Home/FullscreenImage';
import Navbar from '../../components/Layout/Navbar';
import './Fullscreen.css';


const FullscreenImagePage = () => {
    
    const { category, project, id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const images = state?.images || [];
    const currentIndex = parseInt(id, 10);

    //Pilen på bilden position och riktning
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
    const [cursorDirection, setCursorDirection] = React.useState('▶');

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        navigate(`/fullscreen/${category}/${project}/${nextIndex}`, { 
            state: { images },
            replace: true
        });
    };
    const goToPrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        navigate(`/fullscreen/${category}/${project}/${prevIndex}`, { 
            state: { images },
            replace: true
        });
    };

     // NY FUNKTION: Hantera klick på bilden
    const handleImageClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const width = rect.width;

        // Bestäm riktning baserat på klickposition
        if (xPos < width / 2) {
            goToPrev(); // Vänster klick = föregående bild
        } else {
            goToNext(); // Höger klick = nästa bild
        }
    };

    // TILLÄGG: HANDTERA MUSRÖRELSE FÖR ATT UPPDATERA CURSOR=musrörelse på bilden
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left;
        const width = rect.width;
        
        setCursorPosition({ x: e.clientX, y: e.clientY });
        setCursorDirection(xPos < width / 2 ? '◀' : '▶');
    };

    return (
        <div className="fullscreen-page">
            <Navbar
                isFullscreenImagePage={true}
                goToNext={goToNext}
                goToPrev={goToPrev}
                hasMultipleImages={images.length > 1}
            />

            {/* DIV FÖR ATT FÅNGA MUSEVENTS OCH VISA CURSOR */}
            <div 
                className="image-area-container"
                onClick={handleImageClick}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {
                    const cursor = document.getElementById('custom-cursor');
                    if (cursor) cursor.style.display = 'flex';
                }}
                onMouseLeave={() => {
                    const cursor = document.getElementById('custom-cursor');
                    if (cursor) cursor.style.display = 'none';
                }}
            >
                <FullscreenImage
                    category={category}
                    project={project}
                    id={id}
                    imagesFromState={state?.images}
                />

                {/* TILLÄGG: CURSOR ELEMENT */}
                <div 
                    className="custom-cursor" 
                    id="custom-cursor"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                    }}
                >
                    {cursorDirection}
                </div>
            </div>
        </div>
    );
};

export default FullscreenImagePage;