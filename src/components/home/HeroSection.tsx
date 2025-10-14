import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("vision-mission");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Character */}
          <div className="hidden lg:flex justify-center animate-fade-in">
          <img src="/zenith.png"  alt="Professional woman character"
              className="w-64 h-auto object-contain"/>


         
          </div>

          {/* Center Content */}
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Personality Development Association
            </h1>
            <p className="text-2xl md:text-3xl italic text-accent font-medium">
              Discover Thyself
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToAbout}
              className="mt-8"
            >
              Explore Us!
            </Button>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 pt-8">
              <a
                href="https://www.linkedin.com/company/personality-development-association-mit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-4 rounded-full shadow-card hover:shadow-hover transition-smooth hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-primary" />
              </a>
              <a
                href="https://instagram.com/pda_mit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-4 rounded-full shadow-card hover:shadow-hover transition-smooth hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} className="text-accent" />
              </a>
              <a
                href="mailto:pda@mitindia.edu"
                className="bg-card p-4 rounded-full shadow-card hover:shadow-hover transition-smooth hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="text-secondary" />
              </a>
            </div>
          </div>

          {/* Right Character */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <img
              src="/zest.png"
              alt="Professional man character"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
