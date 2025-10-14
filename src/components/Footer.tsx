import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Github } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Experience", path: "/experience" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">PDA</h3>
            <p className="text-primary-foreground/80 italic">Discover Thyself</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-1">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* PDA Official Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-1">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.linkedin.com/company/personality-development-association-mit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/pda_mit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:pda@mitindia.edu"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="border-t border-primary-foreground/20 pt-4 mt-2 text-center">
          <p className="font-semibold text-lg mb-2 text-shadow-md">
              Website Developer:
    
            <br></br>
            </p>
            <p>
            <span className="mt-4 bg-primary-foreground text-primary px-3 py-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
             <span className="font-bold">Udhya Kumar K</span>
            </span>
          </p>

          <div className="flex justify-center gap-4 mb-3">
            <a
              href="https://github.com/UdhyaKumarKMIT"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/udhya-kumar-k-b7999128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/udhya_2004"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:udhyak9445@gmail.com"
              className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-smooth"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} PDA Website Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
