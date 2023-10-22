import * as React from "react"
import type { GetStaticProps } from "next/types"
import { NotionPage } from "components/NotionPage"
import { ExtendedRecordMap } from "notion-types"
import { rootNotionPageId } from "utils/notion/config"
import notion from "utils/notion/notion"

import "react-notion-x/src/styles.css"

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = (context.params?.pageId as string) || rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
}
