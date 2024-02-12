"use client";
import { BlockNoteEditor } from "@blocknote/core";

import { BlockNoteView, useBlockNote } from "@blocknote/react";

import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
}

const onChange = (editor: any) => {
  console.log(editor);
};

const Editor = ({ initialContent, editable }: EditorProps) => {
  const resolvedTheme = useTheme().resolvedTheme;

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange(editor) {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
