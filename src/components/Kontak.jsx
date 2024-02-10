import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import '../assets/Skill.css';
import { useSpring, animated } from 'react-spring';

const Kontak = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Skill', link: '/skill' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Project', link: '/project' },
  ];

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

  const fadeOuUp = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { duration: 1000 },
  });

  return (
    <div className="w-full fixed top-0 left-0 md:overflow-hidden overflow-y-auto max-h-screen" style={{ position: 'relative' }}>
      <div className='md:flex items-center justify-center bg-white py-6 md:px-10 px-7 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-2 md:hidden w-7 h-7 cursor-pointer'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-500px]'}`}>
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
              <Link
                to={link.link}
                className={`text-black duration-500 transition-all border-b border-transparent hover:border-gray-700 border-b-2 px-2 py-1 `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='setengah'/>
    <div className="w-full h-screen flex items-center justify-center">
      <animated.div style={fadeOuUp} className='w-[600px] h-[430px] rounded shadow-xl bg-white mb-20'>
        {/* Contact Information */}
        <div className='grid grid-cols-2 gap-4 p-6 items-center'>
          {/* Centered and slightly larger photo */}
          <img src="/images/ayu02.png" alt='Your Photo' className='w-48 h-38 rounded-full col-span-2 mb-4 mx-auto' />
          <p className='text-lg text-center font-semibold mb-4 col-span-2'>Contact Information</p>
          {/* WhatsApp link */}
          <a href='https://wa.me/62895704292653' target='_blank' rel='noopener noreferrer' className='flex items-center text-green-500 hover:underline mb-2 ml-20'>
            <img src="/images/whatsapp.png" alt='WhatsApp Icon' className='w-6 h-6 mr-2' />
            WhatsApp
          </a>
          {/* LinkedIn link */}
          <a href='https://www.linkedin.com/in/ayu-lintang' target='_blank' rel='noopener noreferrer' className='flex items-center text-blue-500 hover:underline mb-2 ml-20'>
            <img src="/images/linkedin.png" alt='LinkedIn Icon' className='w-6 h-6 mr-2' />
            LinkedIn
          </a>
          {/* GitHub link */}
          <a href='https://github.com/AyuLintang03' target='_blank' rel='noopener noreferrer' className='flex items-center text-black hover:underline mb-2 ml-20'>
            <img src="/images/github.png" alt='GitHub Icon' className='w-6 h-6 mr-2' />
            GitHub
          </a>
          {/* Instagram link */}
          <a href='https://www.instagram.com/alinp04/?next=%2F' target='_blank' rel='noopener noreferrer' className='flex items-center text-pink-500 hover:underline mb-2 ml-20'>
            <img src="/images/instagram.png" alt='Instagram Icon' className='w-6 h-6 mr-2' />
            Instagram
          </a>
          {/* Gmail link */}
          <a href='mailto:ayulintang95@gmail.com' className='flex items-center text-red-500 hover:underline ml-20'>
            <img src="/images/gmail.png" alt='Gmail Icon' className='w-6 h-6 mr-2' />
            Gmail
          </a>
        </div>
      </animated.div>
      <div onClick={() => setOpen(!open)} className='absolute right-8 top-2 md:hidden w-7 h-7 cursor-pointer'>
        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
    </div>
    </div>
  );
};

export default Kontak;
