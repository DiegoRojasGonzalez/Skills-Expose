import { BrowserRouter, Routes, Route } from "react-router-dom";
//views
import Home from './views/home';
import Error from './views/error';
import About from './views/about';
//layouts
import Header from './shared/layout/header';
import Footer from './shared/layout/footer';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App

