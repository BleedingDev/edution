import {
  Accordion as AccordionPrimitive,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { iconUriList } from "./helpers/iconDataUri";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionDemoProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionDemoProps) {
  return (
    <AccordionPrimitive type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive>
  );
}

export function registerAccordion() {
  Builder.registerComponent(
    withChildren(
      dynamic(() => import("./accordion").then((mod) => mod.Accordion))
    ),
    {
      name: "Accordion",
      inputs: [
        {
          name: "items",
          type: "list",
          subFields: [
            { name: "title", type: "text" },
            { name: "content", type: "text" },
          ],
        },
      ],
      image: iconUriList.Accordion,
    }
  );
}
