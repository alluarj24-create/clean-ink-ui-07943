import { Editor } from "@tiptap/react";
import { MenubarMenu } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Highlighter } from "lucide-react";
import { withEditorCommand } from "@/utils/editorUtils";

interface HighlightMenuProps {
  editor: Editor;
}

export function HighlightMenu({ editor }: HighlightMenuProps) {
  return (
    <MenubarMenu>
      <Button
        variant={editor.isActive("highlight") ? "default" : "outline"}
        size="sm"
        onMouseDown={withEditorCommand(
          editor,
          (editor) => {
            return editor.isActive("highlight")
              ? editor.chain().focus().unsetHighlight()
              : editor.chain().focus().toggleHighlight({ color: "#ffc078" });
          },
          (editor) =>
            !editor.isActive("codeBlock") &&
            editor.can().chain().focus().toggleHighlight({ color: "#ffc078" }).run()
        )}
      >
        <Highlighter className="h-4 w-4 mr-1" />
        Highlight
      </Button>
    </MenubarMenu>
  );
}
