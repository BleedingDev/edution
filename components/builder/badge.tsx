import { Badge as BadgePrimitive } from "@/components/ui/badge";
import { PropsFrom } from "@/lib/types";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

interface BadgeProps {
  children: string;
  variant: PropsFrom<typeof BadgePrimitive>["variant"];
}

export function Badge({ children, variant }: BadgeProps) {
  return <BadgePrimitive variant={variant}>{children}</BadgePrimitive>;
}

export function registerBadge() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./badge").then((mod) => mod.Badge))),
    {
      name: "Badge",
      inputs: [
        { name: "children", type: "text" },
        { name: "variant", type: "string" },
      ],
      image: "",
    }
  );
}
