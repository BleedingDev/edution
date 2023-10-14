"use client";
import React, { ReactNode, useState, ReactElement } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, Copy } from "lucide-react";
import { Typography } from "./Typography";

const processChildren = (
  children: ReactNode | ReactNode[],
  forCopy = false
): (string | ReactNode)[] => {
  if (Array.isArray(children)) {
    return children.flatMap((child: ReactNode | ReactElement, index) => {
      let concatenatedChildren = "";
      if (React.isValidElement(child) && child.props.children) {
        concatenatedChildren = Array.isArray(child.props.children)
          ? child.props.children.join("")
          : child.props.children;
      } else if (typeof child === "string") {
        concatenatedChildren = child;
      }
      // Append two <br /> tags or spaces after every child, except the last one
      return index < children.length - 1
        ? forCopy
          ? [concatenatedChildren, "  "]
          : [concatenatedChildren, <br />, <br />]
        : [concatenatedChildren];
    });
  } else {
    // If it's a single child, just return it without <br /> tags or spaces
    return [children];
  }
};

interface CopyTextProps {
  title?: string;
  content: string;
}

export function CopyText({
  title = "Copy text below",
  content,
}: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const processedChildren = processChildren(content);
  const processedChildrenForCopy = processChildren(content, true);

  return (
    <div className="flex flex-col gap-2 p-2 rounded-lg my-4 relative">
      <div className="flex items-center justify-between gap-2">
        <Typography variant="text">{title}</Typography>
        <CopyToClipboard
          text={processedChildrenForCopy.join("")}
          onCopy={handleCopy}
        >
          <button className="flex gap-1">
            {copied ? <Check size={24} color="green" /> : <Copy size={24} />}
            Copy
          </button>
        </CopyToClipboard>
      </div>
      <hr className="border-none h-px bg-gray-400 m-0" />
      <pre className="rounded-md p-2 m-0">{processedChildren}</pre>
    </div>
  );
}
