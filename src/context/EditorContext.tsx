import { createContext, useContext, ReactNode } from "react";
import { Editor } from "@tiptap/react";

interface EditorContextType {
  editor: Editor | null;
}

const EditorContext = createContext<EditorContextType>({ editor: null });

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within EditorProvider");
  }
  return context;
};

export const EditorProvider = ({
  children,
  editor,
}: {
  children: ReactNode;
  editor: Editor | null;
}) => {
  return (
    <EditorContext.Provider value={{ editor }}>
      {children}
    </EditorContext.Provider>
  );
};
