import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";
import { Builder } from "@builder.io/react";
import { Label } from "../ui/label";

interface CheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  subtext?: string;
}

export function Checkbox({ id, label, subtext, disabled }: CheckboxProps) {
  return (
    <div className="items-top flex space-x-2">
      <CheckboxPrimitive id={id} disabled={disabled} />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id}>{label}</Label>
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      </div>
    </div>
  );
}

export function registerCheckbox() {
  Builder.registerComponent(Checkbox, {
    name: "Checkbox",
    inputs: [
      { name: "id", type: "text" },
      { name: "label", type: "text" },
      { name: "subtext", type: "longText" },
      { name: "disabled", type: "boolean" },
    ],
    image: "",
  });
}
