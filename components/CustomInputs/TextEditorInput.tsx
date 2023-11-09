"use client"

import { Editor } from "novel"

export function TextEditorInput({ value, onChange }) {
  return (
    <div className='flex flex-col gap-4'>
      <Editor
        defaultValue={value.raw}
        completionApi='/'
        onDebouncedUpdate={(editor) => {
          onChange({ raw: editor?.storage.markdown.getMarkdown(), html: editor?.getHTML() })
        }}
        disableLocalStorage
      />
    </div>
  )
}
