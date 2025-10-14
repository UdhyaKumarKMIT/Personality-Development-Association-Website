import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      title: "Foundation Year",
      year: "2016",
      description: "PDA was established with the vision of holistic student development",
    },
    {
      title: "First Major Event",
      year: "2017",
      description: "Successfully organized our first personality development workshop",
    },
    {
      title: "Crestora Launch",
      year: "2019",
      description: "Launched our flagship annual event, Crestora",
    },
    {
      title: "500+ Impact",
      year: "2024",
      description: "Reached milestone of impacting over 500 students",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">About PDA</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Empowering students to discover their potential and build strong personalities
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                The Personality Development Association (PDA) was founded with a singular mission: to
                empower students to discover their true potential and develop the skills necessary for
                personal and professional success. Since our inception, we have been committed to
                creating a nurturing environment where students can grow, learn, and transform
                themselves.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Over the years, PDA has evolved into a vibrant community of students and mentors
                dedicated to fostering holistic development. Through our carefully curated workshops,
                seminars, and events, we provide practical tools and insights that help students
                enhance their communication skills, build confidence, and develop leadership qualities.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, PDA stands as a beacon of transformation, having impacted hundreds of students
                and continuing to expand our reach. Our commitment to excellence and innovation in
                personality development remains unwavering as we look forward to shaping future
                leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Key Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-hover transition-smooth border-t-4 border-t-accent"
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-secondary mb-2">
                      {highlight.year}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-foreground/70">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
