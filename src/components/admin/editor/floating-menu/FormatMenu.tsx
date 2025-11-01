import { Editor } from "@tiptap/react";
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { withEditorCommand } from "@/utils/editorUtils";

interface FormatMenuProps {
  editor: Editor;
}

export function FormatMenu({ editor }: FormatMenuProps) {
  return (
    <MenubarMenu>
      <MenubarTrigger>≡</MenubarTrigger>
      <MenubarContent>
        <MenubarItem
          onMouseDown={withEditorCommand(
            editor,
            (editor) => editor.chain().focus().toggleSubscript(),
            (editor) =>
              !editor.isActive("codeBlock") &&
              editor.can().chain().focus().toggleSubscript().run()
          )}
        >
          Subscript
        </MenubarItem>
        <MenubarItem
          onMouseDown={withEditorCommand(
            editor,
            (editor) => editor.chain().focus().toggleSuperscript(),
            (editor) =>
              !editor.isActive("codeBlock") &&
              editor.can().chain().focus().toggleSuperscript().run()
          )}
        >
          Superscript
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem
          onMouseDown={withEditorCommand(editor, (editor) =>
            editor.chain().focus().setTextAlign("left")
          )}
        >
          Align Left
        </MenubarItem>
        <MenubarItem
          onMouseDown={withEditorCommand(
            editor,
            (editor) => editor.chain().focus().setTextAlign("center"),
            (editor) =>
              !editor.isActive("codeBlock") &&
              editor.can().chain().focus().setTextAlign("center").run()
          )}
        >
          Align Center
        </MenubarItem>
        <MenubarItem
          onMouseDown={withEditorCommand(
            editor,
            (editor) => editor.chain().focus().setTextAlign("right"),
            (editor) =>
              !editor.isActive("codeBlock") &&
              editor.can().chain().focus().setTextAlign("right").run()
          )}
        >
          Align Right
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
}
