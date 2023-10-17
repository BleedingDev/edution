"use client";

import { bundledLanguages, getHighlighter } from "shikiji";
import { FieldLabel } from "@measured/puck";
import { useEffect, useState } from "react";
import { supportedLangs } from "puck.config";
import { Separator } from "@shadcn/ui/separator";

const theme = "dark-plus";

const highlighter = getHighlighter({
  themes: [theme],
  langs: Object.keys(bundledLanguages),
});

export function CodeInput(props) {
  const { onChange, value } = props;
  const [code, setCode] = useState(value);

  useEffect(() => {
    async function highlightCode() {
      const shiki = await highlighter;

      const html = shiki.codeToHtml(code.raw, {
        lang: code.lang,
        theme,
      });
      onChange({ raw: code.raw, processed: html, lang: code.lang });
    }

    highlightCode();
  }, [code.raw, code.lang]);

  return (
    <div className="flex flex-col gap-4">
      <FieldLabel label="Code">
        <textarea
          className="w-full h-36 p-1"
          placeholder="Enter code..."
          name="code"
          defaultValue={value.raw}
          onChange={(e) =>
            setCode({ raw: e.currentTarget.value, processed: "" })
          }
        />
      </FieldLabel>
      <Separator className="w-full" />
      <FieldLabel label="Language">
        <input
          id="language"
          list="languages"
          className="w-full p-1"
          placeholder="Choose language..."
          name="language"
          defaultValue={value.lang}
          onChange={(e) =>
            setCode({
              raw: code.raw,
              processed: code.processed,
              lang: e.currentTarget.value,
            })
          }
        />
        <datalist id="languages">
          {supportedLangs.map((l) => (
            <option value={l} />
          ))}
        </datalist>
      </FieldLabel>
    </div>
  );
}
