import { ChevronsUpDown } from "lucide-react";
import { Builder, withChildren } from "@builder.io/react";

import { Button } from "@/components/ui/button";
import {
  Collapsible as CollapsiblePrimitive,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { iconUriList } from "./helpers/iconDataUri";

interface CollapsibleProps {
  title: string;
  shownContent?: string;
}

export function Collapsible({
  title,
  shownContent,
  children,
}: React.PropsWithChildren<CollapsibleProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapsiblePrimitive
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {shownContent && (
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          {shownContent}
        </div>
      )}
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </CollapsiblePrimitive>
  );
}

export function registerCollapsible() {
  Builder.registerComponent(withChildren(Collapsible), {
    name: "Collapsible",
    canHaveChildren: true,
    inputs: [
      { name: "title", type: "text" },
      { name: "shownContent", type: "text" },
      { name: "children", type: "longText" },
    ],
    image: iconUriList.Collapsible,
  });
}
