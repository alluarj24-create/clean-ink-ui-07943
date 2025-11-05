import { useState } from "react";
import { ThumbsUp, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Comment as CommentType } from "@/types/comment.types";
import { CommentInput } from "./CommentInput";

interface CommentProps {
  comment: CommentType;
  onLike: (id: string) => void;
  onReply: (id: string, content: string) => void;
  depth?: number;
}

export function Comment({ comment, onLike, onReply, depth = 0 }: CommentProps) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const maxDepth = 2;

  const handleReply = (content: string) => {
    onReply(comment.id, content);
    setShowReplyInput(false);
  };

  return (
    <div className={`${depth > 0 ? 'ml-8 mt-4' : 'mt-4'}`}>
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="shrink-0">
          {comment.avatar ? (
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-medium text-sm">{comment.author}</span>
            <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
          </div>
          
          <p className="text-sm text-foreground mb-2">{comment.content}</p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 gap-1"
              onClick={() => onLike(comment.id)}
            >
              <ThumbsUp className={`h-3 w-3 ${comment.isLiked ? 'fill-primary text-primary' : ''}`} />
              <span className="text-xs">{comment.likes}</span>
            </Button>

            {depth < maxDepth && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 gap-1"
                onClick={() => setShowReplyInput(!showReplyInput)}
              >
                <MessageSquare className="h-3 w-3" />
                <span className="text-xs">Reply</span>
              </Button>
            )}
          </div>

          {/* Reply Input */}
          {showReplyInput && (
            <div className="mt-3">
              <CommentInput
                onSubmit={handleReply}
                placeholder="Write a reply..."
                autoFocus
                onCancel={() => setShowReplyInput(false)}
              />
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="border-l-2 border-border pl-0 mt-2">
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  onLike={onLike}
                  onReply={onReply}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
