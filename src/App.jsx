import { lazy, Suspense } from 'react';
import Navbar from './components/Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const PeoplePage = lazy(() => import ('./pages/People/PeoplePage'));
const StreetPage = lazy(() => import ('./pages/Street/StreetPage'));
const CityPage = lazy(()=> import ('./pages/City/CityPage'));
const StillPage = lazy(() => import('./pages/Still/StillPage'));
import { GetInTouch } from './components/GetInTouch/GetInTouch';
import PeopleProject1Page from './pages/People/PeopleProject1Page';
import PeopleProject2Page from './pages/People/PeopleProject2Page';
import StreetProject1Page from './pages/Street/StreetProject1Page';
import StreetProject2Page from './pages/Street/StreetProject2Page';
import CityProject1Page from './pages/City/CityProject1Page';
import CityProject2Page from './pages/City/CityProject2Page';
import StillProject1Page from './pages/Still/StillProject1Page';
import StillProject2Page from './pages/Still/StillProject2Page';
import FullscreenImagePage from './pages/Home/FullscreenImagePage';




function App() {
 

  return (

    <Router>
      <div className="app flex flex-col min-h-screen">
          {/* Navbar kommer alltid visas */}
          <Navbar />

          {/* Huvudinnehåll som ändras baserat på route */}
          <main className="flex-grow p-4 md:pl-[200px] mt-16">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/image/:id" element={<FullscreenImagePage />} />
                
                <Route path='/fullscreen/:category/:project/:id' element= {<FullscreenImagePage />}/>
                
                {/* Lägg till fler routes här senare */}
                
                <Route path="/people" element={<PeoplePage />} />
                <Route path='/people/project1' element= {<PeopleProject1Page />} />
                <Route path='/people/project2' element= {<PeopleProject2Page />} />
                
                <Route path="/street" element={<StreetPage />} />
                <Route path='/street/project1' element={<StreetProject1Page />} />
                <Route path='/street/project2' element={<StreetProject2Page />} />
                
                <Route path="/city" element={<CityPage />} />
                <Route path='/city/project1' element={<CityProject1Page />} />
                <Route path='/city/project2' element={<CityProject2Page />} />
                
                <Route path="/still" element={<StillPage />} />
                <Route path='/still/project1' element={<StillProject1Page />} />
                 <Route path='/still/project2' element={<StillProject2Page />} />

                <Route path="/getintouch" element={<GetInTouch />} />      
            </Routes>
          </main>
      </div> 

    </Router>
      

  
      
  )
}

export default App
