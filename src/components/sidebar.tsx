import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Download, FolderOpen, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiPython } from 'react-icons/si';

interface SidebarProps {
  darkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
  toggleSidebar: () => void;
  activeSection: string; // Coming from parent
}

const Sidebar: React.FC<SidebarProps> = ({
  darkMode,
  isOpen,
  onClose,
  toggleSidebar,
  activeSection
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  useEffect(() => {
    if (progress === 100) {
      // Use the correct path for files in the public folder
      const link = document.createElement('a');
      link.href = `${import.meta.env.BASE_URL}Teshav_Resume_D.pdf`;
      link.download = 'Teshav_Resume_D.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        setProgress(0);
        setIsRunning(false);
      }, 1500);
    }
  }, [progress]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: Home, label: 'Home', href: 'hero' },
    { icon: User, label: 'About Me', href: 'about' },
    { icon: FolderOpen, label: 'Projects', href: 'projects' },
    { icon: Briefcase, label: 'Experience', href: 'journey' },
    { icon: SiPython, label: 'Skills', href: 'skills' },
    { icon: Mail, label: 'Contact', href: 'contact' },
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const handleClick = (href: string) => {
    smoothScrollTo(href); // Use custom scroll
    if (isMobile) {
      setTimeout(onClose, 400);
    }
  };

  const MenuButton = () => (
    <button
      onClick={toggleSidebar}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-200/10 dark:border-gray-700/20"
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-gray-200/10 dark:border-gray-700/20">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse blur-lg opacity-50"></div>
          <img
            src={`${import.meta.env.BASE_URL}Remove background project (1).png`}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Teshav Sharma</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Data Scientist & ML Engineer</p>
        <motion.button
          onClick={() => {
            if (!isRunning) {
              setProgress(0);
              setIsRunning(true);
            }
          }}
          disabled={isRunning}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
          className={`group relative overflow-hidden px-6 py-2 text-sm font-bold uppercase bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white transition-all duration-300 ease-in-out shadow-lg ${
            isRunning ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
          } ${progress === 100 ? 'animate-bounce' : ''}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download size={16} className="shrink-0" />
            {progress === 0 && !isRunning
              ? 'Download CV'
              : progress < 100
              ? `${progress}% Done`
              : '✅ Completed'}
          </span>
          <div
            className="absolute bottom-0 left-0 h-1 bg-white z-0 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </motion.button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 group relative
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-500 dark:text-pink-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10'
                    }`}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 ${
                      isActive
                        ? 'text-pink-500 dark:text-pink-400'
                        : 'text-gray-400 group-hover:text-pink-500'
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute left-0 w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-r"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <MenuButton />
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 bg-white/10 dark:bg-gray-900/50 backdrop-blur-lg border-r border-gray-200/10 dark:border-gray-700/20">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-white/10 dark:bg-gray-900/50 backdrop-blur-lg border-r border-gray-200/10 dark:border-gray-700/20 lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;