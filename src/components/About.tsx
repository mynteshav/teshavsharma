import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, BarChart as ChartBar, Brain } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-10 overflow-hidden dark:bg-slate-800 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, experience, and approach to data science.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative group w-fit"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg opacity-75 blur-lg animate-pulse group-hover:scale-105 transition-transform duration-300 z-0"></div>
            <img 
              src="/Remove background project.png" 
              alt="Teshav working with data" 
              className="relative z-10 rounded-lg shadow-lg w-full h-auto border-4 border-gray-800 transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              I'm Teshav Sharma, a Data Enthusiast
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With a Bachelor's degree in Computer Applications from Poornima University (2024), 
              I've developed a strong foundation in data analysis, machine learning, and data science. My journey in the world of data has been driven by curiosity and a 
              passion for extracting meaningful insights from complex datasets.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Through my internships at Response Infoway as an Application Developer and CodeClause
              as a Data Science Intern, I've gained hands-on experience in developing data-driven
              solutions and machine learning models that solve real-world problems, My adaptability and continuous learning mindset allow me to 
              stay at the forefront of data science technologies and methodologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-md mr-3">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Machine Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building intelligent solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-md mr-3">
                  <ChartBar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Data Analysis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uncovering valuable insights
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-md mr-3">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Python & SQL</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Expert in data processing
                  </p>
                </div>
              </div>
            </div>  
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;