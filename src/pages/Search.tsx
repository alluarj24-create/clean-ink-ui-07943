import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import TagFilter from "@/components/TagFilter";

const demoBlogs = [
  {
    _id: "1",
    title: "Getting Started with Modern Web Development",
    slug: "getting-started-modern-web-dev",
    content: "Learn the fundamentals of modern web development, including React, TypeScript, and best practices for building scalable applications.",
    tags: ["Web Development", "React", "TypeScript"],
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "The Art of Clean Code",
    slug: "art-of-clean-code",
    content: "Discover principles and techniques for writing maintainable, readable code that your future self will thank you for.",
    tags: ["Best Practices", "Programming"],
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _id: "3",
    title: "Yoga for Developers: Staying Healthy While Coding",
    slug: "yoga-for-developers",
    content: "Maintaining physical health is crucial for developers who spend long hours at their desks. Discover yoga practices that can help.",
    tags: ["Lifestyle", "Health", "Yoga"],
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(demoBlogs.flatMap((blog) => blog.tags || []))
  );

  const filteredBlogs = demoBlogs.filter((blog) => {
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => blog.tags?.includes(tag));

    return matchesSearch && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Search Articles
        </h1>
        <p className="text-lg text-muted-foreground">
          Find articles on topics that interest you
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles by title or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base"
          />
        </div>
      </div>

      {/* Tag Filter */}
      <div className="mb-12">
        <TagFilter
          availableTags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearAll={handleClearTags}
        />
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Blog List */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-lg text-muted-foreground">
            No articles match your search criteria
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}
    </div>
  );
}
