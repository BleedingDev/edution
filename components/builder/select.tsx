import {
  Select as SelectPrimitive,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExcludeFromTypeInference } from "@/lib/types";
import { Builder } from "@builder.io/react";
import { Label } from "../ui/label";

type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps<T extends SelectOption = SelectOption> {
  placeholder: string;
  label: string;
  id: string;
  text: string;
  disabled?: boolean;
  defaultValue?: ExcludeFromTypeInference<T>["value"];
  options: T[];
}

export function Select<const T extends SelectOption>({
  placeholder,
  label,
  defaultValue,
  options,
  id,
  text,
  disabled,
}: SelectProps<T>) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <SelectPrimitive defaultValue={defaultValue} disabled={disabled}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent id={id}>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectPrimitive>
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export function registerSelect() {
  Builder.registerComponent(Select, {
    name: "Select",
    inputs: [
      { name: "placeholder", type: "string" },
      { name: "label", type: "string" },
      { name: "disabled", type: "boolean" },
      { name: "defaultValue", type: "string" },
      {
        name: "options",
        type: "list",
        subFields: [
          { name: "value", type: "string" },
          { name: "label", type: "string" },
        ],
      },
    ],
  });
}
