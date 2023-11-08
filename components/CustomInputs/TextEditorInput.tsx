"use client"

import { Editor } from "novel"

export function TextEditorInput(props) {
  const { onChange } = props

  const handleTextInput = (value) => {
    onChange(value)
  }

  return (
    <div className='flex flex-col gap-4'>
      <Editor completionApi='/' editorProps={{ handleTextInput }} />
    </div>
  )
}
