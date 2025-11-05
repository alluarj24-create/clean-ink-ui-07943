import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CommentInputProps {
  onSubmit: (content: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onCancel?: () => void;
}

export function CommentInput({ onSubmit, placeholder = "Add a comment...", autoFocus, onCancel }: CommentInputProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="space-y-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className="min-h-[80px] resize-none"
        autoFocus={autoFocus}
      />
      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button 
          size="sm" 
          onClick={handleSubmit}
          disabled={!content.trim()}
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
