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
      referrerPolicy='no-referrer'
      sandbox='allow-forms allow-scripts allow-same-origin'
      src={src}
      title={title}
      width={`${width ?? 300}px`}
      height={`${height ?? 100}px`}
      frameBorder='0'
      allowFullScreen
    ></iframe>
  )
}
