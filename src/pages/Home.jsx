import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github as GitHub, Linkedin, Mail, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from "../images/myimg.jpg";

const Home = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Briefcase, label: 'Years Experience', value: '2+' },
    { icon: GraduationCap, label: 'GPA', value: '8.65' },
    { icon: Award, label: 'Certifications', value: '5+' },
  ];

  const technologies = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML/CSS',
    'Python', 'Java', 'C#', 'Unity', 'Flutter'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 mx-auto mb-6"
              >
              <img
                src={myImage}
                alt="Kris Gadara"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-xl"
              />
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Hi, I'm <span className="text-gradient">Kris Gadara</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Web Developer &  Flutter Developer
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-4 mb-12"
            >
              <a
                href="https://github.com/Kris-gadara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a
                href="www.linkedin.com/in/kris-gadara-1580b9343"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:krishgadara0701@gmail.com"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 bg-primary/20 rounded-full font-medium hover:bg-primary/30 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="absolute bottom-8"
        >
          <ArrowDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-muted-foreground">
              Experienced in a wide range of modern technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;