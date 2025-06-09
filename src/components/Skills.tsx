import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart, Brain } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; proficiency: number }[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.proficiency}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                transition={{ duration: 1, delay: delay + 0.2 }}
                className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-white-600 dark:text-white-400" />,
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'SQL', proficiency: 85 },
        { name: 'HTML', proficiency: 75 },
        { name: 'CSS', proficiency: 50 },
        { name: 'Flask', proficiency: 80 }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart className="w-5 h-5 text-white-600 dark:text-white-400" />,
      skills: [
        { name: "Power BI", proficiency: 90 },
        { name: "Pandas", proficiency: 90 },
        { name: "NumPy", proficiency: 90 },
        { name: "Excel", proficiency: 80 },
        { name: "Matplotlib/Seaborn", proficiency: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-5 h-5 text-white-600 dark:text-white-400" />,
      skills: [
        { name: 'Scikit-learn', proficiency: 85 },
        { name: 'Regression', proficiency: 90 },
        { name: 'Natural Language Processing', proficiency: 80 },
        { name: 'Classification', proficiency: 85 },
        { name: 'Model Evaluation', proficiency: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-white-600 dark:text-white-400" />,
      skills: [
        { name: "SQL", proficiency: 85 },
        { name: "MySQL", proficiency: 85 },
        { name: "SQLite", proficiency: 85 }
      ]
    }
  ];

  const half = Math.ceil(skillCategories.length / 2);

  return (
    <section id="skills" className="py-10 scroll-mt-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Skills
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
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are the technical skills I've developed throughout my education and professional journey.
          </motion.p>
        </div>

        {/* 1 Row - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {skillCategories.slice(0, half).map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="space-y-6">
            {skillCategories.slice(half).map((category, index) => (
              <SkillCategory
                key={index + half}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                delay={(index + half) * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;