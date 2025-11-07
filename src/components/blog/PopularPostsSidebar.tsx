import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface PopularPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  views: string;
  readingTime: string;
}

const popularPosts: PopularPost[] = [
  {
    _id: "p1",
    title: "10 JavaScript Tips Every Developer Should Know",
    slug: "javascript-tips-every-developer",
    coverImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=400&fit=crop",
    views: "15.2K",
    readingTime: "6 min",
  },
  {
    _id: "p2",
    title: "The Complete Guide to React Hooks",
    slug: "complete-guide-react-hooks",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop",
    views: "12.8K",
    readingTime: "8 min",
  },
  {
    _id: "p3",
    title: "Building Responsive Layouts with CSS Grid",
    slug: "responsive-layouts-css-grid",
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=400&fit=crop",
    views: "10.5K",
    readingTime: "5 min",
  },
  {
    _id: "p4",
    title: "Understanding Async/Await in JavaScript",
    slug: "async-await-javascript",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop",
    views: "9.2K",
    readingTime: "7 min",
  },
  {
    _id: "p5",
    title: "Web Performance Optimization Techniques",
    slug: "web-performance-optimization",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    views: "8.7K",
    readingTime: "10 min",
  },
];

export function PopularPostsSidebar() {
  return (
    <div className="w-full">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="h-5 w-5 text-orange-500" />
          <h3 className="font-serif text-xl font-bold">Popular Posts</h3>
        </div>

        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex gap-3 hover:bg-muted/50 rounded-lg p-2 transition-colors">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.views} views</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
