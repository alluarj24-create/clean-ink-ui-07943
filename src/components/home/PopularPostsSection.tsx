import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Clock } from "lucide-react";
import { Blog } from "@/types/blog.types";

interface PopularPostsSectionProps {
  blogs: Blog[];
  onBlogClick: (slug: string) => void;
}

export default function PopularPostsSection({ blogs, onBlogClick }: PopularPostsSectionProps) {
  // Get top 4 blogs (simulating popularity)
  const popularBlogs = blogs.slice(0, 4);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-serif font-bold">Most Read This Month</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBlogs.map((blog, index) => (
            <Card
              key={blog._id}
              onClick={() => onBlogClick(blog.slug)}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-background/90 text-foreground">
                    #{index + 1}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{Math.floor(Math.random() * 5000) + 1000}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min</span>
                  </div>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.slice(0, 2).map(tag => (
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
