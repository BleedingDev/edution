"use client"

import { Editor } from "novel"

export function Novel() {
  return (
    <Editor
      defaultValue={{
        content: [{ type: "paragraph", props: { children: [{ text: "Hello world" }] } }],
      }}
    />
  )
}
