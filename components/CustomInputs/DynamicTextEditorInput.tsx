import dynamic from "next/dynamic"

export const TextEditorInput = dynamic(() => import("./TextEditorInput").then((mod) => mod.TextEditorInput), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
