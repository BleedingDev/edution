"use client"

import React, { ReactElement, ReactNode, useState } from "react"
import { Check, Copy } from "lucide-react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { Typography } from "./Typography"

const processChildren = (children: ReactNode | ReactNode[], forCopy = false): (string | ReactNode)[] => {
  if (Array.isArray(children)) {
    return children.flatMap((child: ReactNode | ReactElement, index) => {
      let concatenatedChildren = ""
      if (React.isValidElement(child) && child.props.children) {
        concatenatedChildren = Array.isArray(child.props.children)
          ? child.props.children.join("")
          : child.props.children
      } else if (typeof child === "string") {
        concatenatedChildren = child
      }
      // Append two <br /> tags or spaces after every child, except the last one
      return index < children.length - 1
        ? forCopy
          ? [concatenatedChildren, "  "]
          : [concatenatedChildren, <br key='space1' />, <br key='space2' />]
        : [concatenatedChildren]
    })
  } else {
    // If it's a single child, just return it without <br /> tags or spaces
    return [children]
  }
}

interface CopyTextProps {
  title?: string
  content: string
}

export function CopyText({ title = "Copy text below", content }: CopyTextProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const processedChildren = processChildren(content)
  const processedChildrenForCopy = processChildren(content, true)

  return (
    <div className='relative my-4 flex flex-col gap-2 rounded-lg p-2'>
      <div className='flex items-center justify-between gap-2'>
        <Typography variant='text'>{title}</Typography>
        <CopyToClipboard text={processedChildrenForCopy.join("")} onCopy={handleCopy}>
          <button className='flex gap-1'>
            {copied ? <Check size={24} color='green' /> : <Copy size={24} />}
            Copy
          </button>
        </CopyToClipboard>
      </div>
      <hr className='m-0 h-px border-none bg-gray-400' />
      <pre className='m-0 rounded-md p-2'>{processedChildren}</pre>
    </div>
  )
}
