import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

import lyricImg from "../assets/lyric.jpg";
import LibraryAccess from "../assets/libraryaccess.jpg";
import opentalk from "../assets/opentalk.jpg"
import eventwinners from "../assets/eventwinner.jpg"

const About = () => {
  const highlights = [
    {
      title: "Library Access",
      description: "Team PDA is proud to announce that 3000+ books of PDA Library will be accessible to every MITian.",
      image: LibraryAccess,
         link: "https://www.instagram.com/p/Cy3hppcSO7_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      buttonText: "Learn More"
    },
    {
      title: "Lyric Lingo",
      description: "Vibez associated with PDA in Aspiria '23 and conducted the Lyric Lingo Challenge!",
      image: lyricImg,
      link: "https://www.instagram.com/p/Cy3hppcSO7_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      buttonText: "Learn More"
    },
    {
      title: "Open Talk",
      description: "An Open Talk Session was conducted on 9/11/22 for ECE Freshers by Ms Nandhini and Mr Gurubaran.",
      image: opentalk,
      link: "https://www.instagram.com/p/Ck2IxybyVgc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      buttonText: "Learn More"
    },
    {
      title: "Event Winners",
      description: "Honoring the winners of Spontania’s many events, where every participant made the choice difficult.",
      image: eventwinners,
      link: "https://www.instagram.com/p/CdOG59vP1-5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      buttonText: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">About PDA</h1>
            <p className="text-xl text-foreground/90  mx-auto">
              Empowering students to discover their potential and build strong personalities
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed mb-6 text-justify">
              The Personality Development Association (PDA) at MIT was founded in February 1984 by Shri K.V. Narayanan and a small group of passionate students. What started as a simple idea—to help students truly discover themselves—has grown into a vibrant community focused on overall personality development. Through workshops, activities, and events, PDA empowers students to build confidence, communicate effectively, and grow as individuals.
         </p>
              <p className="text-foreground/80 leading-relaxed mb-6 text-justify" >
               
Over the years, PDA has guided thousands of MITians, nurturing not just their skills but their character. Guided by the philosophy of “Discover Thyself,” we encourage every student to look inward, rise upward, and step forward with purpose. PDA is more than an association—it’s a journey of growth, learning, and transformation.
     
              </p>
              <p className="text-foreground/80 leading-relaxed text-justify">
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
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-hover transition-smooth border-t-4 border-t-accent"
                >
                  {highlight.image && (
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{highlight.description}</p>
                    {highlight.link && (
                      <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition"
                      >
                        {highlight.buttonText || "Learn More"}
                      </a>
                    )}
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
