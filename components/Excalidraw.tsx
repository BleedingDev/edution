"use client"

interface Props {
  diagram: {
    output: string
  }
}

export function Excalidraw({ diagram }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: diagram.output }} className='min-h-[30px]' />
}
