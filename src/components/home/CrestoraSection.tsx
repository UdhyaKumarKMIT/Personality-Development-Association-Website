import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import crestoraBanner from "@/assets/crestora-banner.png";

const CrestoraSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {/* Banner Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={crestoraBanner}
                alt="Crestora Event Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-accent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-primary-foreground text-center">
                  Crestora 2025
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <Calendar size={20} />
                <span className="font-semibold">Upcoming Event</span>
              </div>

              <h3 className="text-3xl font-bold text-primary mb-4">
                The Ultimate Personality Development Summit
              </h3>

              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Join us for Crestora, our flagship annual event designed to transform your
                personality and professional presence. Experience inspiring keynote sessions,
                interactive workshops, networking opportunities, and learn from industry experts who
                will guide you on your journey to self-discovery and excellence.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-lg mb-3 text-primary">Event Highlights:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Expert-led workshops on communication and leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Inspiring keynote speakers from leading industries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Networking opportunities with professionals and peers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Interactive sessions and personality assessment activities</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="flex-1">
                  Register Now
                </Button>
                <Button variant="outline" size="lg" className="flex-1 group">
                  Visit Crestora Website
                  <ExternalLink
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrestoraSection;
