import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import PortfolioText from './PortfolioText';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

const Header = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Skill', link: '/skill' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Project', link: '/project' },
  ];

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  const fadeOuUp = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { duration: 1000 },
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (open && window.innerWidth <= 600) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [open]);

  return (
    <div className={`shadow-md w-full fixed top-0 left-0`}>
      <div className='md:flex items-center justify-center bg-white py-6 md:px-10 px-7 backdrop-filter backdrop-blur-lg bg-opacity-30 '>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-2 md:hidden w-7 h-7 cursor-pointer'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-500px]'}`}>
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7 font-semibold relative' key={link.name}>
              <Link
                to={link.link} // Menggunakan Link dan properti to
                className={`text-black duration-500 transition-all border-b border-transparent hover:border-gray-700 border-b-2 px-2 py-1 ${
                  link.name === 'Home' ? 'marker bg-slate-700 h-1 w-4 rounded-full text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='overflow-y-auto max-h-screen'>
        <div className="flex flex-col md:flex-row mb-8">
          <div className={`flex flex-col flex-grow `}>
            <div className="mb-6 md:mb-4">
              <PortfolioText />
            </div>
            <div className='flex flex-wrap flex-row md:mb-0 mb-4'>
                  <animated.div style={fadeIn}>
                    <Link
                      to='/public/images/CV - Ayu Lintang Pangestu 3.pdf' // Menggunakan Link dan properti to
                      download='Resume - Ayu Lintang Pangestu.pdf'  
                      className='btn bg-black hover:bg-slate-600 hover:text-black text-white font-semibold px-4 py-2 rounded duration-500 mt-2 md:mt-0 md:mr-auto md:ml-7 md:w-auto w-full'
                    >
                      Resume
                    </Link>
                  </animated.div>
                  <animated.div style={fadeIn}>
                    <Link
                      to='/kontak' // Menggunakan Link dan properti to
                      className='btn bg-gray-300 hover:bg-slate-600 hover:text-white text-black font-semibold px-4 py-2 rounded duration-500 mt-2 md:mt-0 md:mr-auto md:ml-7 md:w-auto w-full'
                    >
                      Contact
                    </Link>
                  </animated.div>
            </div>
          </div>
          <animated.div style={fadeOuUp}>
            <img src='/images/ayu2.png' className="ml-4 w-[2200px]" alt="Avatar" />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
