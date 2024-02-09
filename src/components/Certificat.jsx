import React, { useState, useEffect } from 'react';
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useSpring, animated } from 'react-spring';
import Certificatetittle from './Certificatetittle';
import '../assets/Skill.css';
import { Link, useLocation } from 'react-router-dom';

const Certificat = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Skill', link: '/skill' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Project', link: '/project' },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('/certificat');

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


  useEffect(() => {
    if (open && window.innerWidth <= 600) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [open]);

  const certificats = [
    { title: 'Computer Networking ', 
    text: 'It has been successfully completed in the Competency Exam organized by Universitas Teknokrat Indonesia in 2023, specifically in the field of Computer Networking & Troubleshooting.', image: '/public/images/Sertifikat Jaringan Komputer & Troubleshooting.jpeg', 
    link: 'https://drive.google.com/file/d/1rcZy1gC6gXpUCieufgII5EJWwVpeTmWg/view?usp=drive_link' },
    { title: 'Graphic Design', 
    image: '/public/images/Sertifikat Desain Grafis.jpeg', 
    text: 'It has been successfully completed in the Competency Exam organized by Universitas Teknokrat Indonesia in 2023, specifically in the field Graphic Design.', link: 'https://drive.google.com/file/d/1sQRpJhy3CWSkZv5RTue5LRK99z6sMbom/view?usp=sharing' },
    { title: 'Mikrotik Training', image: '/public/images/Sertifikat Pelatihan Mikrotik.jpeg', 
    text: 'I have successfully passed the Competency Exam organized by Universitas Teknokrat Indonesia in 2023, specifically in the field of Mikrotik Training.', link: 'https://drive.google.com/file/d/19kkih9F1APyNT_0y4sZdxMsbOxAvYO_t/view?usp=sharing' },
    { title: 'Infinite learning MSIB Batch 3', 
    image: '/public/images/msib.PNG', 
    text: 'Has successfully completed Independent Study Program Batch 3 on Web Development at Infinite Learning from September 2022 to January 2023', 
    link: 'https://drive.google.com/drive/folders/1UynxJMAenz0yEoWBCqeZwnT9k0yoVwOC' },
    {title: 'IT Creation 2021', 
    image: '/public/images/It.PNG', 
    text: 'Has successfully completed Independent Study Program Batch 3 on Web Development at Infinite Learning from September 2022 to January 2023', 
    link: 'https://drive.google.com/drive/folders/1UynxJMAenz0yEoWBCqeZwnT9k0yoVwOC' },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificats.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const CertificatAnimation = useSpring({
    to: { transform: 'translateY(10%)', opacity: 1 },
    from: { transform: 'translateY(0%)', opacity: 0 },
    reset: true,
  });

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    
    <div className="w-full fixed top-0 left-0 overflow-y-auto max-h-screen" style={{ position: 'relative' }}>
      <div className='md:flex items-center justify-center bg-white py-6 md:px-10 px-7  backdrop-blur-lg '>
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
                  link.name === 'Certificate' ? 'marker bg-slate-700 h-1 w-4 rounded-full text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-setengah' />
      <div className={`mt-1 md:mt-8`}>
        <div className={`flex flow-wrap justify-center md:mt-0 md:ml-8 md:mb-8 `}>
          <animated.div style={fadeIn} className={`mb-2 md:mb-4`}>
            <Certificatetittle className='overflow-hidden ' />
          </animated.div>
        </div>
        <div className="flex flex-wrap md:justify-start justify-center md:mt-12 md:ml-14" style={{ position: 'relative', zIndex: open ? '-1' : 'auto' }}>
          {certificats.map((certificat, index) => (
            <animated.div key={index} style={fadeIn}>
              <animated.div
                onClick={() => window.open(certificat.link, '_blank')}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
                className={`shadow-lg shadow-black bg-white w-[370px] h-[370px] md:mr-4 mb-10 rounded overflow-hidden shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer `}
              >
                < div className='flex flex-col items-center justify-center h-full'>
                  <img className='w-[300px] h-[200px] rounded-lg' src={certificat.image} alt={certificat.title} />
                  <div className='ml-6 mr-8'>
                    <a href={certificat.link} className='text-right text-lg font-semibold '>
                      {certificat.title}
                    </a>
                    <p className='text-base text-justify '>
                      {certificat.text}
                    </p>
                  </div>
                </div>
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificat;
