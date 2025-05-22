import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Dandikarthik', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dandiwar-saikarthik-b7952631a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:dandisaikarthik@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary-950 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Dandiwar Saikarthik</h3>
            <p className="text-gray-300 mb-4">
              A passionate developer creating immersive digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-2">
              dandisaikarthik@gmail.com
            </p>
            <p className="text-gray-300">
              Bichkunda , Telangana, India
            </p>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Dandiwar Saikarthik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;