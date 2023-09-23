import { ReactNode } from "react"
import NextLink from "next/link"

export function Link({ href, content }: { href: string; content: ReactNode }) {
  const isExternal = href.startsWith("http")
  const className = "leading-7 underline hover:text-muted-foreground block"

  if (!isExternal) {
    return (
      <NextLink className={className} href={href}>
        {content}
      </NextLink>
    )
  }

  return (
    <a href={href} target='_blank' rel='noreferrer' className={className}>
      {content} ↗️
    </a>
  )
}
