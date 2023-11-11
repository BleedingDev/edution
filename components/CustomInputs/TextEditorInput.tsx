"use client"

import { Dialog, DialogContent, DialogTrigger } from "@shadcn/ui/dialog"
import { Editor } from "novel"

export function TextEditorInput({ value, onChange }) {
  return (
    <div className='rounded-lg border py-2 text-center'>
      <Dialog>
        <DialogTrigger className='w-full'>Open Editor</DialogTrigger>
        <DialogContent className='w-full'>
          <Editor
            defaultValue={value.raw}
            completionApi='/'
            onDebouncedUpdate={(editor) => {
              onChange({ raw: editor?.storage.markdown.getMarkdown(), html: editor?.getHTML() })
            }}
            disableLocalStorage
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
