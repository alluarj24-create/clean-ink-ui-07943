import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract all h2 and h3 headings from blog content
    const blogContent = document.querySelector('.blog-content');
    if (!blogContent) return;

    const headingElements = blogContent.querySelectorAll('h2, h3');
    const headingData = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      };
    });

    setHeadings(headingData);

    // Intersection Observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 self-start">
      <div className="flex items-center gap-2 mb-4">
        <List className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold">On This Page</h3>
      </div>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors
                ${heading.level === 3 ? 'pl-4' : ''}
                ${activeId === heading.id 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }
              `}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
