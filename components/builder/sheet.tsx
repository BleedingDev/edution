import {
  Sheet as SheetComponent,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Builder } from "@builder.io/react";
import { iconUriList } from "./helpers/iconDataUri";
import { ReactNode } from "react";

interface SheetProps {
  size?: "sm" | "lg" | "xl" | "full" | "content";
  position?: "top" | "right" | "bottom" | "left";
  triggerText: string;
  children: ReactNode;
  title: string;
  description: string;
}

export function Sheet({
  size,
  position,
  triggerText,
  children,
  title,
  description,
}: SheetProps) {
  return (
    <SheetComponent>
      <SheetTrigger>
        <Button variant="outline">{triggerText}</Button>
      </SheetTrigger>
      <SheetContent size={size} position={position}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </SheetComponent>
  );
}

export function registerSheet() {
  Builder.registerComponent(Sheet, {
    name: "Sheet",
    canHaveChildren: true,
    inputs: [
      { name: "triggerText", type: "text" },
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "children", type: "longText" },
      { name: "size", type: "text" },
      { name: "position", type: "text" },
    ],
    image: iconUriList.Sheet,
  });
}
