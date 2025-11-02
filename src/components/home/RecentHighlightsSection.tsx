import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";
import { Blog } from "@/types/blog.types";

interface RecentHighlightsSectionProps {
  blogs: Blog[];
  onBlogClick: (slug: string) => void;
}

export default function RecentHighlightsSection({ blogs, onBlogClick }: RecentHighlightsSectionProps) {
  // Show top 3 most recent
  const highlights = blogs.slice(0, 3);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-6 w-6 text-accent" />
          <h2 className="text-3xl font-serif font-bold">Recent Highlights</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((blog, index) => (
            <Card 
              key={blog._id}
              onClick={() => onBlogClick(blog.slug)}
              className="group cursor-pointer border border-border hover:shadow-card-hover transition-smooth overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-accent/20 to-muted relative">
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    #{index + 1}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(blog.publishedAt!).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition-smooth">
                  {blog.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {blog.content}
                </p>
                
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
