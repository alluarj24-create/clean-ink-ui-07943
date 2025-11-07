import { useState } from "react";
import { Heart, Bookmark, MessageSquare, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface BlogEngagementBarProps {
  likeCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  onLike: () => void;
  onBookmark: () => void;
  onScrollToComments: () => void;
}

export function BlogEngagementBar({
  likeCount,
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
  onScrollToComments,
}: BlogEngagementBarProps) {
  const [showCopied, setShowCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      toast({
        title: "Link copied!",
        description: "Blog link has been copied to clipboard.",
      });
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="sticky top-16 z-20 -mx-4 sm:-mx-0 mb-8 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-center gap-6 py-3 px-4">
        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${
            isLiked ? "text-red-500 hover:text-red-600" : ""
          }`}
          onClick={onLike}
        >
          <Heart
            className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`}
          />
          <span className="text-sm font-medium">{likeCount}</span>
        </Button>

        {/* Bookmark Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${
            isBookmarked ? "text-primary" : ""
          }`}
          onClick={onBookmark}
        >
          <Bookmark
            className={`h-5 w-5 ${isBookmarked ? "fill-primary" : ""}`}
          />
          <span className="text-sm font-medium hidden sm:inline">Save</span>
        </Button>

        {/* Comment Button */}
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={onScrollToComments}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-sm font-medium hidden sm:inline">Comment</span>
        </Button>

        {/* Share Button */}
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={handleShare}
        >
          {showCopied ? (
            <>
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500 hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="h-5 w-5" />
              <span className="text-sm font-medium hidden sm:inline">Share</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
