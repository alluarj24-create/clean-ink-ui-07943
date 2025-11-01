import { Loader2 } from "lucide-react";
import BlogCard from "./BlogCard";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content?: string;
  tags?: string[];
  publishedAt?: string;
  scheduledAt?: string;
}

interface BlogListProps {
  blogs?: Blog[];
  isLoading?: boolean;
  error?: Error | null;
  onBlogClick?: (slug: string) => void;
}

export default function BlogList({ 
  blogs, 
  isLoading, 
  error,
  onBlogClick 
}: BlogListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <p className="text-destructive font-medium mb-2">Error loading articles</p>
          <p className="text-sm text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">No articles published yet</p>
          <p className="text-sm text-muted-foreground mt-2">Check back soon for new content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard 
          key={blog._id} 
          blog={blog}
          onClick={() => onBlogClick?.(blog.slug)}
        />
      ))}
    </div>
  );
}
