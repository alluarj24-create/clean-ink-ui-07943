import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { demoBlogs } from "@/data/mockBlogs";
import HeroSection from "@/components/home/HeroSection";
import TopicsSection from "@/components/home/TopicsSection";
import RecentHighlightsSection from "@/components/home/RecentHighlightsSection";
import PopularPostsSection from "@/components/home/PopularPostsSection";
import ReadingStatsSection from "@/components/home/ReadingStatsSection";
import LatestStoriesSection from "@/components/home/LatestStoriesSection";
import CTASection from "@/components/home/CTASection";

export default function PublicHomeWrapper() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const navigate = useNavigate();

  const allTags = Array.from(new Set(demoBlogs.flatMap(blog => blog.tags || [])));
  
  const filteredBlogs = selectedTag
    ? demoBlogs.filter(blog => blog.tags?.includes(selectedTag))
    : demoBlogs;

  const featuredBlog = demoBlogs[0];

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen w-full">
      <HeroSection blog={featuredBlog} onBlogClick={handleBlogClick} />
      
      <RecentHighlightsSection 
        blogs={demoBlogs}
        onBlogClick={handleBlogClick}
      />
      
      <TopicsSection 
        tags={allTags} 
        selectedTag={selectedTag} 
        onTagSelect={setSelectedTag} 
      />
      
      <PopularPostsSection 
        blogs={demoBlogs}
        onBlogClick={handleBlogClick}
      />
      
      <ReadingStatsSection />
      
      <LatestStoriesSection 
        blogs={filteredBlogs} 
        selectedTag={selectedTag}
        onBlogClick={handleBlogClick} 
      />
      
      <CTASection />
    </div>
  );
}
