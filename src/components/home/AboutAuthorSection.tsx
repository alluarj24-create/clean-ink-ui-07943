import { Card } from "@/components/ui/card";
import { Pen, Coffee, Code } from "lucide-react";

export default function AboutAuthorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
              <Pen className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About The Chronicle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is my personal space where I document my journey, share insights, 
            and explore ideas that matter. Every post is crafted with care, 
            aimed at sparking curiosity and meaningful conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-8 text-center border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Pen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Thoughtful Writing</h3>
            <p className="text-muted-foreground">
              Every article is carefully researched and written to provide real value
            </p>
          </Card>
          
          <Card className="p-8 text-center border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Practical Insights</h3>
            <p className="text-muted-foreground">
              Real-world examples and hands-on guidance you can apply immediately
            </p>
          </Card>
          
          <Card className="p-8 text-center border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3">Authentic Stories</h3>
            <p className="text-muted-foreground">
              Honest reflections from lessons learned and experiences lived
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're here to learn, explore, or simply pass the time, 
            I hope you find something that resonates. Thanks for stopping by.
          </p>
        </div>
      </div>
    </section>
  );
}
