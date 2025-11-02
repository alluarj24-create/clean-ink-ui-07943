import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! You'll hear from me soon.");
      setEmail("");
    }
  };

  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Never Miss a Post
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get my latest articles delivered straight to your inbox. No spam, 
          just quality content about web development and design.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="sm:w-auto w-full">
            Subscribe
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground mt-4">
          Join other readers in staying up to date
        </p>
      </div>
    </section>
  );
}
