"use client"

interface Props {
  text: { raw: string; html: string }
}

export function TextEditor({ text }: Props) {
  // Necessary for later rendering to get all Tailwind classes
  const __html = text.html?.replaceAll("novel-", "")

  return <div dangerouslySetInnerHTML={{ __html }} className='min-h-[50px]' />
}
