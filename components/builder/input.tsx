import { Input as InputPrimitive } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Builder } from "@builder.io/react";

interface InputWithTextProps {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  text?: string;
  disabled?: boolean;
}

export function Input({
  label,
  placeholder,
  type,
  id,
  text,
  disabled,
}: InputWithTextProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <InputPrimitive
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function registerInput() {
  Builder.registerComponent(Input, {
    name: "InputWithText",
    inputs: [
      { name: "label", type: "text" },
      { name: "placeholder", type: "text" },
      { name: "type", type: "text" },
      { name: "id", type: "text" },
      { name: "text", type: "text" },
      { name: "disabled", type: "boolean" },
    ],
    image: "",
  });
}
