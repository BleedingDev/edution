"use client"

import { useEffect, useState } from "react"
import { Excalidraw, exportToCanvas } from "@excalidraw/excalidraw"
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types"
import { Button } from "@shadcn/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/ui/dialog"

export function ExcalidrawInput({ onChange }) {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null)
  const [canvasUrl, setCanvasUrl] = useState("")

  useEffect(() => {
    onChange({ raw: canvasUrl })
  }, [canvasUrl])

  async function onExport() {
    if (!excalidrawAPI) return

    const elements = excalidrawAPI.getSceneElements()
    if (!elements || !elements.length) {
      return
    }

    const canvas = await exportToCanvas({
      elements,
      appState: {
        exportWithDarkMode: false,
      },
      files: excalidrawAPI.getFiles(),
      getDimensions: () => {
        return { width: 350, height: 350, scale: 0.7 }
      },
    })
    setCanvasUrl(canvas.toDataURL())
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
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
