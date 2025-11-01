import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content?: string;
  tags?: string[];
  publishedAt?: string;
  scheduledAt?: string;
}

interface BlogCardProps {
  blog: Blog;
  onClick?: () => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getExcerpt = (content?: string) => {
    if (!content) return "Read more...";
    const plainText = content.replace(/<[^>]*>/g, '');
    return plainText.length > 150 
      ? plainText.substring(0, 150) + "..." 
      : plainText;
  };

  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300"
    >
      <div className="aspect-[16/9] bg-muted overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      <div className="p-6">
        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {getExcerpt(blog.content)}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
          {blog.publishedAt && (
            <time>{formatDate(blog.publishedAt)}</time>
          )}
          <span>·</span>
          <span>5 min read</span>
        </div>
      </div>
    </Card>
  );
}
