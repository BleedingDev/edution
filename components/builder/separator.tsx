import { Separator as SeparatorComponent } from "@/components/ui/separator";
import { Builder } from "@builder.io/react";
import { iconUriList } from "./helpers/iconDataUri";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  attributes?: React.HTMLAttributes<HTMLElement>;
}

export function Separator({ orientation, attributes }: SeparatorProps) {
  return (
    <SeparatorComponent
      orientation={orientation}
      {...attributes}
      className={attributes?.className}
    />
  );
}

export function registerSeparator() {
  Builder.registerComponent(Separator, {
    name: "Separator",
    noWrap: true,
    inputs: [
      {
        name: "orientation",
        type: "string",
        enum: ["horizontal", "vertical"],
      },
    ],
    image: iconUriList.Separator,
  });
}
