import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Vistas
import Home from "./views/home";
import Error from "./views/error";
import About from "./views/about";
import Contact from "./views/contact";
import Services from "./views/services";
import Works from "./views/works";

// Componentes
import Header from "./shared/component/header";
import Footer from "./shared/component/footer";

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
  const scrollCounter = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      const deltaY = e.deltaY;
      const currentPath = window.location.pathname;

      const scrollThreshold = 5;

      if (deltaY > 0) {
        scrollCounter.current++;
        if (scrollCounter.current >= scrollThreshold) {
          if (currentPath === "/") navigate("/About");
          else if (currentPath === "/About") navigate("/Services");
          else if (currentPath === "/Services") navigate("/Works");
          else if (currentPath === "/Works") navigate("/Contact");
          scrollCounter.current = 0;
        }
      } else if (deltaY < 0) {
        scrollCounter.current++;
        if (scrollCounter.current >= scrollThreshold) {
          if (currentPath === "/Contact") navigate("/Works");
          else if (currentPath === "/Works") navigate("/Services");
          else if (currentPath === "/Services") navigate("/About");
          else if (currentPath === "/About") navigate("/");
          scrollCounter.current = 0;
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        \
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="Works" element={<Works />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />\
    </>
  );
}

export default App;
