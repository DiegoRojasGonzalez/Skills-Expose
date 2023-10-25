import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/Services",
      name: "Services",
    },
    {
      path: "/Works",
      name: "Works",
    },
    {
      path: "/Contact",
      name: "Contact",
    },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="">
        {isMenuOpen && (
          <div
            className="animate-fade-down animate-once animate-duration-700 animate-ease-in-out
          fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="absolute top-0 right-0  px-7 py-3">
              <button
                onClick={toggleMenu}
                className="text-3xl text-white focus:outline-none "
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-white">
              {routes.map((route, index) => (
                <Link
                  key={index}
                  className="my-2 text-white text-center"
                  to={route.path}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="  mx-auto flex h-16 max-w-screen-xl items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex flex-1 items-center justify-center">
            <nav aria-label="Global">
              <ul className=" flex items-center gap-6 text-sm">
                {routes.map((route, index) => (
                  <li key={index}>
                    <Link key={index} className="my-2" to={route.path}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex justify-end w-full">
            <button
              onClick={toggleMenu}
              className=" block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
