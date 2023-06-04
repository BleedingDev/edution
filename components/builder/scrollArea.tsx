import { ScrollArea as ScrollAreaComponent } from "@/components/ui/scroll-area";
import { Builder } from "@builder.io/react";

interface ScrollAreaProps {
  children: React.ReactNode;
  attributes?: Omit<React.HTMLAttributes<HTMLDivElement>, "dir">;
}

export function ScrollArea({ children, attributes }: ScrollAreaProps) {
  return (
    <ScrollAreaComponent
      {...attributes}
      className={`h-72 w-48 rounded-md border ${attributes?.className}`}
    >
      {children}
    </ScrollAreaComponent>
  );
}

export function registerScrollArea() {
  Builder.registerComponent(ScrollArea, {
    name: "ScrollArea",
    noWrap: true,
    canHaveChildren: true,
    inputs: [{ name: "children", type: "longText" }],
  });
}
