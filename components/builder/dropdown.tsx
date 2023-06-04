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

interface DropdownMenuProps {
  triggerText: string;
  label: string;
}

export function Dropdown({
  triggerText,
  label,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
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
      { name: "triggerText", type: "text" },
      { name: "label", type: "text" },
      { name: "children", type: "longText" },
    ],
    image: "",
  });
}
