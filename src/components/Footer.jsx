import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Kris-gadara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.comwww.linkedin.com/in/kris-gadara-1580b9343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:krishgadara0701@gmail.com"
              className="p-2 rounded-full bg-accent hover:bg-accent-foreground hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kris Gadara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;