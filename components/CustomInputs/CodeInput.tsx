"use client";

import { bundledLanguages, getHighlighter } from "shikiji";
import { FieldLabel } from "@measured/puck";
import { useEffect, useState } from "react";

const theme = "dark-plus";

const highlighter = getHighlighter({
  themes: [theme],
  langs: Object.keys(bundledLanguages),
});

export function CodeInput({ field, name, onChange, value }) {
  const [code, setCode] = useState(value);

  useEffect(() => {
    async function highlightCode() {
      const shiki = await highlighter;

      const html = shiki.codeToHtml(code.raw, {
        lang: "javascript",
        theme,
      });
      onChange({ raw: code.raw, processed: html });
    }

    highlightCode();
  }, [code]);

  return (
    <FieldLabel label={field.label || name}>
      <textarea
        className="w-full h-36 p-1"
        placeholder="Enter text..."
        name={name}
        defaultValue={value.raw}
        onChange={(e) => setCode({ raw: e.currentTarget.value, processed: "" })}
      ></textarea>
    </FieldLabel>
  );
}
