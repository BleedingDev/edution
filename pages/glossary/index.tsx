import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import * as notion from "@utils/notion/notion";
import { NotionPage } from "components/NotionPage";
import {
  previewImagesEnabled,
  rootDomain,
  rootNotionPageId,
} from "@utils/notion/config";

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
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain as string}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  );
}
//
