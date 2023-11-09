"use client"

import { Editor } from "novel"

export function TextEditorInput(props) {
  const { value, onChange } = props
  console.log(value)

  const handleTextInput = (value?: unknown) => {
    onChange(value)
  }

  return (
    <div className='flex flex-col gap-4'>
      <Editor
        defaultValue={value.raw}
        completionApi='/'
        onDebouncedUpdate={(editor) => {
          console.log(editor?.storage)
          handleTextInput({ raw: editor?.storage.markdown.getMarkdown(), html: editor?.getHTML() })
        }}
        disableLocalStorage
      />
    </div>
  )
}
