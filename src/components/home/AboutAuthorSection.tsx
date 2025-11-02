import { Card } from "@/components/ui/card";
import { Pen, Coffee, Code } from "lucide-react";

export default function AboutAuthorSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">
              Hi, I'm a Writer & Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to my corner of the internet where I share my thoughts, experiences, 
              and insights on web development, design, and everything in between. I believe 
              in learning by sharing, and this blog is my way of documenting my journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're here to learn something new or just browsing, I hope you'll 
              find something valuable. Feel free to explore my articles and reach out if 
              you'd like to connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-6 border border-border hover:shadow-card-hover transition-smooth">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Pen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Writing</h3>
              <p className="text-muted-foreground text-sm">
                Sharing knowledge through clear, engaging articles
              </p>
            </Card>
            
            <Card className="p-6 border border-border hover:shadow-card-hover transition-smooth">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Coding</h3>
              <p className="text-muted-foreground text-sm">
                Building projects and exploring new technologies
              </p>
            </Card>
            
            <Card className="p-6 border border-border hover:shadow-card-hover transition-smooth sm:col-span-2">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Sharing Experiences</h3>
              <p className="text-muted-foreground text-sm">
                From lessons learned to breakthroughs discovered, documenting the journey one post at a time
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
