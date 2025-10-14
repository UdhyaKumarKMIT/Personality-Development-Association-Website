import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const VisionMissionSection = () => {
  const visionPoints = [
    "Become a thriving student organization supporting soft skills and leadership development",
    "Serve as a link between alumni, industry leaders, public speakers and experts",
    "Cultivate a healthy society of engineers",
    "Be acknowledged as an organization created by students for students",
  ];

  const missionPoints = [
    "Offer expert lectures to develop effective communicators and leaders",
    "Conduct contests to enhance understanding of personality development",
    "Establish industry partnerships to advance employment opportunities",
    "Maintain consistent communication with Alumni for guidance",
  ];

  return (
    <section id="vision-mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="shadow-card hover:shadow-hover transition-smooth border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="text-primary" size={28} />
                </div>
                <CardTitle className="text-3xl text-primary">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="shadow-card hover:shadow-hover transition-smooth border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Lightbulb className="text-accent" size={28} />
                </div>
                <CardTitle className="text-3xl text-accent">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
            <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;