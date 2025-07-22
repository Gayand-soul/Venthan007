
import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { MdMenu, MdClose} from 'react-icons/md';



const NavbarMenu = [
    {
        id: 1,
        title: "Welcome",
        link:"/",
        subItems: null //Ingen undermeny
    },
    {
        id: 2,
        title: "People",
        link:"/people",
        subItems: [
            {
                id:21,
                title: "Project 1",
                link:"/people/project1"
            },
            {
                id:22,
                title: "Project 2",
                link:"/people/project2"
            }

        ]
    },
    {
        id: 3,
        title: "Street",
        link:"/street",
        subItems: [
             {
                id:31,
                title: "Project 1",
                link:"/street/project1"
            },
            {
                id:32,
                title: "Project 2",
                link:"/street/project2"
            }
        ]
    },
    {
        id: 4,
        title: "City",
        link:"/city",
        subItems: [
             {
                id:41,
                title: "Project 1",
                link:"/city/project1"
            },
            {
                id:42,
                title: "Project 2",
                link:"/city/project2"
            }
        ]
    },
    {
        id: 5,
        title: "Still",
        link:"/still",
        subItems: [
             {
                id:51,
                title: "Project 1",
                link:"/still/project1"
            },
            {
                id:52,
                title: "Project 2",
                link:"/still/project2"
            }
        ]
    },
     {
        id: 6,
        title: "Get In Touch",
        link:"/getintouch",
        subItems: null //Ingen undermeny
    }
];
const Navbar = () => {
    const [openMenus, setOpenMenus] = useState([]);
    const location = useLocation(); // För att kolla aktuell route= useLocation-hook
    const navigate = useNavigate();
     const { id } = useParams();
    const [ isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // FÖRBÄTTRAD HANTERING AV PREV/NEXT-KNAPPAR
    const isFullscreenImagePage = location.pathname.startsWith('/fullscreen/');

    // Säker hämtning av state med fallback till tomt objekt
    const state = location.state || {};
    const { images = [], category = '', project = '' } = state;
    const hasMultipleImages = images.length > 1;

    // Säker funktion för att hitta bildindex
    const getCurrentIndex = () => {
        if (!id || !images || images.length === 0) return -1;
        
        try {
            return images.findIndex(img => 
                img?.id !== undefined && 
                img.id.toString() === id.toString()
            );
        } catch (error) {
            console.error('Error finding image index:', error);
            return -1;
        }
    };
    // Navigeringsfunktioner
    const goToPrev = () => {
      if (!hasMultipleImages) return;

        const currentIndex = images.findIndex(img => img.id.toString() === id.toString());
          if (currentIndex === -1) return;
        
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const prevImage = images[prevIndex];

        navigate(`/fullscreen/${category}/${project}/${prevImage.id}`, {
            state: {
                ...state,
                selectedImageId: prevImage.id
            },
            replace: true
        });
    };



    const goToNext = () => {
        if (!hasMultipleImages) return;
        
        try {
            const currentIndex = getCurrentIndex();
            if (currentIndex === -1) return;
            
            const nextIndex = (currentIndex + 1) % images.length;
            const nextImage = images[nextIndex];
             if (!nextImage?.id) return;

            navigate(`/fullscreen/${category}/${project}/${nextImage.id}`, {
                state: {
                    ...state,
                    selectedImageId: nextImage.id
                },
                replace: true
            });
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };

     // SPÅRA FÖNSTERSTORLEK FÖR RESPONSIVITET..
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // AUTOMATISKT STÄNG MENY PÅ DESKTOP...
      useEffect(() => {
    if (windowWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
    }, [location.pathname, windowWidth]);

   // Hantera undermenyer
    const toggleMenu = (menuId, link) => {
        navigate(link);
        setOpenMenus(prev => 
            prev.includes(menuId) 
                ? prev.filter(id => id !== menuId) 
                : [...prev, menuId]
        );
    };

     // Kolla om en huvudkategori är aktiv (inklusive dess undermenyer)
     const isParentActive = (item) => {
    return (
      location.pathname === item.link || 
      (item.subItems && item.subItems.some(subItem => location.pathname === subItem.link))
        );
    };


return (
        <>
            {windowWidth < 1024 && (
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="fixed top-4 left-4 z-50 text-gray-800 hover:text-gray-500 focus:outline-none bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-md shadow-lg"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
                </button>
            )}
    
            <div className={`fixed left-0 top-0 h-full w-64 bg-white transition-all duration-300 ease-in-out z-40
                ${windowWidth < 1024 ? (isMobileMenuOpen ? 'translate-x-0 pt-16' : '-translate-x-full lg:translate-x-0 lg:pt-0') : 'translate-x-0'}`}>

                <section className="p-4 h-full overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-6 text-left">Venthan Herold</h1>

                    <nav className="flex flex-col space-y-2">
                        {NavbarMenu.map((item) => (
                            <div key={item.id} className="w-full">
                                {item.subItems ? (
                                    <>
                                        <NavLink
                                            to={item.link}
                                            className={({ isActive }) => `w-full text-left p-2 rounded transition-all flex justify-between items-center no-underline text-gray-800 ${
                                                isActive || isParentActive(item) ? 'font-bold' : ''
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleMenu(item.id, item.link);
                                            }}
                                        >
                                            {item.title}
                                            <svg 
                                                className={`w-4 h-4 transform transition-transform ${
                                                    openMenus.includes(item.id) ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </NavLink>
                                        
                                        <div className={`${openMenus.includes(item.id) ? 'block' : 'hidden'}`}>
                                            <div className="ml-4">
                                                {item.subItems.map((subItem) => (
                                                    <NavLink 
                                                        key={subItem.id}
                                                        to={subItem.link}
                                                        className={({isActive}) => 
                                                            `block p-2 hover:bg-gray-100 rounded transition-all no-underline text-gray-800 ${
                                                                isActive ? 'font-bold' : ''
                                                            }`
                                                        }
                                                    >
                                                        {subItem.title}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <NavLink 
                                        to={item.link}
                                        className={({isActive}) => 
                                            `block p-2 hover:bg-gray-100 rounded transition-all no-underline text-gray-800 ${
                                                isActive ? 'font-bold' : ''
                                            }`
                                        }
                                        end
                                    >
                                        {item.title}
                                    </NavLink>
                                )}
                            </div>
                        ))}

                        {/* PREV/NEXT-knappar */}
                        {isFullscreenImagePage && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex gap-2">
                                    <button 
                                        onClick={goToPrev}
                                        className={`flex-1 px-4 py-2 rounded transition-colors ${
                                            hasMultipleImages 
                                                ? 'bg-gray-500 text-white hover:bg-gray-600'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                        disabled={!hasMultipleImages}
                                        aria-label="Previous image"
                                    >
                                        PREV
                                    </button>
                                    <button 
                                        onClick={goToNext}
                                        className={`flex-1 px-4 py-2 rounded transition-colors ${
                                            hasMultipleImages 
                                                ? 'bg-gray-500 text-white hover:bg-gray-600'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                        disabled={!hasMultipleImages}
                                        aria-label="Next image"
                                    >
                                        NEXT
                                    </button>
                                </div>
                                {hasMultipleImages && (
                                    <div className="text-center mt-2 text-sm text-gray-600">
                                        {getCurrentIndex() !== -1 
                                            ? `${getCurrentIndex() + 1} of ${images.length}`
                                            : 'Image position unavailable'}
                                    </div>
                                )}
                            </div>
                        )}
                    </nav>
                </section>
            </div>
        </>
    );
};

export default Navbar;