"use client"

import Image from "next/image"

interface Props {
  text: {
    raw: string
    html: string
  }
}

export function Excalidraw({ text }: Props) {
  const canvas = text.raw
  return canvas ? (
    <Image src={canvas} width={500} height={500} alt='Coursition - Excalidraw' className='p-6' />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: text.html }} />
  )
}
