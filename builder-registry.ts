"use client"

import { Builder } from "@builder.io/react"
import { AnimatedWrite } from "components/AnimatedWrite"

Builder.registerComponent(AnimatedWrite, {
  name: "AnimatedWrite",
  inputs: [
    {
      name: "texts",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "speed",
          type: "number",
        },
        {
          name: "colour",
          type: "color",
        },
      ],
    },
    { name: "tag", type: "text" },
  ],
})
