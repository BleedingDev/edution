"use client"

interface Props {
  text: { raw: string; html: string }
}

export function TextEditor({ text }: Props) {
  const __html = text.html?.replaceAll("novel-", "")

  return <div dangerouslySetInnerHTML={{ __html }} className='min-h-min' />
}
