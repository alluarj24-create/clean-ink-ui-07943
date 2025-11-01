import { Editor } from "@tiptap/react";
import { MenubarMenu } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface ImageMenuProps {
  editor: Editor;
}

export function ImageMenu({ editor }: ImageMenuProps) {
  return (
    <MenubarMenu>
      <Button
        variant="outline"
        size="sm"
        onMouseDown={(e) => {
          e.preventDefault();
          const url = window.prompt("Enter image URL");
          if (!url) return;
          editor.chain().focus().setImage({ src: url }).run();
        }}
      >
        <ImageIcon className="h-4 w-4 mr-1" />
        Image
      </Button>
    </MenubarMenu>
  );
}
