import { Slider as SliderPrimitive } from "@/components/ui/slider";
import { Builder } from "@builder.io/react";
import { Label } from "../ui/label";
import { iconUriList } from "./helpers/iconDataUri";

interface SliderProps {
  id: string;
  label: string;
  disabled?: boolean;
  text?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export function Slider({
  defaultValue,
  min,
  max,
  step,
  label,
  id,
  text,
  disabled,
}: SliderProps) {
  const value = defaultValue ? [defaultValue] : undefined;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <SliderPrimitive
        id={id}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        className="w-[60%]"
        disabled={disabled}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function registerSlider() {
  Builder.registerComponent(Slider, {
    name: "Slider",
    inputs: [
      { name: "defaultValue", type: "number" },
      { name: "id", type: "string" },
      { name: "min", type: "number" },
      { name: "max", type: "number" },
      { name: "step", type: "number" },
      { name: "label", type: "string" },
      { name: "text", type: "string" },
      { name: "disabled", type: "boolean" },
    ],
    image: iconUriList.Slider,
  });
}
