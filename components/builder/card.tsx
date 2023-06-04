import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import {
  Card as CardPrimitive,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { iconUriList } from "./helpers/iconDataUri";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Card({ title, description, footer, children }: CardProps) {
  return (
    <CardPrimitive>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardPrimitive>
  );
}

export function registerCard() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./card").then((mod) => mod.Card))),
    {
      name: "Card",
      canHaveChildren: true,
      inputs: [
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "footer", type: "text" },
        { name: "children", type: "longText" },
      ],
      image: iconUriList.Card,
    }
  );
}
