import { BrowserRouter, Routes, Route } from "react-router-dom";
//views
import Home from './views/home';
import Error from './views/error';
import About from './views/about';
import Contact from './views/contact';
//layouts
import Header from './shared/component/header';
import Footer from './shared/component/footer';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App

