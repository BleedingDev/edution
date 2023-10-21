import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "components/NotionPage";
import { rootNotionPageId } from "utils/notion/config";
import notion from "utils/notion/notion";

import "react-notion-x/src/styles.css";
export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
