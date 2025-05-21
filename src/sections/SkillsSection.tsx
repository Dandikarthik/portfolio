import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "💻", proficiency: 90 },
        { name: "TypeScript", icon: "📝", proficiency: 85 },
        { name: "JavaScript", icon: "📱", proficiency: 95 },
        { name: "HTML/CSS", icon: "🎨", proficiency: 90 },
        { name: "TailwindCSS", icon: "🌊", proficiency: 85 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "🖥️", proficiency: 60 },
        { name: "Python", icon: "🚂", proficiency: 75 },
        { name: "-", icon: "🍃", proficiency: 0 },
        { name: "-", icon: "🔍", proficiency: 0 },
        { name: "-", icon: "🔌", proficiency: 0 },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", icon: "🐙", proficiency: 70 },
        { name: "Docker", icon: "🐳", proficiency: 20 },
        { name: "AWS", icon: "☁️", proficiency: 40 },
        { name: "Figma", icon: "🎯", proficiency: 80 },
        { name: "Sql", icon: "🧪", proficiency: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-primary-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I've honed my skills across various technologies and tools. Here's a showcase of my technical Skills:
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-primary-900/50 border border-primary-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-primary-800/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            { title: "Years Experience", value: "Fresher" },
            { title: "Projects Completed", value: "8+" },
            { title: "Certifications", value: "10+" },
            { title: "GitHub Contributions", value: "10+" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-primary-900/30 border border-primary-800/50 rounded-xl p-6 text-center"
            >
              <h4 className="text-accent-400 text-3xl md:text-4xl font-bold mb-2">{stat.value}</h4>
              <p className="text-gray-300 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;