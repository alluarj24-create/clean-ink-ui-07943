import { Editor } from "@tiptap/react";

export const withEditorCommand = (
  editor: Editor | null,
  commandFn: (editor: Editor) => any,
  canRunFn?: (editor: Editor) => boolean
) => {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!editor) return;
    
    // Check if command can run
    if (canRunFn && !canRunFn(editor)) return;
    
    // Execute the command
    const chain = commandFn(editor);
    if (chain && typeof chain.run === 'function') {
      chain.run();
    }
  };
};
