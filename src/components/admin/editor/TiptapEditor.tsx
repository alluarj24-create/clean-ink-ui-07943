import { EditorContent } from "@tiptap/react";
import { useTiptapEditor } from "@/hooks/useTiptapEditor";
import { EditorToolbar } from "./EditorToolbar";
import { EditorProvider } from "@/context/EditorContext";

interface TiptapEditorProps {
  content?: string;
  onUpdate?: (content: string) => void;
  showToolbar?: boolean;
}

export function TiptapEditor({ content, onUpdate, showToolbar = true }: TiptapEditorProps) {
  const editor = useTiptapEditor({ content, onUpdate });

  if (!editor) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <p className="text-muted-foreground">Loading editor...</p>
      </div>
    );
  }

  return (
    <EditorProvider editor={editor}>
      <div className="relative border rounded-lg bg-background overflow-hidden">
        {showToolbar && <EditorToolbar editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </EditorProvider>
  );
}
