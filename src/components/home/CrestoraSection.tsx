import { Button } from "@/components/ui/button";

const CrestoraSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-accent via-accent to-accent/90">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold">
                Crestora
              </h2>
              
              <p className="text-1xl md:text-3xl leading-relaxed">
              A celebration of growth and excellence.
Join us for Crestora, where ideas, confidence, and leadership shine.
Unlock your true potential through inspiring sessions and interactive experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8"
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScFxZSWGixzAKsZbVfpTxcn2A2zv3IZy0aIcrLPWGA-S92I0A/viewform" target="_blank" rel="noopener noreferrer">
                    Register Now !
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8"
                  asChild
                >
                  <a href="https://crestora-25.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visit Crestora Website
                  </a>
                </Button>
              </div>
            </div>

            {/* Right iframe */}
            <div className="relative">
              <div className="bg-muted/20 rounded-3xl p-4 shadow-2xl backdrop-blur-sm">
                <div className="bg-background rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/10' }}>
                  <iframe
                    src="https://crestora-25.vercel.app/"
                    className="w-full h-full"
                    title="Crestora Website Preview"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrestoraSection;
