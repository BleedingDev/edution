import * as React from "react"
import { previewImagesEnabled, rootDomain, rootNotionPageId } from "@utils/notion/config"
import { NotionPage } from "components/NotionPage"
import { ExtendedRecordMap } from "notion-types"
import { getPage } from "utils/notion/notion"

import "react-notion-x/src/styles.css"

export const getStaticProps = async () => {
  const pageId = rootNotionPageId
  const recordMap = await getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain as string}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
      subpage='/glossary'
    />
  )
}
