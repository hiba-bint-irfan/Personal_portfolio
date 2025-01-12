import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNavAndScroll = (target) => {
    setNav(false); // Close the mobile nav
    setTimeout(() => {
      // Trigger smooth scrolling after a small delay
      document.getElementById(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const navItems = [
    { id: 1, text: 'Home', href: 'home' },
    { id: 2, text: 'About', href: 'about' },
    { id: 3, text: 'Experience', href: 'experience'},
    { id: 4, text: 'Projects', href: 'projects' },
    { id: 5, text: 'Skills', href: 'skills' },
    { id: 6, text: 'Contact', href: 'contact' },
  ];

  return (
    <div className='bg-gray-950 flex justify-between items-center h-24 max-w mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-blue-400'>HIBA IRFAN.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='p-4 text-blue-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-white'>
            <Link to={item.href} smooth={true} duration={500} offset={-70}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden z-20'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
            : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 z-10'
        }`}
      >
        <h1 className='w-full text-3xl font-bold text-blue-400 m-4'>HIBA IRFAN.</h1>
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b rounded-xl text-blue-400 hover:text-white cursor-pointer transition ease-out border-gray-600'>
            <span onClick={() => closeNavAndScroll(item.href)} className='cursor-pointer'>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
