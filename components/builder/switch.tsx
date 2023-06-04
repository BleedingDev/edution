import { Label } from "@/components/ui/label";
import { Switch as SwitchPrimitive } from "@/components/ui/switch";
import { Builder } from "@builder.io/react";

interface SwitchProps {
  label: string;
  id: string;
  subtext?: string;
  disabled?: boolean;
}

export function Switch({ label, subtext, id, disabled }: SwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitive id={id} disabled={disabled} />
      <div className="grid gap-1.5 leading-none">
        {label && <Label htmlFor={id}>{label}</Label>}
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      </div>
    </div>
  );
}

export function registerSwitch() {
  Builder.registerComponent(Switch, {
    name: "Switch",
    inputs: [
      { name: "label", type: "string" },
      { name: "subtext", type: "string" },
      { name: "id", type: "string" },
      { name: "disabled", type: "boolean" },
    ],
  });
}
