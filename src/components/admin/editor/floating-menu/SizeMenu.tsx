import { Editor } from "@tiptap/react";
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
import { withEditorCommand } from "@/utils/editorUtils";

interface SizeMenuProps {
  editor: Editor;
}

export function SizeMenu({ editor }: SizeMenuProps) {
  const sizes = [
    { label: "Small", class: "text-sm" },
    { label: "Medium", class: "text-base" },
    { label: "Large", class: "text-lg" },
    { label: "XL", class: "text-xl" },
  ];

  const defaultSize = "text-base";
  const nodeType = editor.isActive("heading") ? "heading" : "paragraph";
  const currentSize = editor.getAttributes(nodeType)?.class || defaultSize;
  const currentLabel = sizes.find((s) => s.class === currentSize)?.label || "Medium";

  return (
    <MenubarMenu>
      <MenubarTrigger>{currentLabel}</MenubarTrigger>
      <MenubarContent>
        {sizes
          .filter((s) => s.class !== currentSize)
          .map((s) => (
            <MenubarItem
              key={s.label}
              onMouseDown={withEditorCommand(editor, (editor) => {
                const node = editor.isActive("heading") ? "heading" : "paragraph";
                return editor.chain().focus().updateAttributes(node, {
                  class: s.class,
                });
              })}
            >
              {s.label}
            </MenubarItem>
          ))}
      </MenubarContent>
    </MenubarMenu>
  );
}
