import React from 'react';
import { useSpring, animated } from 'react-spring';

const PortfolioText = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <animated.div
      style={{
        ...fadeIn,
        borderLeft: '3px solid #333', // Adjust the color and width as needed
        paddingLeft: '20px',
        marginLeft:'6px',
      }}
      className="mt-20 px-4 md:px-10 text-center md:text-left"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome... </h2>
      <p className="text-base md:text-lg text-gray-600 text-justify">
        Hi, I'm Ayu Lintang Pangestu, a graduate in Informatics from Technocrat University Indonesia with an IPK of 3.62. My expertise includes PHP, HTML5, CSS, Javascript, Bootstrap, React Js, Tailwind CSS, UX/UI Design, Figma, Adobe XD, Laravel, Adobe Illustrator, and Adobe Photoshop. Applied in several projects that I have worked on. I have high enthusiasm to keep learning and developing my skills. I am highly committed to making an immediate contribution to the work, using my skills to overcome challenges, and collaborating proactively in the work environment, thank you.                          

      </p>
    </animated.div>
  );
};

export default PortfolioText;
