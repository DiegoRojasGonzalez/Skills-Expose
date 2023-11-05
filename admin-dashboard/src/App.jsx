import { BrowserRouter, Routes, Route } from "react-router-dom";

//layouts
import Slidebar from "./shared/layout/slidebar";

// Vistas
import Home from "./views/home";
import Analytics from "./views/analytics";
import Error from "./views/error";

// Componentes imports
//

function App() {
  return (
    <BrowserRouter>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen w-80 shadow-lg lg:block">
            <div className="h-full bg-white dark:bg-gray-700">
              <Slidebar />
            </div>
          </div>
          <div className="flex w-full flex-col md:space-y-4">
            <header className="z-40 flex h-16 w-full items-center justify-between"></header>
            <div className="h-screen overflow-auto px-4 pb-24 md:px-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<Analytics />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
