import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";

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
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">PDA</h3>
            <p className="text-primary-foreground/80 italic">Discover Thyself</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
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

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-2">Connect With Us</h4>
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

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-1 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} PDA Website Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
