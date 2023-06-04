import {
  AlertDialog as AlertDialogPrimitive,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PropsFrom } from "@/lib/types";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";

interface AlertDialogProps {
  triggerContent: string;
  triggerBtnVariant: PropsFrom<typeof Button>["variant"];
  title: string;
  description: string;
  cancelText: string;
  actionText: string;
  onCancel: () => void;
  onAction: () => void;
}

export function AlertDialog({
  triggerContent,
  triggerBtnVariant,
  title,
  description,
  cancelText,
  actionText,
  onCancel,
  onAction,
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive>
      <AlertDialogTrigger asChild>
        <Button variant={triggerBtnVariant}>{triggerContent}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogPrimitive>
  );
}

export function registerAlertDialog() {
  Builder.registerComponent(
    withChildren(
      dynamic(() => import("./alertDialog").then((mod) => mod.AlertDialog))
    ),
    {
      name: "AlertDialog",
      inputs: [
        { name: "triggerContent", type: "string" },
        { name: "triggerBtnVariant", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "cancelText", type: "text" },
        { name: "actionText", type: "text" },
        { name: "onCancel", type: "action" },
        { name: "onAction", type: "action" },
      ],
      image: "",
    }
  );
}
