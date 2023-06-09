import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, toggle } from "../assets/index";
import { styles } from "../styles";

const Navbar = () => {
    const [active, setActive] = useState("");
    return (
      <nav
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-30 black nav-bg`}
      >
        <div className='w-full flex justify-between items-center max-w-screen-lg mx-auto '>
          <div className='flex flex-row flex-nowrap justify-start items-center gap-32 '>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt='logo'
                className='w-[12em] h-auto object-contain'
              />
              {/* &nbsp; */}
            </Link>
  
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-hover" : "text-primary"
                  } hover:text-hover text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
  
          <div className='relative z-21 flex flex-row gap-16'>
            <img src={toggle} className='w-32' />
            <button className='gradient-mask hover:bg-blue-700 text-[1.4rem] text-primary font-poppins font-semibold py-2 px-12 rounded-sm cursor-pointer'>
              Login
            </button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar