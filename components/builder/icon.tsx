import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import * as icons from "lucide-react";

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
};

export function Icon({ name, color, size, className }: IconProps) {
  const LucideIcon: any = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon color={color} size={size} className={className} />;
}

export function registerIcon() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./icon").then((mod) => mod.Icon))),
    {
      name: "Icon",
      docsLink: "https://lucide.dev/icons",
      inputs: [
        { name: "name", type: "text" },
        { name: "color", type: "string" },
        { name: "size", type: "number" },
      ],
      image: "",
    }
  );
}
