import React from 'react';
import { motion } from 'framer-motion';
import DandiImage from '../Assets/Dandi.jpg'


const AboutSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary-950 to-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary-600/20 to-accent-500/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-primary-800/50 bg-primary-900/90 p-1">
              <img 
                src={DandiImage} 
                alt="Dandiwar Saikarthik" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.4 }
              }
            }}
          >
            <h3 className="section-subtitle text-primary-400 mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I am a recent graduate with a strong enthusiasm for learning and exploring new opportunities. 
              As a fresher, I bring a fresh perspective, a strong work ethic, and a willingness to adapt and grow. 
              I am eager to apply my academic knowledge, collaborate with professionals, and contribute meaningfully to any team or project I am a part of. 
              With a curious mindset and a passion for continuous learning, I am ready to take on new challenges and start my professional journey
            </p>
            
            <p className="text-gray-300 mb-6">
              My journey began at the St.Martin's Engineering College, where I honed my skills in software
              development and discovered my love for creating intuitive user interfaces. Since then,
              I've dedicated myself to mastering the latest tools and frameworks in the ever-evolving
              world of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-900/50 border border-primary-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Education</h4>
                <p className="text-gray-300 text-sm">B.Tech | Artificial Intelligence & Machine Learing<br />St.Martin's Engineering College</p>
              </div>
              
              <div className="bg-primary-900/50 border border-primary-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Education, +2 & School</h4>
                <p className="text-gray-300 text-sm">+2 at Sri Chaitanya junior College(82%) <br />Sr Prime School(90%)</p>
              </div>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;