interface Props {
  lists: { content: string }[]
  ordered: boolean
}

export function List({ lists, ordered }: Props) {
  const Tag = ordered ? "ol" : "ul"
  const listStyle = ordered ? "list-decimal" : "list-disc"

  return (
    <Tag className={`${listStyle}`}>
      {lists.map(({ content }) => (
        <li key={content.replaceAll(" ", "").toLowerCase()}>{content}</li>
      ))}
    </Tag>
  )
}
