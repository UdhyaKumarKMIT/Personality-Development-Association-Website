import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// Images
import event1 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2220pm202-636x796.jpg";
import event2 from "@/assets/images/whatsapp-image-2025-09-28-at-12.49.19-pm-720x720.jpg";
import event3 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2120pm201-700x696.jpg";
import event4 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2220pm203-549x768.jpg";
import event5 from "@/assets/images/whatsapp-image-2025-09-28-at-12.49.19-pm-1-521x720.jpg";
import event6 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.1920pm202-720x817.jpeg";
import event7 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2020pm-639x720.jpg";
import event8 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2020pm201-689x714.jpg";
import event9 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2020pm202-720x655.jpg";
import event10 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2020pm203-720x725.jpg";
import event11 from "@/assets/images/whatsapp20image202025-09-2820at2012.49.2120pm-720x717.jpg";

const events = [
  {
    title: "Internship Awareness Drive",
    date: "6 October 2025",
    image: event1,
    description:
      "At this enriching expert talk, alumni speaker Sri Vignesh Devarajan shared invaluable insights on career growth, global job trends, and pursuing higher studies in Germany. Participants engaged with real-world tips and personal experiences, gaining a practical understanding of international market expectations and the steps to succeed abroad.",
  },
  {
    title: "Level Up Globally! (Expert Talk) 2025",
    date: "10 September 2025",
    image: event2,
    description:
      "At this enriching expert talk, alumni speaker Sri Vignesh Devarajan shared invaluable insights on career growth, global job trends, and pursuing higher studies in Germany. Participants engaged with real-world tips and personal experiences, gaining a practical understanding of international market expectations and the steps to succeed abroad.",
  },
  {
    title: "MITAFEST'25 Spell Bee",
    date: "15 March 2025",
    image: event3,
    description:
      "The Spell Bee contest, run in partnership with MIT Athenaeum, challenged teams to buzz up their vocabulary and spelling skills in a fast-paced competition. Teams of three faced a series of word games, with monetary prizes for winners and runners-up.",
  },
  {
    title: "PDA Design Workshop",
    date: "04 Jan 2025",
    image: event4,
    description:
      "This hands-on online session offered a deep dive into color theory, typography, and layout design fundamentals. Guided by experts, participants created their own posters step-by-step and presented designs for constructive feedback, regardless of prior experience.",
  },
  {
    title: "INTECH 25 – Locked Lost (Decode, Escape, Conquer!)",
    date: "5 April 2025",
    image: event5,
    description:
      "This team-based competition, held at the Sensors Lab, challenged participants to solve instrumentation puzzles, decode clues, and navigate escape tasks under time pressure. The event fostered teamwork and quick thinking, with a 2k prize pool rewarding creative problem-solvers.",
  },
  {
    title: "MITAFEST25 – Annual Cultural Fest",
    date: "15 March 2025",
    image: event6,
    description:
      "MITAFEST25 is the flagship cultural event, featuring contests testing patience, focus, and nerves. Participants competed for top prizes by demonstrating resilience and mental agility in various fun activities.",
  },
  {
    title: "PDA 41st Inauguration Ceremony",
    date: "2024",
    image: event7,
    description:
      "This ceremony marks the beginning of another successful year for the Personality Development Association. Community members celebrated the legacy of leadership and personal growth that defines PDA.",
  },
  {
    title: "EXCELIA 24 – Quanta Quiz",
    date: "14 November 2024",
    image: event8,
    description:
      "Physics enthusiasts joined this challenging multi-round quiz, designed for teams and individuals to test their grasp of fundamental concepts. Participants sharpened their knowledge through stimulating competition.",
  },
  {
    title: "MIT Variety Team – Meme Contest",
    date: "23 April 2025",
    image: event9,
    description:
      "PDA teamed up with MIT Variety Team for a contest celebrating creativity through memes. Participants submitted entries judged on originality and popularity, contributing to a vibrant online event atmosphere.",
  },
  {
    title: "LIBRETTO – Music Rolling Event with VIBEZ",
    date: "12 November 2024",
    image: event10,
    description:
      "LIBRETTO brought together musicians and music lovers to collaborate in themed rounds, creating a lively and fun-filled experience. Teams competed, aiming for high scores through performance and originality.",
  },
  {
    title: "Platinum Jubilee Celebrations",
    date: "2024",
    image: event11,
    description:
      "PDA proudly participated in the Platinum Jubilee celebrations of Madras Institute of Technology, commemorating decades of excellence and collective achievements.",
  },
];

const Events = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mt-7 mb-12 text-center">Upcoming Event !</h2>
          <section className="py-20 bg-gradient-to-r from-accent via-accent to-accent/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
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
                  className="bg-white text-accent font-semibold text-lg px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
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
                  className="bg-white text-accent font-semibold text-lg px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  asChild
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




          <h2 className="text-4xl font-bold text-primary mb-12 text-center mt-10">Our Events</h2>
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 flex justify-center md:justify-end md:pr-8">
                      <div className="flex flex-col items-center">
                        <span className="iconBackground w-4 h-4 rounded-full bg-accent mb-2"></span>
                        <p className="text-2xl font-semibold text-accent">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="shadow-card hover:shadow-hover transition-smooth">
                        <CardHeader>
                          <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-auto rounded-lg object-cover"
                            />
                          </div>
                          <p className="text-foreground/90">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
