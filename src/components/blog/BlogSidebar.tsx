import { useState } from "react";
import { Heart, Bookmark, MessageSquare, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

interface BlogSidebarProps {
  likeCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  onLike: () => void;
  onBookmark: () => void;
  onScrollToComments: () => void;
}

export function BlogSidebar({
  likeCount,
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
  onScrollToComments,
}: BlogSidebarProps) {
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
    <TooltipProvider>
      <div className="hidden lg:block fixed left-8 top-1/3 z-10">
        <div className="flex flex-col gap-3 bg-background border border-border rounded-lg p-2 shadow-lg">
          {/* Like Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`flex flex-col h-auto py-2 ${
                  isLiked ? "text-red-500 hover:text-red-600" : ""
                }`}
                onClick={onLike}
              >
                <Heart
                  className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`}
                />
                <span className="text-xs mt-1">{likeCount}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{isLiked ? "Unlike" : "Like"} this post</p>
            </TooltipContent>
          </Tooltip>

          {/* Bookmark Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 ${
                  isBookmarked ? "text-primary" : ""
                }`}
                onClick={onBookmark}
              >
                <Bookmark
                  className={`h-5 w-5 ${isBookmarked ? "fill-primary" : ""}`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{isBookmarked ? "Remove bookmark" : "Bookmark"}</p>
            </TooltipContent>
          </Tooltip>

          {/* Comment Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10"
                onClick={onScrollToComments}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Jump to comments</p>
            </TooltipContent>
          </Tooltip>

          {/* Share Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10"
                onClick={handleShare}
              >
                {showCopied ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Share2 className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{showCopied ? "Copied!" : "Share this post"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
