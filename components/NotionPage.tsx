import * as React from "react"
import Head from "next/head"
import { ExtendedRecordMap } from "notion-types"
import { getPageTitle } from "notion-utils"
import { NotionRenderer } from "react-notion-x"

export const NotionPage = ({ recordMap, rootPageId }: { recordMap: ExtendedRecordMap; rootPageId?: string }) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  return (
    <>
      <Head>
        {/* TODO: Create a better description */}
        <meta name='description' content='Coursition - Notion Embed from coursition' />

        <title>{`Coursition - ${title}`}</title>
      </Head>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} rootPageId={rootPageId} />
    </>
  )
}
