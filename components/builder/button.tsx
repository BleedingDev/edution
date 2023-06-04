import { Button as ButtonPrimitive } from "@/components/ui/button";
import { PropsFrom } from "@/lib/types";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Icon } from "./icon";

interface ButtonProps {
  children: ReactNode;
  variant?: PropsFrom<typeof ButtonPrimitive>["variant"];
  iconName?: PropsFrom<typeof Icon>["name"];
  asChild?: boolean;
}

export function Button({ children, variant, iconName }: ButtonProps) {
  return (
    <ButtonPrimitive variant={variant}>
      {iconName && <Icon name={iconName} className="h-4 w-4" />}
      {children}
    </ButtonPrimitive>
  );
}

export function registerButton() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./button").then((mod) => mod.Button))),
    {
      name: "Button",
      canHaveChildren: true,
      inputs: [
        { name: "children", type: "text" },
        {
          name: "variant",
          type: "string",
        },
        { name: "iconName", type: "string" },
      ],
      image: "",
    }
  );
}
