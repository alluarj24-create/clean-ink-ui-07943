import BlogList from "@/components/BlogList";
import { Blog } from "@/types/blog.types";

interface LatestStoriesSectionProps {
  blogs: Blog[];
  selectedTag: string | null;
  onBlogClick: (slug: string) => void;
}

export default function LatestStoriesSection({ 
  blogs, 
  selectedTag, 
  onBlogClick 
}: LatestStoriesSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold">
            {selectedTag ? `${selectedTag} Articles` : 'Latest Stories'}
          </h2>
        </div>
        <BlogList
          blogs={blogs}
          isLoading={false}
          onBlogClick={onBlogClick}
        />
      </div>
    </section>
  );
}
