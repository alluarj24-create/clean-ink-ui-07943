import { Editor } from "@tiptap/react";
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { withEditorCommand } from "@/utils/editorUtils";

interface FontMenuProps {
  editor: Editor;
}

export function FontMenu({ editor }: FontMenuProps) {
  const fonts = ["Inter", "Serif", "Mono", "Comic Sans", "Times"];
  const currentFont = editor?.getAttributes("textStyle")?.fontFamily || "Mono";

  return (
    <MenubarMenu>
      <MenubarTrigger>{currentFont}</MenubarTrigger>
      <MenubarContent>
        {fonts
          .filter((font) => font !== currentFont)
          .map((font) => (
            <MenubarItem
              key={font}
              onMouseDown={withEditorCommand(editor, (editor) =>
                editor.chain().focus().setMark("textStyle", { fontFamily: font })
              )}
            >
              {font}
            </MenubarItem>
          ))}
      </MenubarContent>
    </MenubarMenu>
  );
}
