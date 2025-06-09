import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github, Brain, BarChart2, LayoutDashboard, Grid } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAllMobileProjects, setShowAllMobileProjects] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Job Market & Salary Trends',
      category: 'data-analysis',
      description: 'Designed an interactive Power BI dashboard to analyze global job market trends across 14.2K+ job postings from 2020–2024.',
      image: `${import.meta.env.BASE_URL}Capture.PNG`,
      technologies: ['Power BI','DAX'],
      github:"https://github.com/mynteshav/Job-Market-Salary-Trends-Dashboard-Power-BI-?tab=readme-ov-file",
      demo:"https://github.com/mynteshav/Job-Market-Salary-Trends-Dashboard-Power-BI-/blob/main/images/screenshot_dashboard.PNG"
    },
    {
      id: 2,
      title: "Predict Calorie Expenditure Using XGBoost",
      category: "machine-learning",
      description: "Developed a regression model to predict calorie expenditure using XGBoost, incorporating various health metrics and activity data.",
      image: `${import.meta.env.BASE_URL}predict-calorie.jpeg`,
      technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/mynteshav/Calorie-Expenditure"
    },
    {
      id: 3,
      title: "Flipkart Product Pricing Strategy",
      category: "data-analysis",
      description: "Analyzed product pricing data from Flipkart to identify optimal pricing strategies using regression models and market basket analysis.",
      image: `${import.meta.env.BASE_URL}Flipkart-price.png`,
      technologies: ["Python", "Regression Models", "Pandas", "NumPy", "Tableau"],
      github: "https://github.com/mynteshav/Flipkart-product-pricing"
    },
    {
      id: 4,
      title: "Predict Holiday Package Using XGBoost",
      category: "machine-learning",
      description: "Built a recommendation system using XGBoost to predict and suggest personalized holiday packages based on customer preferences.",
      image: `${import.meta.env.BASE_URL}pexels-photo.jpg`,
      technologies: ["Python", "XGBoost", "Pandas", "NumPy", "Scikit-learn"],
      github: "https://github.com/mynteshav/Predict-Holiday-Package-Using-XGBoost"
    },
    {
      id: 5,
      title: "Customer Segmentation System",
      category: "machine-learning",
      description: "Developed a customer segmentation system using K-means clustering to identify distinct customer groups for targeted marketing.",
      image: `${import.meta.env.BASE_URL}customer-segmentation.png`,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/mynteshav/CodeClause_Customer_Segmentation_system2.ipynb"
    },
    {
      id: 6,
      title: "Store Management System",
      category: "web-app",
      description: "Created a database-driven store management application to streamline inventory tracking, sales processing, and reporting.",
      image: `${import.meta.env.BASE_URL}store.png`,
      technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      github: "https://github.com/mynteshav/Store-management-System"
    }, 
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const visibleProjects = isMobile && !showAllMobileProjects
    ? filteredProjects.slice(0, 3)
    : filteredProjects;

  return (
    <section id="projects" className="py-10 scroll-mt-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my data science and machine learning projects that demonstrate my technical skills and problem-solving approach.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', name: 'All', icon: <Grid size={16} /> },
            { id: 'machine-learning', name: 'Machine Learning', icon: <Brain size={16} /> },
            { id: 'data-analysis', name: 'Data Analysis', icon: <BarChart2 size={16} /> },
            { id: 'web-app', name: 'Applications', icon: <LayoutDashboard size={16} /> },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Tilt
              key={project.id}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.02}
              transitionSpeed={400}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-lg h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-48 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover shadow-md transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-gray-800 dark:text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-6 items-center text-sm font-medium">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {isMobile && filteredProjects.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllMobileProjects(!showAllMobileProjects)}
              className="px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              {showAllMobileProjects ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;