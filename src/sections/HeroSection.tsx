import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroModel } from '../components/3d/HeroModel';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-950/20 pointer-events-none z-10" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between h-full relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <div className="mb-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block px-4 py-1 rounded-full bg-primary-900/30 text-primary-400 text-sm font-medium mb-4 backdrop-blur-sm border border-primary-800/50"
            >
              B.Tech
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hi, I'm <span className="text-gradient">Dandiwar Saikarthik</span> <br />
              Software Engineer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              A passionate FrontEnd developer specializing in building exceptional digital experiences. 
              
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work <ExternalLink size={16} />
            </motion.a>
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="px-6 py-3 border border-primary-600 text-primary-400 hover:bg-primary-900/30 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex gap-4 mt-8"
          >
            <a 
              href="https://github.com/Dandikarthik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dandiwar-saikarthik-b7952631a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-1/2 aspect-square max-h-[600px]"
        >
          <div className="canvas-container">
            <Canvas shadows>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <HeroModel position={[0, -1, 0]} scale={2} />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
            </Canvas>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1"
          >
            <motion.div
              animate={{ height: ['0%', '30%', '0%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-white/70 rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;