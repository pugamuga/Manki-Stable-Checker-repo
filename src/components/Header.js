import ape from "../media/ape.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import apeLogo from "../media/ape.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  const clickNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-md dark:bg-gray-900 shadow-md">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://t.me/MEV_manki" className="flex items-center">
            <img src={apeLogo} className="mr-3 h-6 sm:h-9 " alt="Manki" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Manki Stable Checker
            </span>
          </a>

          <div>
            {!nav ? (
              <MenuIcon
                onClick={clickNav}
                className="w-6 stroke-white md:hidden hover:opacity-50"
              />
            ) : (
              <XIcon
                onClick={clickNav}
                className="w-6 stroke-white md:hidden hover:opacity-50 "
              />
            )}
          </div>
          <div className="text-white md:flex hidden ">
            <Link
              to="/Manki-Stable-Checker-repo/"
              className="mx-4 hover:opacity-50"
            >
              Home
            </Link>
            <Link to="/example" className="mx-4 hover:opacity-50">
              Examples
            </Link>
            <Link to="/random" className="mx-4 hover:opacity-50">
              Random
            </Link>
          </div>
        </div>
        <div className={nav ? "text-white" : "hidden"}>
          <div className=" md:container grid md:grid-cols-1  mt-6 md:hidden">
            <Link
              to="/Manki-Stable-Checker-repo/"
              className="mx-auto p-2 w-[80%] flex justify-center hover:text-slate-400"
            >
              Home
            </Link>
            <Link
              to="/example"
              className="mx-auto p-2 w-[80%]  border-t-[1px] flex justify-center border-slate-600 hover:text-slate-400"
            >
              Examples
            </Link>
            <Link
              to="/random"
              className="mx-auto p-2 w-[80%]  border-t-[1px] flex justify-center border-slate-600 hover:text-slate-400"
            >
              Random
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Header };
