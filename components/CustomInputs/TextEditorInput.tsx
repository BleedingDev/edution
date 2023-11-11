"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@shadcn/ui/dialog"
import { Editor } from "novel"

export function TextEditorInput({ value, onChange }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='rounded-lg border py-2 text-center'>
      <button onClick={() => setOpenModal(() => true)} className='w-full'>
        Open Editor
      </button>
      <Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
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
