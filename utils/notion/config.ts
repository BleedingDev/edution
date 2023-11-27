export const rootNotionPageId = "95ae89c4af514c94bec8d2968f0a3a43"
export const rootNotionSpaceId = undefined

// NOTE: having this enabled can be pretty expensive as it re-generates preview
// images each time a page is built. In a production setting, we recommend that
// you cache the preview image results in a key-value database.
export const previewImagesEnabled = true

// Whether to use the official public Notion API or the unofficial private API.
// Note that the official API doesn't expose formatting options for many blocks
// and is currently not as well-supported.
// If you want to use the official API, you must provide a NOTION_TOKEN env var.
export const useOfficialNotionAPI =
  false || (process.env.USE_OFFICIAL_NOTION_API === "true" && process.env.NOTION_TOKEN)

export const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV

export const port = process.env.PORT || 3000
export const rootDomain = isDev ? `localhost:${port}/glossary` : "/glossary"
