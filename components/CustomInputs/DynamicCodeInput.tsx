import dynamic from "next/dynamic"

export const CodeInput = dynamic(() => import("./CodeInput").then((mod) => mod.CodeInput), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
