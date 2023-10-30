import { Link } from "react-router-dom";
import { logo, logo_white, logo_black, menu } from "../assets";
import { leftNavLinks, rightNavLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full sm:grid sm:grid-cols-[3fr,1fr,3fr] items-center py-5 fixed top-0 right-0 z-20 bg-white">
      <ul className="w-full hidden sm:grid sm:grid-cols-3">
        {leftNavLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-black" : "text-warm-gray"
              } font-medium hover:font-bold hidden sm:grid`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex sm:justify-center items-center sm:w-auto">
        <Link to="/" className="flex-grow sm:flex-grow-0">
          <div
            className="flex justify-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo_black}
              alt="logo"
              className="object-contain w-12 h-12 cursor-pointer hover:scale-125"
            />
          </div>
        </Link>
        <div
          className="relative sm:hidden flex justify-end"
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <img
            src={menu}
            alt="menu"
            className="object-contain w-8 h-8 cursor-pointer hover:scale-125"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="absolute right-0 mt-8 divide-y divide-gray-100 rounded-lg w-44 shadow z-10 bg-black">
            <ul className={`${isOpen ? "text-sm text-white" : "hidden"}`}>
              {leftNavLinks.concat(rightNavLinks).map((link, index, array) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      index !== array.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <a
                      href={`#${link.id}`}
                      className="block w-full h-full py-4 px-3"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <ul className="w-full sm:grid sm:grid-cols-3 place-items-end">
        {rightNavLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-black" : "text-warm-gray"
              } font-medium hover:font-bold hidden sm:grid`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
