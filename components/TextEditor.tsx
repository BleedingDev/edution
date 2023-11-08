"use client"

interface Props {
  text: string
}
export function TextEditor({ text }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: text }} className='min-h-[400px] bg-red-500' />
}
