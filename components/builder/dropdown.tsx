import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Builder, withChildren } from "@builder.io/react";
import { iconUriList } from "./helpers/iconDataUri";
import { Icon } from "./icon";
import { PropsFrom } from "@/lib/types";

interface DropdownMenuProps {
  triggerText: string;
  label: string;
  iconName?: PropsFrom<typeof Icon>["name"];
}

export function Dropdown({
  triggerText,
  iconName,
  label,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {iconName && <Icon name={iconName} className="h-4 w-4" />}
          {triggerText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function registerDropdown() {
  Builder.registerComponent(withChildren(Dropdown), {
    name: "Dropdown",
    canHaveChildren: true,
    inputs: [
      { name: "iconName", type: "text" },
      { name: "triggerText", type: "text" },
      { name: "label", type: "text" },
      { name: "children", type: "longText" },
    ],
    image: iconUriList.DropdownMenu,
  });
}
