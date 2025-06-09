import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  date: string;
  title: string;
  descriptions: string[];
  institution?: string;
  location?: string;
  company?: string;
  icon?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  descriptions,
  institution,
  location,
  company,
  icon,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative pl-10"
    >
      {/* Dot with Ping */}
      <div className="absolute -left-2 top-3 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
        <span className="absolute inset-0 rounded-full bg-pink-500/70 animate-ping opacity-50"></span>
        {icon && <span className="text-white relative z-10">{icon}</span>}
      </div>
      <div className="absolute top-7 left-4 w-[25px] h-0.5 bg-gradient-to-br from-pink-500 to-purple-500 block"></div>

      {/* Card */}
      <div className="relative p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold mb-2 mt-0 text-gray-800 dark:text-white">{title}</h3>

        {/* Info Line */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2 flex-wrap">
          {company && (
            <>
              <span className="text-pink-600 dark:text-pink-400">{company}</span>
              <span className="mx-2 text-gray-500">•</span>
            </>
          )}
          {institution && location && (
            <>
              <span className="text-pink-600 dark:text-pink-400">{institution} - {location}</span>
              <span className="mx-2 text-gray-500">•</span>
            </>
          )}
          <span className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
        </div>

        {/* Bullet List */}
        <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
          {descriptions.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Journey: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experience = [
    {
      date: 'May 2023 - July 2023',
      title: 'Application Developer Intern',
      company: 'Response Infoway',
      descriptions: [
        'Developed Object Detection System using OpenCV in Python.',
        'Maintained database-driven applications using Python and MySQL.',
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      date: 'June 2023 - July 2023',
      title: 'Data Science Intern',
      company: 'CodeClause',
      descriptions: [
        'Created ML models for customer segmentation.',
        'Developed interactive data visualization dashboards.',
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  const education = [
    {
      date: '2021 - 2024',
      title: "Bachelor's in Computer Applications",
      institution: 'Poornima University',
      location: 'Jaipur',
      descriptions: [
        'Focused on data science and machine learning fundamentals.',
        'Completed multiple projects in data analysis and automation.',
      ],
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <section id="journey" className="py-10 overflow-hidden bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '8rem' } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"
          ></motion.div>
        </div>

        {/* Timeline Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="relative space-y-10 z-10 pl-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
              Experience
            </h3>
            <div className="absolute top-2 left-[6px] w-[2px] bg-pink-500 bottom-0" />
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>

          {/* Education */}
          <div className="relative space-y-10 z-10 pl-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left">
              Education
            </h3>
            <div className="absolute top-2 left-[6px] w-[2px] bg-pink-500 bottom-0" />
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
