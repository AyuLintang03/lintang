import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useSpring, animated } from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import '../assets/Skill.css';

const Skill = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Skill', link: '/skill' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Project', link: '/project' },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  const skills = [
    { title: 'React Js', image: '/images/react js.svg' },
    { title: 'Tailwind', image: '/images/tailwind-css.png' },
    { title: 'CSS', image: '/images/CSS.png' },
    { title: 'HTML', image: '/images/html.png' },
    { title: 'Javascript', image: '/images/javascript.png' },
    { title: 'PHP', image: '/images/php.png' },
    { title: 'Laravel', image: '/images/laravel.png' },
    { title: 'Figma', image: '/images/figma.png' },
    /*{ title: 'UI/UX', image: '/images/UIUX.png' },
    { title: 'Photoshop', image: '/images/photoshop.png' },
    { title: 'Illustator', image: '/images/illustrator.png' },*/
  ];

  // Create individual animations for each skill
  const skillAnimations = skills.map((_, index) =>
    useSpring({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateY(-50px)' },
      config: { duration: 500 },
      delay: index * 100, // Delay each animation by 100ms
    })
  );

  return (
    <div className="w-full fixed top-0 left-0 overflow-y-auto max-h-screen" style={{ position: 'relative' }}>
      <div className='md:flex items-center justify-center bg-white py-6 md:px-10 px-7 backdrop-filter backdrop-blur-lg bg-opacity-30'>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-2 md:hidden w-7 h-7 cursor-pointer'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-500px]'}`}>
          {Links.map((link) => (
            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
              <Link
                to={link.link}
                className={`text-black duration-500 transition-all border-b border-transparent hover:border-gray-700 border-b-2 px-2 py-1 ${
                  link.name === 'Skill' ? 'marker bg-slate-700 h-1 w-4 rounded-full text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flow-wrap justify-center md:mt-8 md:ml-8 md:mb-8'>
        <h2 className='text-black font-extrabold text-4xl'>SKILL</h2>
      </div>
      {/* Skills Section */}
      <div className="flex flex-wrap justify-center md:mt-8 md:ml-8" style={{ position: 'relative', zIndex: open ? '-1' : 'auto' }}>
        {skills.map((skill, index) => (
          <animated.div key={index} style={skillAnimations[index]}>
            <div className="w-[170px] h-[170px] md:mr-4 mb-4 rounded overflow-hidden bg-white shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="flex flex-col items-center justify-center h-full">
                <img className="w-20 mb-2" src={skill.image} alt={skill.title} />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl">{skill.title}</div>
                </div>
              </div>
            </div>
          </animated.div>
        ))}
        <div className='triangle-bottom'></div>
      </div>
    </div>
  );
};

export default Skill;
