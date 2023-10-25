import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Vistas
//

// Componentes imports
//

import ChangeTheme from "./shared/components/buttons/changeTheme";

function Header() {
  return (
    <>
      <ChangeTheme />
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/123132123123">Error page</Link>
      </div>
      <div>
        {" "}
        <Link to="/About">About</Link>
      </div>
    </>
  );
}

function Footer() {
  return <h1>footer</h1>;
}

function Home() {
  return (
    <>
      <h1>home</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
    </>
  );
}
function Error() {
  return <h1>404</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
