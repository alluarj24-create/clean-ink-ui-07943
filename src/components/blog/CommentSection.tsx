import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Comment as CommentType } from "@/types/comment.types";
import { Comment } from "./Comment";
import { CommentInput } from "./CommentInput";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - replace with actual API call
const mockComments: CommentType[] = [
  {
    id: "1",
    author: "Sarah Chen",
    avatar: "",
    content: "Great article! The insights on web development trends are spot on. I particularly enjoyed the section on AI-assisted development.",
    timestamp: "2 hours ago",
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: "Editorial Team",
        avatar: "",
        content: "Thank you for the kind words! We're excited about the AI developments too.",
        timestamp: "1 hour ago",
        likes: 5,
        isLiked: false,
      }
    ]
  },
  {
    id: "2",
    author: "Alex Johnson",
    avatar: "",
    content: "I've been using server components in my projects and the performance improvement is incredible. Would love to see more content on this topic!",
    timestamp: "5 hours ago",
    likes: 8,
    isLiked: false,
  },
  {
    id: "3",
    author: "Maria Garcia",
    avatar: "",
    content: "The Jamstack section was very informative. Do you have any recommendations for getting started with edge functions?",
    timestamp: "1 day ago",
    likes: 15,
    isLiked: false,
    replies: [
      {
        id: "3-1",
        author: "Editorial Team",
        avatar: "",
        content: "Great question! I'm planning a dedicated article on edge functions. Stay tuned!",
        timestamp: "18 hours ago",
        likes: 7,
        isLiked: false,
      }
    ]
  }
];

export function CommentSection() {
  const [comments, setComments] = useState<CommentType[]>(mockComments);

  const handleAddComment = (content: string) => {
    const newComment: CommentType = {
      id: Date.now().toString(),
      author: "You",
      avatar: "",
      content,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
    };
    setComments([newComment, ...comments]);
  };

  const handleLike = (id: string) => {
    const updateCommentLike = (comments: CommentType[]): CommentType[] => {
      return comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: updateCommentLike(comment.replies),
          };
        }
        return comment;
      });
    };
    setComments(updateCommentLike(comments));
  };

  const handleReply = (parentId: string, content: string) => {
    const newReply: CommentType = {
      id: `${parentId}-${Date.now()}`,
      author: "You",
      avatar: "",
      content,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
    };

    const addReplyToComment = (comments: CommentType[]): CommentType[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies),
          };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
  };

  return (
    <div className="border border-border rounded-lg p-6 bg-background">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5" />
        <h3 className="font-serif text-2xl font-bold">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Add Comment */}
      <div className="mb-6">
        <CommentInput onSubmit={handleAddComment} />
      </div>

      {/* Comments List */}
      <ScrollArea className="max-h-[600px] pr-4">
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onLike={handleLike}
                onReply={handleReply}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No comments yet. Be the first to comment!
          </p>
        )}
      </ScrollArea>
    </div>
  );
}
