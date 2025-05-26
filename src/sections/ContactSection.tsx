import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("https://web-production-cf10.up.railway.app/", formData); // change to your deployed URL if needed
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", details: "Bichkunda, Telangana, India" },
    { icon: Mail, title: "Email", details: "dandisaikarthik@gmail.com" },
    { icon: Phone, title: "Phone", details: "+91 9553466446" }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-950 to-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          "Excited to kickstart my career! Open to entry-level roles and internships — happy to connect and explore opportunities."
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary-800/50 rounded-lg border border-primary-700/50">
                      <Icon size={20} className="text-accent-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", link: "https://github.com/Dandikarthik" },
                  { name: "LinkedIn", link: "https://www.linkedin.com/in/dandiwar-saikarthik-b7952631a/" },
                  { name: "Twitter", link: "https://twitter.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-800/50 hover:bg-primary-800 text-white rounded-lg transition-colors border border-primary-700/50"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 bg-primary-900/60 border border-primary-800/50 rounded-xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-success-900/20 border border-success-700/50 rounded-lg text-success-300 text-center mb-6"
              >
                Thanks for your message! I'll get back to you as soon as possible.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
