"use client";
import { BlockNoteEditor } from "@blocknote/core";

import { BlockNoteView, useBlockNote } from "@blocknote/react";

import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
}

const askAI = (editor: BlockNoteEditor) => {
  const currentBlock = editor.getTextCursorPosition().block;
  const suggestionBlock = {
    type: "text" as const,
    text: "text",
    styles: {
      bold: true,
    },
  } as const;

  editor.insertBlocks([suggestionBlock as any], currentBlock, "after");
};

const askAIMenuItem = {
  name: "Ask AI to brainstorm",
  execute: askAI,
  aliases: ["ai", "bs"],
  group: "Other",
  icon: <div>"🧠"</div>,
  hint: "Ask AI to brainstorm",
};

const onChange = (editor: any) => {
  console.log(editor);
};

const Editor = ({ initialContent, editable }: EditorProps) => {
  const resolvedTheme = useTheme().resolvedTheme;

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    slashMenuItems: [askAIMenuItem],
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
