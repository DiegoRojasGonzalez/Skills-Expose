
// Vistas
import Home from './views/home';
import Error from './views/error';
import About from './views/about';
import Contact from './views/contact';
import Services from './views/services';

// Componentes
import Header from './shared/component/header';
import Footer from './shared/component/footer';


// Resto del código...

import  { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Resto del código...
function App() {
  return (
    <BrowserRouter>
      <>
        <AppContent />
      </>
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = (e) => {
      const deltaY = e.deltaY;
      const currentPath = window.location.pathname;

      if (deltaY > 0) {
        if (currentPath === '/') navigate('/About');
        else if (currentPath === '/About') navigate('/Contact');
        else if (currentPath === '/Contact') navigate('/Services');
        // Y así sucesivamente según tus necesidades
      } else if (deltaY < 0) {
        if (currentPath === '/Services') navigate('/Contact');
        else if (currentPath === '/Contact') navigate('/About');
        else if (currentPath === '/About') navigate('/');
        // Y así sucesivamente según tus necesidades
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;





