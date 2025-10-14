import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CrestoraSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set event date here (YYYY-MM-DD format)
  const eventDate = new Date("2025-10-16T16:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-accent via-accent to-accent/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl uppercase tracking-widest text-primary/80 font-bold mb-2">
                  Upcoming Events
                </h3>
                <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  Crestora '25'
                </h2>
              </div>

              <p className="text-1xl md:text-base leading-relaxed">
                A celebration of growth and excellence. Join us for Crestora,
                where ideas, confidence, and leadership shine. Unlock your true
                potential through inspiring sessions and interactive experiences.
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6 font-semibold text-lg">
                <div className="text-center">
                  <span className="text-3xl">{timeLeft.days}</span>
                  <div className="text-sm text-white/80">Days</div>
                </div>
                <div className="text-center">
                  <span className="text-3xl">{timeLeft.hours}</span>
                  <div className="text-sm text-white/80">Hours</div>
                </div>
                <div className="text-center">
                  <span className="text-3xl">{timeLeft.minutes}</span>
                  <div className="text-sm text-white/80">Minutes</div>
                </div>
                <div className="text-center">
                  <span className="text-3xl">{timeLeft.seconds}</span>
                  <div className="text-sm text-white/80">Seconds</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
  variant="outline"
  size="lg"
  className="bg-white text-accent font-semibold text-lg px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-red-600"
>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScFxZSWGixzAKsZbVfpTxcn2A2zv3IZy0aIcrLPWGA-S92I0A/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now !
                  </a>
                </Button>
                <Button
  variant="outline"
  size="lg"
  className="bg-white text-accent font-semibold text-lg px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-red-600"
>
                  <a
                    href="https://crestora-25.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Crestora Website
                  </a>
                </Button>
              </div>
            </div>

            {/* Right iframe */}
            <div className="relative">
              <div className="bg-muted/20 rounded-3xl p-4 shadow-2xl backdrop-blur-sm">
                <div
                  className="bg-background rounded-2xl overflow-hidden shadow-lg"
                  style={{ aspectRatio: "16/10" }}
                >
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
