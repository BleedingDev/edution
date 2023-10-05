interface Props {
  lists: { content: string }[];
}
export function List({ lists }: Props) {
  const className = "grid grid-cols-1 gap-1 list-decimal";
  return (
    <ul className={className}>
      {lists.map((list, idx) => {
        const { content } = list;
        return <li key={idx}>{content}</li>;
      })}
    </ul>
  );
}
