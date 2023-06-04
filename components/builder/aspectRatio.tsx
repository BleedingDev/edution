import { AspectRatio as AspectRatioPrimitive } from "@/components/ui/aspect-ratio";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { iconUriList } from "./helpers/iconDataUri";

interface AspectRatioProps {
  ratio: number;
  children: ReactNode;
}

export function AspectRatio({ ratio, children }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive ratio={ratio} className="bg-muted overflow-hidden">
      {children}
    </AspectRatioPrimitive>
  );
}

export function registerAspectRatio() {
  Builder.registerComponent(
    withChildren(
      dynamic(() => import("./aspectRatio").then((mod) => mod.AspectRatio))
    ),
    {
      name: "AspectRatio",
      canHaveChildren: true,
      inputs: [{ name: "ratio", type: "number", defaultValue: 16 / 9 }],
      image: iconUriList.AspectRatio,
    }
  );
}
