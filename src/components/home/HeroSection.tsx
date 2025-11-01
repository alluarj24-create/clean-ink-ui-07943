import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/types/blog.types";

interface HeroSectionProps {
  blog: Blog;
  onBlogClick: (slug: string) => void;
}

export default function HeroSection({ blog, onBlogClick }: HeroSectionProps) {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <Badge variant="default" className="mb-4">Featured</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blog.content?.substring(0, 150)}...
            </p>
            <button
              onClick={() => onBlogClick(blog.slug)}
              className="inline-flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all group"
            >
              Read the story
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
