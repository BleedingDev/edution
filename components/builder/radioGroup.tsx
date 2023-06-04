import * as React from "react";
import { Label } from "@/components/ui/label";
import {
  RadioGroup as RadioGroupPrimitive,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Builder } from "@builder.io/react";
import { ExcludeFromTypeInference } from "@/lib/types";

type RadioGroupOption = {
  value: string;
  id: string;
  label: string;
};

interface RadioGroupProps<T extends RadioGroupOption = RadioGroupOption> {
  options: T[];
  defaultValue?: ExcludeFromTypeInference<T>["value"];
  disabled?: boolean;
}

export function RadioGroup<const T extends RadioGroupOption>({
  defaultValue,
  options,
  disabled,
}: RadioGroupProps<T>) {
  return (
    <RadioGroupPrimitive defaultValue={defaultValue} disabled={disabled}>
      {options.map((option) => (
        <div className="flex items-center space-x-2" key={option.id}>
          <RadioGroupItem value={option.value} id={option.id} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </RadioGroupPrimitive>
  );
}

export function registerRadioGroup() {
  Builder.registerComponent(RadioGroup, {
    name: "RadioGroup",
    inputs: [
      { name: "defaultValue", type: "string" },
      {
        name: "options",
        type: "list",
        subFields: [
          { name: "value", type: "string" },
          { name: "id", type: "string" },
          { name: "label", type: "string" },
          { name: "disabled", type: "boolean" },
        ],
      },
    ],
  });
}
