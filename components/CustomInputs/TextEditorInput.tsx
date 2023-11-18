"use client"

import { DialogEditor } from "components/DialogEditor"
import { Editor } from "novel"

export function TextEditorInput({ value, onChange }) {
  return (
    <DialogEditor description='Text is automatically saved, when you are done, close the editor and continue with building your course.'>
      <div className='h-full w-full'>
        <Editor
          defaultValue={value.raw}
          completionApi='/'
          onDebouncedUpdate={(editor) => {
            onChange({ raw: editor?.storage.markdown.getMarkdown(), html: editor?.getHTML() })
          }}
          disableLocalStorage
          className='mx-auto max-w-7xl'
        />
      </div>
    </DialogEditor>
  )
}
