import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Brain, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Tooltip from './Tooltip';
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const floatingIcons = [
  { src: `${import.meta.env.BASE_URL}Python_logo.png`, delay: 0.3, top: '30%', right: '-2%', label: 'Python' },
  { src: `${import.meta.env.BASE_URL}SQL_logo.png`, delay: 0.4, top: '40%', right: '-2%', label: 'SQL' },
  { Icon: Brain, delay: 0.5, top: '50%', right: '-2%', label: 'ML', className: 'text-gray-800 dark:text-white' },
  { src: `${import.meta.env.BASE_URL}Power BI_logo.png`, delay: 0.8, top: '60%', right: '-2%', label: 'Power BI' },
];

const SocialLinks: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/mynteshav',
      icon: <Github className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 text-gray-800 dark:text-gray-300" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/teshavds',
      icon: <Linkedin className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 text-gray-800 dark:text-gray-300" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/teshavsharma45/',
      icon: <Instagram className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 text-gray-800 dark:text-gray-300" />,
    },
    {
      name: 'Kaggle',
      url: 'https://kaggle.com/teshavsharma',
      icon: (
        <>
          <img src={`${import.meta.env.BASE_URL}kaggle_logo_light.png`} alt="Kaggle Light" className="w-7 h-7 dark:hidden transition-transform duration-300 group-hover:scale-125" />
          <img src={`${import.meta.env.BASE_URL}kaggle_logo_dark.png`} alt="Kaggle Dark" className="w-7 h-7 hidden dark:block transition-transform duration-300 group-hover:scale-125" />
        </>
      ),
    },
  ];
  return (
    <div className="flex justify-center md:justify-start space-x-6 animate-[fadeInUp_0.6s_0.7s_forwards]">
      {socials.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 relative group"
          onMouseEnter={() => setHovered(name)}
          onMouseLeave={() => setHovered(null)}
        >
          {icon}
          <div
            className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-xs px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-300 ${
              hovered === name ? 'opacity-100 pointer-events-auto' : ''
            } select-none z-20`}
          >
            {name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" style={{ marginTop: '-4px' }} />
          </div>
        </a>
      ))}
    </div>
  );
};

const Hero: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [offset, setOffset] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Profile Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/60 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}updated_profile_image.png`}
            alt=""
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-blue-400"
          >
            Hello, I'm
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            Teshav Sharma
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Data Scientist & ML Engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/90 max-w-md mx-auto"
          >
            A passionate data enthusiast specializing in Python, SQL, ML, and Power BI. 
            I transform complex data into actionable insights and build intelligent solutions 
            that drive business value.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 font-bold border border-white text-white hover:bg-white hover:text-gray-900 rounded-full transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-6 py-4 min-w-[200px] rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">9+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </motion.div>
          </motion.div>
          <div className="fixed -top-1 right-6 z-50">
            <Tooltip content={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center justify-between gap-8">
            {/* Content Section */}
            <div className="w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base font-medium text-blue-600 dark:text-blue-400"
              >
                Hello, I'm
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl font-bold text-gray-900 dark:text-white"
              >
                Teshav Sharma
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              >
                Data Scientist & ML Engineer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300"
              >
                A passionate data enthusiast specializing in Python, SQL, ML, and Power BI. 
                I transform complex data into actionable insights and build intelligent solutions 
                that drive business value.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  View My Work <ArrowRight size={16} />
                </a>
                <a 
                  href="#contact"
                  className="px-6 py-3 font-bold border border-gray-300 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-full transition-all duration-300"
                >
                  Hire Me
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <SocialLinks />
              </motion.div>
            </div>
            <div className="fixed top-6 right-6 z-50">
              <Tooltip content={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors"
                  aria-label="Toggle Theme"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </Tooltip>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="px-6 py-4 min-w-[200px] rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-500">
                  9+
                </div>
                <div className="text-sm text-gray-700 dark:text-white/80">
                  Projects Completed
                </div>
              </motion.div>
            </motion.div>
            {/* Image Section */}
            <motion.div
              className="w-1/2 flex justify-end items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Floating Tech Icons */}
                {floatingIcons.map((icon, idx) => {
                  const delay = icon.delay || 0.3;
                  const style = {
                    position: 'absolute' as const,
                    ...(icon.top ? { top: icon.top } : {}),
                    ...(icon.right ? { right: icon.right } : {}),
                  };

                  return (
                    <div
                      key={idx}
                      style={style}
                      onMouseEnter={() => setHoveredIcon(icon.label)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      className="cursor-default"
                    >
                      {icon.src ? (
                        <motion.img
                          src={icon.src}
                          alt={icon.label}
                          className="w-10 h-10"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
                        />
                      ) : icon.Icon ? (
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
                        >
                          <icon.Icon className={`w-10 h-10 ${icon.className}`} />
                        </motion.div>
                      ) : null}

                      {/* Tooltip */}
                      <div
                        className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-xs px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-300 select-none z-30
                          ${hoveredIcon === icon.label ? 'opacity-100 pointer-events-auto' : ''}
                        `}
                        style={{ marginBottom: '6px' }}
                      >
                        {icon.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" style={{ marginTop: '-4px' }} />
                      </div>
                    </div>
                  );
                })}

                {/* Profile Image with Gradient Background */}
                <div className="relative">
                  <div
                    className="absolute rounded-[60%] bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 blur-2xl opacity-30 animate-pulse"
                    style={{ width: '420px', height: '600px', top: '70px', right: '120px' }}
                  ></div>
                  <div className="relative z-10" style={{ width: '400px', height: '680px',right:'130px',top:'11px'}}>
                    <img
                      src={`${import.meta.env.BASE_URL}updated_profile_image.png`}
                      alt="Teshav Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className="absolute z-20" 
                    style={{ 
                      top: '195px',   
                      right: '-165px', 
                      width: '600px', 
                      height: '350px', 
                    }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}arrow-white.png`}
                      alt="Arrow"
                      className="object-contain w-full h-full dark:invert"
                    /> 
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;