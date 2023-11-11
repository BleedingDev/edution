"use client"

import { Dialog, DialogContent, DialogTrigger } from "@shadcn/ui/dialog"
import { Editor } from "novel"

export function TextEditorInput({ value, onChange }) {
  return (
    <div className='rounded-lg border py-2 text-center'>
      <Dialog>
        <DialogTrigger className='w-full'>Open Editor</DialogTrigger>

        <DialogContent className='flex h-[90vh] w-full flex-col gap-4'>
          <span className='mt-2 text-center text-sm'>
            Text is automatically saved, when you are done, close the editor and continue with building your course.
          </span>
          <Editor
            defaultValue={value.raw}
            completionApi='/'
            onDebouncedUpdate={(editor) => {
              onChange({ raw: editor?.storage.markdown.getMarkdown(), html: editor?.getHTML() })
            }}
            disableLocalStorage
            className='max-h-[80vh] w-full'
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
