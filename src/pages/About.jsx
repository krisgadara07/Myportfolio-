import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Front-end Development', level: 85 },
    { name: 'Back-end Development', level: 75 },
    { name: 'Mobile Development', level: 70 },
    { name: 'Game Development', level: 65 },
  ];

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="bg-card rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium">CHARUSAT UNIVERSITY</h3>
              <p className="text-muted-foreground">Devang Patel Institute of Advance Technology and Research</p>
              <p>B.Tech in Information Technology</p>
              <p className="text-primary">GPA: 8.65</p>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              <li>HTML and CSS Course – Codecademy</li>
              <li>HackerRank basic certificates of Java, Python, C#</li>
              <li>Certificate of GUVI for ChatGPT for everyone</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;