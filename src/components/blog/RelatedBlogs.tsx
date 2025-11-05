import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface RelatedBlog {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}

// Mock data - in real app, this would be filtered by matching tags
const relatedBlogs: RelatedBlog[] = [
  {
    _id: "2",
    title: "Mastering React Server Components",
    slug: "mastering-react-server-components",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    excerpt: "A deep dive into React Server Components and how they're changing the way we build web applications.",
    tags: ["React", "Web Development"],
    readingTime: 7,
  },
  {
    _id: "3",
    title: "Building with AI: The Future is Here",
    slug: "building-with-ai",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    excerpt: "Exploring the latest AI tools and how they're transforming the development workflow.",
    tags: ["AI", "Development"],
    readingTime: 6,
  },
  {
    _id: "4",
    title: "Performance Optimization Techniques",
    slug: "performance-optimization",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    excerpt: "Essential techniques for optimizing web application performance and user experience.",
    tags: ["Performance", "Web Development"],
    readingTime: 8,
  },
];

export function RelatedBlogs() {
  return (
    <div className="py-8">
      <h3 className="font-serif text-2xl font-bold mb-6">You Might Also Like</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedBlogs.map((blog) => (
          <Link key={blog._id} to={`/blog/${blog.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h4 className="font-serif text-lg font-bold mb-2 line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readingTime} min</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
