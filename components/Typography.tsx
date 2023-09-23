const variants = {
  h1: {
    tag: "h1",
    className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  },
  h2: {
    tag: "h2",
    className: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  },
  h3: {
    tag: "h3",
    className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
  },
  h4: {
    tag: "h4",
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
  },
  text: {
    tag: "p",
    className: "leading-7 [&:not(:first-child)]:mt-6",
  },
  quote: {
    tag: "blockquote",
    className: "mt-6 border-l-2 pl-6 italic",
  },
} as const

interface Props {
  text: string
  variant: keyof typeof variants
}

export function Typography({ text, variant }: Props) {
  const Component = variants[variant].tag
  const className = variants[variant].className
  return <Component className={className}>{text}</Component>
}
