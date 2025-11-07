import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, Tag, Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AuthorBanner } from "@/components/blog/AuthorBanner";
import { CommentSection } from "@/components/blog/CommentSection";
import { RelatedBlogs } from "@/components/blog/RelatedBlogs";
import { BlogEngagementBar } from "@/components/blog/BlogEngagementBar";
import { PopularPostsSidebar } from "@/components/blog/PopularPostsSidebar";
import { toast } from "@/hooks/use-toast";

// Demo blog - replace with actual API call
const demoBlog = {
  _id: "1",
  title: "The Future of Web Development: Trends to Watch in 2025",
  slug: "future-web-development-2025",
  coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
  content: `
    <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. As we look ahead to 2025, several key trends are shaping the future of how we build for the web.</p>
    
    <h2>The Rise of AI-Assisted Development</h2>
    <p>Artificial intelligence is transforming how developers write code. From intelligent code completion to automated testing and bug detection, AI tools are becoming indispensable partners in the development process.</p>
    
    <blockquote>
      <p>"AI is not replacing developers; it's amplifying their capabilities and allowing them to focus on creative problem-solving rather than repetitive tasks."</p>
      <cite>— Sam Altman, CEO of OpenAI</cite>
    </blockquote>
    
    <p>Tools like GitHub Copilot and ChatGPT have shown us just the beginning of what's possible. The next generation of AI-powered development tools will be even more sophisticated, understanding context better and providing more accurate suggestions.</p>
    
    <h2>Server Components and Edge Computing</h2>
    <p>React Server Components and edge computing are revolutionizing application architecture. By moving computation closer to users and rendering on the server, we're seeing dramatic improvements in performance and user experience.</p>
    
    <pre><code>// Example of a Server Component
async function BlogPost({ id }) {
  const post = await db.posts.findById(id);
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/article&gt;
  );
}</code></pre>
    
    <p>This approach offers several benefits:</p>
    <ul>
      <li><strong>Reduced JavaScript bundle size</strong> - Server components don't ship to the client</li>
      <li><strong>Direct database access</strong> - No need for API layers in many cases</li>
      <li><strong>Improved SEO</strong> - Content is rendered on the server</li>
      <li><strong>Better performance</strong> - Faster initial page loads</li>
    </ul>
    
    <h2>The Jamstack Evolution</h2>
    <p>The Jamstack architecture continues to mature, with improved tooling and workflows that make it easier than ever to build fast, secure, and scalable web applications.</p>
    
    <blockquote>
      <p>"The future of the web is pre-rendered, distributed, and lightning fast."</p>
      <cite>— Mathias Biilmann, CEO of Netlify</cite>
    </blockquote>
    
    <p>Modern frameworks like Next.js, Remix, and Astro are pushing the boundaries of what's possible with static site generation and incremental static regeneration. The line between static and dynamic is becoming increasingly blurred.</p>
    
    <h3>Key Jamstack Features</h3>
    <ol>
      <li>Pre-rendering for optimal performance</li>
      <li>API-first approach for dynamic functionality</li>
      <li>Git-based workflows for content management</li>
      <li>Global CDN distribution for fast delivery</li>
    </ol>
    
    <p>Here's an example of inline code: <code>const result = await fetchData();</code></p>
    
    <p>And here's some <mark>highlighted text</mark> to emphasize important points.</p>
    
    <h3>Task List for Adopting These Trends</h3>
    <ul data-type="taskList">
      <li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked=""><span></span></label><div><p>Learn about React Server Components</p></div></li>
      <li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked=""><span></span></label><div><p>Explore edge computing platforms</p></div></li>
      <li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Experiment with AI coding assistants</p></div></li>
      <li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Build a Jamstack project</p></div></li>
    </ul>
    
    <p>These trends represent just the beginning of an exciting new chapter in web development. As developers, staying informed and adaptable will be key to success in this rapidly changing landscape.</p>
    
    <p style="text-align: center">This is centered text for emphasis.</p>
    
    <p>Remember: the best way to learn is by building. Start small, experiment with these technologies, and gradually incorporate them into your workflow.</p>
  `,
  tags: ["Web Development", "React", "AI", "Performance"],
  publishedAt: new Date().toISOString(),
  readingTime: 5,
  author: "Editorial Team"
};

