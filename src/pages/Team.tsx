import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram } from "lucide-react";

interface TeamMember {
  name: string;
  regNo: string;
  dept: string;
  linkedin?: string;
  instagram?: string;
}

const Team = () => {
  const officeBearers: TeamMember[] = [
    {
      name: "Aarav Sharma",
      regNo: "PDA2024A01",
      dept: "CSE",
      linkedin: "https://linkedin.com/in/aaravsharma",
      instagram: "https://instagram.com/aaravsharma",
    },
    {
      name: "Priya Patel",
      regNo: "PDA2024A02",
      dept: "ECE",
      linkedin: "https://linkedin.com/in/priyapatel",
      instagram: "https://instagram.com/priyapatel",
    },
    {
      name: "Rohan Verma",
      regNo: "PDA2024A03",
      dept: "IT",
      linkedin: "https://linkedin.com/in/rohanverma",
      instagram: "https://instagram.com/rohanverma",
    },
  ];

  const prTeam: TeamMember[] = [
    {
      name: "Sneha Reddy",
      regNo: "PDA2024P01",
      dept: "MBA",
      linkedin: "https://linkedin.com/in/snehareddy",
      instagram: "https://instagram.com/snehareddy",
    },
    {
      name: "Karan Singh",
      regNo: "PDA2024P02",
      dept: "CSE",
      linkedin: "https://linkedin.com/in/karansingh",
      instagram: "https://instagram.com/karansingh",
    },
  ];

  const contentTeam: TeamMember[] = [
    {
      name: "Ananya Gupta",
      regNo: "PDA2024C01",
      dept: "EEE",
      linkedin: "https://linkedin.com/in/ananyagupta",
      instagram: "https://instagram.com/ananyagupta",
    },
    {
      name: "Rahul Mehta",
      regNo: "PDA2024C02",
      dept: "MECH",
      linkedin: "https://linkedin.com/in/rahulmehta",
      instagram: "https://instagram.com/rahulmehta",
    },
  ];

  const managementTeam: TeamMember[] = [
    {
      name: "Divya Nair",
      regNo: "PDA2024M01",
      dept: "CSE",
      linkedin: "https://linkedin.com/in/divyanair",
      instagram: "https://instagram.com/divyanair",
    },
    {
      name: "Arjun Kumar",
      regNo: "PDA2024M02",
      dept: "IT",
      linkedin: "https://linkedin.com/in/arjunkumar",
      instagram: "https://instagram.com/arjunkumar",
    },
    {
      name: "Meera Shah",
      regNo: "PDA2024M03",
      dept: "ECE",
      linkedin: "https://linkedin.com/in/meerashah",
      instagram: "https://instagram.com/meerashah",
    },
  ];

  const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card
            key={index}
            className="shadow-card hover:shadow-hover transition-smooth group hover:-translate-y-2"
          >
            <CardContent className="pt-6 text-center">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground text-4xl font-bold">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{member.regNo}</p>
              <p className="text-sm text-accent font-medium mb-4">{member.dept}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-smooth">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-smooth"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-primary" />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-smooth"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-accent" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">Meet Our Team</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Dedicated individuals working together to empower and inspire
            </p>
          </div>
        </section>

        {/* Team Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <TeamSection title="Office Bearers" members={officeBearers} />
            <TeamSection title="PR Team" members={prTeam} />
            <TeamSection title="Content Team" members={contentTeam} />
            <TeamSection title="Management Team" members={managementTeam} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
