import { Badge } from "@/components/ui/badge";

interface TopicsSectionProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TopicsSection({ tags, selectedTag, onTagSelect }: TopicsSectionProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          Explore Topics
        </h2>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm"
            onClick={() => onTagSelect(null)}
          >
            All Articles
          </Badge>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => onTagSelect(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
