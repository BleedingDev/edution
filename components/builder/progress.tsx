import { Progress } from "@/components/ui/progress";
import { Builder } from "@builder.io/react";

export { Progress };

export function registerProgress() {
  Builder.registerComponent(Progress, {
    name: "Progress",
    inputs: [{ name: "progress", type: "number" }],
    image: "",
  });
}
