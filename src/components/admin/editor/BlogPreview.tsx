import DOMPurify from 'dompurify';

interface BlogPreviewProps {
  title: string;
  coverImage: string;
  content: string;
}

export function BlogPreview({ title, coverImage, content }: BlogPreviewProps) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Live Preview</p>
        <div className="border-l-4 border-primary pl-3">
          <p className="text-sm text-muted-foreground">This is how your blog will appear</p>
        </div>
      </div>

      <article className="space-y-6">
        {/* Title */}
        {title && (
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        )}

        {/* Cover Image */}
        {coverImage && (
          <div className="rounded-lg overflow-hidden border">
            <img
              src={coverImage}
              alt={title || "Blog cover"}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        )}

        {/* Content */}
        {content && (
          <div
            className="blog-content prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        )}

        {/* Empty State */}
        {!title && !coverImage && !content && (
          <div className="flex items-center justify-center h-64 border border-dashed rounded-lg">
            <p className="text-muted-foreground text-sm">
              Start writing to see your preview
            </p>
          </div>
        )}
      </article>
    </div>
  );
}
