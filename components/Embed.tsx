import React from "react"

interface Props {
  src: string
  title?: string
  width?: number
  height?: number
}

export function Embed({ src, title, width, height }: Props) {
  return (
    <iframe
      sandbox='allow-forms allow-scripts allow-same-origin'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      src={src}
      title={title}
      width={`${width ?? 300}px`}
      height={`${height ?? 100}px`}
      frameBorder='0'
      allowFullScreen
    ></iframe>
  )
}
