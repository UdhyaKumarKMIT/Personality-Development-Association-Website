import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import crestoraBanner from "@/assets/crestora-banner.png";

const Events = () => {
  const pastEvents = [
    {
      title: "Leadership Workshop 2024",
      date: "March 2024",
      description:
        "Interactive workshop focusing on developing leadership skills and team management capabilities.",
    },
    {
      title: "Communication Skills Seminar",
      date: "January 2024",
      description:
        "Expert-led seminar on effective communication, public speaking, and interpersonal skills.",
    },
    {
      title: "Crestora 2023",
      date: "November 2023",
      description:
        "Annual flagship event featuring keynote speakers, workshops, and networking sessions.",
    },
    {
      title: "Interview Preparation Drive",
      date: "September 2023",
      description:
        "Comprehensive program covering resume building, mock interviews, and HR insights.",
    },
    {
      title: "Personality Assessment Week",
      date: "June 2023",
      description:
        "Week-long event with personality tests, one-on-one counseling, and self-discovery sessions.",
    },
    {
      title: "Professional Etiquette Workshop",
      date: "April 2023",
      description:
        "Workshop on professional behavior, workplace ethics, and corporate culture.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Upcoming Event - Crestora */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={crestoraBanner}
                    alt="Crestora 2025"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 gradient-accent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-secondary text-foreground px-4 py-2 rounded-full inline-block mb-2 font-semibold">
                        Upcoming Event
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                        Crestora 2025
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4 text-accent">
                    <Calendar size={20} />
                    <span className="font-semibold">March 2025</span>
                  </div>
                  <p className="text-foreground/80 mb-6">
                    Join us for our biggest event of the year! Crestora 2025 promises to be an
                    unforgettable experience with renowned speakers, interactive workshops, and
                    incredible networking opportunities.
                  </p>
                  <Button variant="cta" size="lg">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Past Events</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>

                {/* Events */}
                <div className="space-y-12">
                  {pastEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row gap-8 items-center ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex-1"></div>
                      <div className="flex-1">
                        <Card className="shadow-card hover:shadow-hover transition-smooth">
                          <CardHeader>
                            <div className="flex items-center gap-2 text-sm text-accent mb-2">
                              <Calendar size={16} />
                              <span>{event.date}</span>
                            </div>
                            <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/80">{event.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
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
