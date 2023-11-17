"use client"

import { useEffect, useState } from "react"
import { Excalidraw, exportToCanvas } from "@excalidraw/excalidraw"
import { NonDeletedExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types"
import { Button } from "@shadcn/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@shadcn/ui/dialog"

export function ExcalidrawInput({ onChange }) {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null)
  const [elements, setElements] = useState<readonly NonDeletedExcalidrawElement[]>([])
  const [canvasUrl, setCanvasUrl] = useState("")

  useEffect(() => {
    onChange({ raw: canvasUrl })
  }, [canvasUrl])

  async function onExport() {
    if (!excalidrawAPI) return

    const sceneElements = excalidrawAPI.getSceneElements()
    if (!sceneElements || !sceneElements.length) {
      return
    }

    setElements((prev) => [...prev, ...sceneElements])

    const canvas = await exportToCanvas({
      elements: sceneElements,
      appState: {
        exportWithDarkMode: false,
      },
      files: excalidrawAPI.getFiles(),
      getDimensions: () => {
        return { width: 350, height: 350, scale: 0.3 }
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
            initialData={{ elements }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
