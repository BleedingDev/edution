import * as React from "react"
import type { GetStaticProps } from "next/types"
import { isDev, previewImagesEnabled, rootDomain, rootNotionPageId, rootNotionSpaceId } from "@utils/notion/config"
import { NotionPage } from "components/NotionPage"
import { ExtendedRecordMap } from "notion-types"
import { getAllPagesInSpace } from "notion-utils"
import { defaultMapPageUrl } from "react-notion-x"
import { getPage } from "utils/notion/notion"

import "react-notion-x/src/styles.css"

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.pageId as string
  const recordMap = await getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    }
  }

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId)

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, getPage, {
    traverseCollections: false,
  })

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== "/")

  return {
    paths,
    fallback: true,
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain as string}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  )
}
