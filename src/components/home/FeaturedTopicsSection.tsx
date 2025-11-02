import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface FeaturedTopic {
  title: string;
  description: string;
  postCount: number;
  gradient: string;
}

const topics: FeaturedTopic[] = [
  {
    title: "Web Development",
    description: "Modern frameworks, best practices, and tutorials",
    postCount: 12,
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Design",
    description: "UI/UX principles, trends, and creative inspiration",
    postCount: 8,
    gradient: "from-primary/10 to-primary/5"
  },
  {
    title: "Programming",
    description: "Code quality, algorithms, and problem-solving",
    postCount: 15,
    gradient: "from-secondary/50 to-secondary/20"
  }
];

export default function FeaturedTopicsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What I Write About
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of code, design, and creativity through 
            articles that aim to educate and inspire.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card 
              key={topic.title}
              className="group relative overflow-hidden border border-border hover:shadow-card-hover transition-smooth cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-100 transition-smooth`} />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold">
                    {topic.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="text-sm text-muted-foreground">
                  {topic.postCount} articles
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
