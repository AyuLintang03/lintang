import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useSpring, animated } from 'react-spring';
import { Link, useLocation } from "react-router-dom";

const Project = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Skill', link: '/skill' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Project', link: '/project' },
  ];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectStates, setProjectStates] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const location = useLocation(); // New location variable

  const projects = [
    {
      name: 'Platform E-commerce Sayuran Online',
      text: 'The online vegetable sales website utilizes the PHP programming language with the Laravel framework, and Bootstrap for its user interface.',
      image: '/public/images/toko-sayuran-online.png',
      link: 'https://github.com/AyuLintang03/Toko-Online-Sayuran---Toko-Riski.git'
    },
    {
      name: 'Library Desktop Application',
      text: 'The library application is employed for book borrowing and return processes, utilizing the C# programming language.',
      image: '/public/images/Screenshot (1565).png',
      link: 'https://github.com/AyuLintang03/Perpustakaan_Deskop.git'
    },
    {name: 'Game Petualangan Momo',
      text: 'Momo is chemistry quiz game: collect oranges, tackle obstacles, answer questions using chemical tubes. Developed with HTML and Construct 2, it includes special orange fruits for added gameplay.',
      image: '/public/images/pm.jfif',
      link: 'https://github.com/AyuLintang03/Game-Petualangan-Momo.git'
    },
    
    {name: 'Website Rumah Kucing',
      text: 'The website focuses on social media, where users can post cats for adoption. The interface of this website is developed using React JS. ',
      image: '/public/images/Artboard 1@3x-100.jpg',
      link: 'https://www.figma.com/proto/B7U3681L9jwX68gwrpNzIJ/High-Fidelity?type=design&node-id=401-965&t=LTP5YvYJXjRNbjzb-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=401%3A965'
    },
    
    {name: 'Prototype Komoditiku',
      text: 'The educational website serves as a platform connecting sellers and buyers, with a primary emphasis on commitment to product quality and fair value earnings. ',
      image: '/public/images/Artboard 1@2x.png',
      link: 'https://www.figma.com/proto/gotmpgbIcZ5yi0UUtvSFE8/HI-FI?type=design&node-id=204-169&t=LTP5YvYJXjRNbjzb-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=204%3A169'
    },

    {name: 'Prototype Kalpataru',
      text: 'Kalpataru, an environmental platform, encourages users to send waste to partner organizations, earning points for redeemable benefits while actively reducing environmental impact through participation.',
      image: '/public/images/Artboard 1.png',
      link: 'https://www.figma.com/proto/VZ2moonAUd45WulBcMgoCM/Massive?type=design&node-id=1-5758&t=LTP5YvYJXjRNbjzb-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A7282'
    },
  ];

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
    setProjectStates(projects.map((_, index) => index === currentIndex));
    setCurrentSlide(currentIndex + 1);
  }, [currentIndex, projects]);

  const ProjectAnimation = projects.map((_, index) => {
    const isActive = projectStates[index];

    return useSpring({
      opacity: isActive ? 1 : 0,
      transform: isActive ? 'translateX(0) scale(1.1)' : 'translateX(200px) scale(1)',
      config: { duration: 500 },
    });
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

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
                className={`text-black duration-500 transition-all border-b border-transparent hover:border-gray-700 border-b-2 px-2 py-1 ${
                  link.name === 'Project' ? 'marker bg-slate-700 h-1 w-4 rounded-full text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=' w-full h-screen bg-black'>
        <div className='flex flow-wrap justify-center md:mt-0 md:ml-8 md:mb-8'>
            <h2 className='text-white font-extrabold text-4xl md:mt-6 md:mb-6 mb-6'>PROJECT</h2>
           
        </div>
        <div className="flex flex-wrap justify-center md:mt-8 md:ml-8" style={{ position: 'relative', zIndex: open ? '-1' : 'auto' }}>
            {projects.map((project, index) => (
            <animated.div
                key={index}
                style={ProjectAnimation[index]}
                onClick={() => window.open(project.link, '_blank')}
                className={` bg-white w-[370px] h-[370px] md:mr-4 mb-4 rounded overflow-hidden shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer ${projectStates[index] ? 'z-10' : 'hidden'}`}
            >
                <div className='flex flex-col items-center justify-center h-full'>
                    <img className='w-[300px] h-[200px] rounded' src={project.image} alt={project.name} />
                    <div className='ml-6 mr-8 text-justify '>
                        <a href={project.link} className='text-right text-lg font-semibold '>
                            {project.name}
                        </a>
                        <p className='text-base '>
                            {project.text}
                    </p>
                    </div>
                </div>
            </animated.div>
            ))}
            <div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 cursor-pointer"
                onClick={handlePrev}
                style={{ zIndex: open ? '-1' : 'auto' }}
                >
                <ChevronLeftIcon className="text-white"/>
            </div>
            <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 cursor-pointer"
                onClick={handleNext}
                style={{ zIndex: open ? '-1' : 'auto' }}
                >
                <ChevronRightIcon className="text-white" />
            </div>
            {/* Bullet points */}
            <div className="absolute top-[410px] items-center left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${currentSlide === index + 1 ? 'bg-white' : 'bg-gray-500'}`}
                ></div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
