import { Textarea as TextareaPrimitive } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Builder } from "@builder.io/react";

interface TextareaWithTextProps {
  id: string;
  label: string;
  placeholder: string;
  text?: string;
}

export function Textarea({
  id,
  label,
  placeholder,
  text,
}: TextareaWithTextProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <TextareaPrimitive placeholder={placeholder} id={id} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function registerTextarea() {
  Builder.registerComponent(Textarea, {
    name: "Textarea",
    inputs: [
      { name: "id", type: "string" },
      { name: "label", type: "string" },
      { name: "placeholder", type: "string" },
      { name: "text", type: "string" },
    ],
  });
}
