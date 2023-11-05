import { Link } from "react-router-dom";

function NavegationMenu() {
  return (
    <>
      <section className="bg-gray-300 w-full ">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-speedtest"
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
              <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
              <path d="M16 9l-4 4"></path>
            </svg>{" "}
            <Link to="/" className="">
              Home
            </Link>
          </div>
          <div>
            <image className=""></image>
            <Link to="/About">About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default NavegationMenu;
