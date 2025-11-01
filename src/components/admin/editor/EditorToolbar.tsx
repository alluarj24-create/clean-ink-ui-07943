import { Editor } from "@tiptap/react";
import { Menubar } from "@/components/ui/menubar";
import { ParagraphMenu } from "./floating-menu/ParagraphMenu";
import { FontMenu } from "./floating-menu/FontMenu";
import { SizeMenu } from "./floating-menu/SizeMenu";
import { BlockquoteMenu } from "./floating-menu/BlockquoteMenu";
import { CodeBlockMenu } from "./floating-menu/CodeBlockMenu";
import { ImageMenu } from "./floating-menu/ImageMenu";
import { LinkMenu } from "./floating-menu/LinkMenu";
import { HighlightMenu } from "./floating-menu/HighlightMenu";
import { FormatMenu } from "./floating-menu/FormatMenu";

interface EditorToolbarProps {
  editor: Editor;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  return (
    <div className="border-b bg-muted/30 p-2 sticky top-0 z-10">
      <Menubar className="bg-transparent border-none">
        <ParagraphMenu editor={editor} />
        <FontMenu editor={editor} />
        <SizeMenu editor={editor} />
        <BlockquoteMenu editor={editor} />
        <CodeBlockMenu editor={editor} />
        <ImageMenu editor={editor} />
        <LinkMenu editor={editor} />
        <HighlightMenu editor={editor} />
        <FormatMenu editor={editor} />
      </Menubar>
    </div>
  );
}
