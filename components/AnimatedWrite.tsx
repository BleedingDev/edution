"use client";
import { useState } from "react";
import { PropsFrom } from "@utils/types";
import { TypeAnimation } from "react-type-animation";

type TypeAnimationTypes = PropsFrom<typeof TypeAnimation>;

interface Props {
  texts: { text: string; speed: number; colour: string }[];
  tag: TypeAnimationTypes["wrapper"];
}

export function AnimatedWrite({ texts, tag }: Props) {
  const [textColor, setTextColor] = useState("inherit");

  const sequence = texts.flatMap((s) => [
    s.text,
    s.speed,
    () => setTextColor(s.colour || "inherit"),
  ]);

  return (
    <div
      className="transition-colors duration-1000"
      style={{ color: textColor }}
    >
      <TypeAnimation
        className="after:ml-0.5 after:animate-blink after:opacity-10 after:content-['|']"
        preRenderFirstString={true}
        cursor={false}
        sequence={sequence}
        speed={{ type: "keyStrokeDelayInMs", value: 150 }}
        deletionSpeed={{ type: "keyStrokeDelayInMs", value: 75 }}
        repeat={Infinity}
        wrapper={tag}
      />
    </div>
  );
}
