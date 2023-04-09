import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => {
    setNav(!nav);
  };
  const navClose = () => {
    setNav(!nav);
  };
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black z-10">
      <section>
        <h1 className="text-2xl md:text-3xl font-signature" data-aos="zoom-in">
          Similoluwa Ayodele
        </h1>
      </section>
      <section>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={navClick}
          className="relative pr-4 cursor-pointer text-gray-500 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul
            onClick={navClick}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden md:"
          >
            {links.map(({ id, link }) => (
              <li
                className="px-4 py-6 cursor-pointer font-medium text-2xl text-gray-500 hover:scale-105 duration-200 capitalize"
                key={id}
              >
                <Link onClick={navClose} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </header>
  );
};

export default NavBar;
