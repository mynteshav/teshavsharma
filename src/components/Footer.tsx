import React from 'react';
import { Heart } from 'lucide-react';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 scroll-smooth">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <button 
              onClick={() => smoothScrollTo('hero')} 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-transform duration-300"
            >
              TS
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => smoothScrollTo('hero')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => smoothScrollTo('about')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              About
            </button>            
            <button 
              onClick={() => smoothScrollTo('projects')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => smoothScrollTo('journey')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => smoothScrollTo('skills')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => smoothScrollTo('contact')} 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Teshav Sharma
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Teshav Sharma. All rights reserved.
            </p>

            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-400 dark:text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;