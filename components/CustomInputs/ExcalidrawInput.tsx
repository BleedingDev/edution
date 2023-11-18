"use client"

import { useState } from "react"
import { Excalidraw, exportToSvg } from "@excalidraw/excalidraw"
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types"
import { Button } from "@shadcn/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/ui/dialog"

export function ExcalidrawInput({ value, onChange }) {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null)

  async function onExport() {
    if (!excalidrawAPI) return

    const sceneElements = excalidrawAPI.getSceneElements()
    if (!sceneElements || !sceneElements.length) {
      return
    }

    const svg = await exportToSvg({
      elements: sceneElements,
      appState: {
        exportWithDarkMode: false,
      },
      files: excalidrawAPI.getFiles(),
    })
    console.log({ output: svg.outerHTML, raw: sceneElements })
    onChange({ output: svg.outerHTML, raw: sceneElements })
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger className='w-full border py-2'>Open Editor</DialogTrigger>
        <DialogContent className='flex h-[90vh] w-screen max-w-7xl flex-col items-center'>
          <h2 className='text-2xl font-semibold'>Coursition - Excalidraw</h2>
          <Excalidraw
            excalidrawAPI={(api) => setExcalidrawAPI(api)}
            renderTopRightUI={() => <Button onClick={onExport}>Export</Button>}
            initialData={{ elements: value.raw }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
