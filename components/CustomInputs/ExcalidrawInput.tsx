"use client"

import { useState } from "react"
import { Excalidraw, exportToSvg } from "@excalidraw/excalidraw"
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types"
import { Button } from "@shadcn/ui/button"
import { DialogEditor } from "components/DialogEditor"

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
    <DialogEditor description='Press export to save the diagram. You can close the window after you are finished.'>
      <div className='h-full w-full'>
        <Excalidraw
          excalidrawAPI={(api) => setExcalidrawAPI(api)}
          initialData={{ elements: value.raw }}
          renderTopRightUI={() => <Button onClick={onExport}>Export</Button>}
        />
      </div>
    </DialogEditor>
  )
}
