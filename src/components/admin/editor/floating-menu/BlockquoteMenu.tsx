import { Editor } from "@tiptap/react";
import { MenubarMenu } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { withEditorCommand } from "@/utils/editorUtils";

interface BlockquoteMenuProps {
  editor: Editor;
}

export function BlockquoteMenu({ editor }: BlockquoteMenuProps) {
  return (
    <MenubarMenu>
      <Button
        variant={editor.isActive("blockquote") ? "default" : "outline"}
        className="italic border-l-4 border-border"
        size="sm"
        onMouseDown={withEditorCommand(
          editor,
          (editor) => editor.chain().focus().toggleBlockquote(),
          (editor) =>
            !editor.isActive("codeBlock") &&
            editor.can().chain().focus().toggleBlockquote().run()
        )}
      >
        BlockQuote
      </Button>
    </MenubarMenu>
  );
}
