"use client"

interface Props {
  text: {
    html: string
  }
}

export function Excalidraw({ text }: Props) {
  const __html = text.html
  return <div dangerouslySetInnerHTML={{ __html }} />
}
