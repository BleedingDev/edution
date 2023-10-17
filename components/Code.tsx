"use server";
import { BuiltinLanguage, bundledThemes, getHighlighter } from "shikiji";

export async function Code({
  code,
  lang,
  showLines,
}: {
  code: string;
  lang: BuiltinLanguage;
  showLines?: boolean;
}) {
  const shiki = await getHighlighter({
    themes: Object.keys(bundledThemes),
    langs: [lang],
  });

  const html = shiki.codeToHtml(code, {
    lang,
    theme: "dark-plus",
  });

  return (
    <div
      className={`${showLines ? "lines" : ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
