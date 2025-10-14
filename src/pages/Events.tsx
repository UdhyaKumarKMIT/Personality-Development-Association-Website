import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

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
    date: "Upcoming",
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
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Events</h2>
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
                        <p className="text-sm font-semibold text-accent">{event.date}</p>
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
                          <p className="text-foreground/80">{event.description}</p>
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