const authorInfo = {
  name: "Editorial Team",
  bio: "A passionate developer and writer sharing insights on technology, personal growth, and everything in between.",
  socialLinks: {
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/in/example",
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const commentSectionRef = useRef<HTMLDivElement>(null);
  
  // Blog engagement state
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // In real app: const { data, isLoading, error } = useGetBlogBySlug(slug);
  const blog = demoBlog;

  // Add copy buttons to code blocks
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('.blog-content pre');
    
    codeBlocks.forEach((block) => {
      const htmlBlock = block as HTMLElement;
      
      // Check if button already exists
      if (htmlBlock.querySelector('.copy-button')) return;
      
      const button = document.createElement('button');
      button.className = 'copy-button absolute top-2 right-2 p-2 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all opacity-0';
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
      button.setAttribute('aria-label', 'Copy code');
      
      button.addEventListener('click', async () => {
        const code = htmlBlock.querySelector('code')?.textContent || '';
        try {
          await navigator.clipboard.writeText(code);
          button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
          toast({
            title: "Code copied!",
            description: "Code has been copied to clipboard.",
          });
          setTimeout(() => {
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
          }, 2000);
        } catch (error) {
          toast({
            title: "Failed to copy",
            description: "Please try again.",
            variant: "destructive",
          });
        }
      });
      
      htmlBlock.style.position = 'relative';
      htmlBlock.appendChild(button);
    });
  }, [blog.content]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
      toast({
        title: "Thanks for the love! ❤️",
        description: "You liked this post.",
      });
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark removed" : "Post bookmarked!",
      description: isBookmarked ? "Removed from your reading list." : "Added to your reading list.",
    });
  };

  const scrollToComments = () => {
    commentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-12">
      <div className="grid lg:grid-cols-[320px_1fr_320px] gap-8">
        {/* Left: Reserved space for visual balance */}
        <div className="hidden lg:block" />
        
        {/* Center: Main blog content */}
        <article className="max-w-[800px] mx-auto w-full">
          {/* Sticky Engagement Bar */}
          <BlogEngagementBar
            likeCount={likeCount}
            isLiked={isLiked}
            isBookmarked={isBookmarked}
            onLike={handleLike}
            onBookmark={handleBookmark}
            onScrollToComments={scrollToComments}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{blog.author}</span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time>{formatDate(blog.publishedAt)}</time>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{blog.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {blog.coverImage && (
            <figure className="mb-12 -mx-4 sm:mx-0">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
          )}

          {/* Content with Enhanced Styling */}
          <div 
            className="blog-content prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Footer Tags */}
          <footer className="mb-12 pt-8 border-t border-border">
            <div className="flex items-start gap-3">
              <Tag className="h-5 w-5 text-muted-foreground mt-1" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </footer>

          {/* Author Banner */}
          <div className="mb-12">
            <AuthorBanner {...authorInfo} />
          </div>

          {/* Comment Section */}
          <div ref={commentSectionRef} className="mb-12">
            <CommentSection />
          </div>

          {/* Popular Posts - Mobile Only (below comments) */}
          <div className="lg:hidden mb-12">
            <PopularPostsSidebar />
          </div>

          {/* Related Blogs */}
          <RelatedBlogs />
        </article>

        {/* Right: Popular Posts Sidebar - Desktop Only */}
        <aside className="hidden lg:block">
          {/* Future: Table of Contents will go here */}
          
          {/* Gap for ads */}
          <div className="mb-8" />
          
          {/* Popular Posts */}
          <PopularPostsSidebar />
        </aside>
      </div>
    </div>
  );
}
