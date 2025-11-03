import { Card } from "@/components/ui/card";
import { BookOpen, Tags, FileText, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const stats: Stat[] = [
  {
    label: "Articles Published",
    value: "42",
    icon: FileText,
    color: "text-blue-500"
  },
  {
    label: "Topics Covered",
    value: "12",
    icon: Tags,
    color: "text-purple-500"
  },
  {
    label: "Words Written",
    value: "50K+",
    icon: BookOpen,
    color: "text-green-500"
  },
  {
    label: "Avg Read Time",
    value: "5 min",
    icon: Clock,
    color: "text-orange-500"
  }
];

export default function ReadingStatsSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into my writing journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className={`p-8 text-center border-border hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${stat.color} bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
