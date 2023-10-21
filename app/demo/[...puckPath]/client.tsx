"use client";

import { useState } from "react";
import type { Data } from "@measured/puck";
import { Button, Puck, Render } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";

import { config, getDefaultData } from "../../../puck.config";

const isBrowser = typeof window !== "undefined";

export function Client({
  path,
  dataBE,
  isEdit,
}: {
  path: string;
  dataBE?: Data | null;
  isEdit: boolean;
}) {
  const key = `edution-demo:${path}`;

  const [data] = useState<Data>(() => {
    if (isBrowser) {
      const dataStr = localStorage.getItem(key);

      if (dataStr) {
        return JSON.parse(dataStr);
      }
    }
    const defaultData = getDefaultData(path);
    isBrowser && localStorage.setItem(key, JSON.stringify(defaultData));
    return defaultData;
  });

  if (isEdit) {
    return (
      <Puck
        config={config as any}
        data={data}
        onPublish={async (newData: Data) => {
          localStorage.setItem(key, JSON.stringify(newData));
        }}
        plugins={[headingAnalyzer]}
        renderHeaderActions={() => (
          <>
            <Button href={`/demo${path}`} newTab variant="secondary">
              View page
            </Button>
          </>
        )}
      />
    );
  }

  return <Render config={config as any} data={data} />;
}
