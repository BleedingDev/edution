import { Data } from "@measured/puck"

import { aiPage } from "./aiPage"
import { mainPage } from "./mainPage"
import { mediaPage } from "./mediaPage"
import { textPage } from "./textPage"

export const getPage = (path: string): Data | null => {
  const allData: Record<string, Data> | null = null

  return allData ? allData[path] : null
}

export const getDemoPage = (path: string): Data => {
  return pages[path] ?? defaultDemoPage(path)
}

const defaultDemoPage = (path: string) => ({
  content: [
    {
      type: "Link",
      props: {
        href: `/demo${path}edit`,
        content: "Edit this page",
        id: "Link-1695576376753",
      },
    },
  ],
  root: { props: { title: "Default  page" } },
})

const pages = {
  "/": mainPage,
  "/media": mediaPage,
  "/ai": aiPage,
  "/text": textPage,
}
