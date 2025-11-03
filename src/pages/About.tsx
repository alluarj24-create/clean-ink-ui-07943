import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Code, Heart, Lightbulb, Target, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const contentPillars = [
  {
    icon: Code,
    title: "Technology & Development",
    description: "Not just code—practical tech insights, tools, and the intersection of development with real-world applications.",
    gradient: "from-blue-500/10 to-blue-500/5"
  },
  {
    icon: Heart,
    title: "Wellness & Mindfulness",
    description: "Exploring yoga, meditation, mental health, and finding balance in a fast-paced digital world.",
    gradient: "from-purple-500/10 to-purple-500/5"
  },
  {
    icon: Lightbulb,
    title: "Personal Growth",
    description: "Learning, exploration, life experiments, and the continuous journey of becoming better.",
    gradient: "from-green-500/10 to-green-500/5"
  },
  {
    icon: Target,
    title: "Real Experiences",
    description: "Honest stories, practical tips, lessons learned, and authentic reflections from my journey.",
    gradient: "from-orange-500/10 to-orange-500/5"
  }
];

export default function About() {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigator.clipboard.writeText("hello@thechronicle.blog");
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-8 flex items-center justify-center">
            <User className="h-16 w-16 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Hi, I'm [Your Name]
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-4">
            Developer | Writer | Explorer of Ideas
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to my digital space where I share experiences, insights, and learnings from my journey through tech, life, and everything in between.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6 text-center">My Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              This blog is my digital garden—a place where I cultivate ideas, share knowledge, and document my journey. 
              It's not just about coding or DSA. It's about the entire experience of being human in a tech-driven world.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground mt-6">
              From exploring new technologies and building projects, to practicing yoga and meditation, to simply 
              reflecting on life's lessons—I believe all these experiences are interconnected. I started this space 
              to share authentic stories, practical insights, and real experiences that might resonate with others 
              on similar journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Content Pillars Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center">What You'll Find Here</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            This space covers a diverse range of topics that matter to me—and hopefully to you too.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contentPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card 
                  key={pillar.title}
                  className="p-8 border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className={`bg-gradient-to-br ${pillar.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to conversations, collaborations, and connecting with like-minded people.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          {/* Email */}
          <div className="p-6 border-2 border-border rounded-2xl bg-muted/30 inline-block">
            <p className="text-sm text-muted-foreground mb-2">Prefer email?</p>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
            >
              <Mail className="h-5 w-5" />
              hello@thechronicle.blog
            </button>
          </div>

          {/* CTA to Contact */}
          <div className="mt-12">
            <Button size="lg" onClick={() => navigate('/contact')}>
              Visit Contact Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
