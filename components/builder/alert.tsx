import { PropsFrom } from "@/lib/types";
import {
  Alert as AlertPrimitive,
  AlertDescription,
  AlertTitle,
} from "../ui/alert";
import { Icon } from "./icon";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { iconUriList } from "./helpers/iconDataUri";

interface AlertProps {
  title: string;
  description: string;
  iconName?: PropsFrom<typeof Icon>["name"];
}

export function Alert({ title, description, iconName }: AlertProps) {
  return (
    <AlertPrimitive>
      {iconName && <Icon name={iconName} className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertPrimitive>
  );
}

export function registerAlert() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./alert").then((mod) => mod.Alert))),
    {
      name: "Alert",
      inputs: [
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "iconName", type: "text" },
      ],
      image: iconUriList.Alert,
    }
  );
}
