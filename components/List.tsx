import { ReactNode } from "react";

interface Props {
  lists: { content: string }[];
  style: "ordered" | "unordered";
}

export const Tag = ({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style: "ordered" | "unordered";
  className: string;
}) => {
  if (style === "ordered") {
    return <ol className={`${className} list-decimal`}>{children}</ol>;
  }
  if (style === "unordered") {
    return <ul className={`${className} list-disc`}>{children}</ul>;
  }
};

export function List({ lists, style }: Props) {
  return (
    <Tag style={style} className="grid grid-cols-1 gap-1 ">
      {lists.map(({ content }) => (
        <li>{content}</li>
      ))}
    </Tag>
  );
}
