import {
  Sheet as SheetComponent,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Builder } from "@builder.io/react";

interface SheetProps {
  size?: "sm" | "lg" | "xl" | "full" | "content";
  position?: "top" | "right" | "bottom" | "left";
  triggerText: string;
  children: React.ReactNode;
}

export function Sheet({ size, position, triggerText, children }: SheetProps) {
  return (
    <SheetComponent>
      <SheetTrigger>
        <Button variant="outline">{triggerText}</Button>
      </SheetTrigger>
      <SheetContent size={size} position={position}>
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
      { name: "size", type: "string" },
      { name: "position", type: "string" },
      { name: "triggerText", type: "string" },
    ],
  });
}
