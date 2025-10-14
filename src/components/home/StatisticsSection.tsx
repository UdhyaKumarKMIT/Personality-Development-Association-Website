import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatCard = ({ icon, value, label, suffix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="bg-card p-8 rounded-xl shadow-card hover:shadow-hover transition-smooth text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-primary/10 p-4 rounded-full">{icon}</div>
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: <Users className="text-primary" size={32} />,
      value: 250,
      label: "Students Members",
      suffix: "+",
    },
    {
      icon: <GraduationCap className="text-accent" size={32} />,
      value: 10,
      label: "Events Conducted",
      suffix: "+",
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      value: 40,
      label: "Years of Excellence",
      suffix: "+",
    },
    {
      icon: <Calendar className="text-primary" size={32} />,
      value: 3000,
      label: "PDA Library Books",
      suffix: "+",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
