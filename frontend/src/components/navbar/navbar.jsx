import React from "react";
import { NavLink } from "react-router-dom";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between px-2 py-3 bg-slate-200">
        <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:block lg:justify-start">
            <div
              className="text-4xl font-bold inline-block  py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              RECIPE.
              <div
                className="text-sm font-bold inline-block  py-2 whitespace-nowrap uppercase text-black"
                href="#pablo"
              >
                com
              </div>
            </div>
            <button
              className="text-black cursor-pointer text-4xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <DensityMediumIcon/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center  uppercase font-normal leading-snug text-black hover:opacity-75 aria-[current=page]:border-b-5 aria-[current=page]:border-cyan-600"
                  to="/"
                >
                  <span className="ml-2 text-lg">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center uppercase font-normal leading-snug text-black hover:opacity-75"
                  to="/recipes"
                >
                  <span className="ml-2 text-lg">Recipes</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-normal leading-snug text-black hover:opacity-75 cursor-pointer"
                  onClick={() => window.location.reload()}
                >
                  <span className="ml-2 text-lg">Refresh</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
