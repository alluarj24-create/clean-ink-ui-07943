import { Editor } from "@tiptap/react";
import { MenubarMenu } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { withEditorCommand } from "@/utils/editorUtils";

interface CodeBlockMenuProps {
  editor: Editor;
}

export function CodeBlockMenu({ editor }: CodeBlockMenuProps) {
  return (
    <MenubarMenu>
      <Button
        variant={editor.isActive("codeBlock") ? "default" : "outline"}
        size="sm"
        onMouseDown={withEditorCommand(
          editor,
          (editor) => editor.chain().focus().toggleCodeBlock(),
          (editor) =>
            !editor.isActive("blockquote") &&
            editor.can().chain().focus().toggleCodeBlock().run()
        )}
      >
        {"</>"}
      </Button>
    </MenubarMenu>
  );
}
