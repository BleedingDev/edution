import { Data } from "@measured/puck";

export const getPage = (path: string) => {
  const allData: Record<string, Data> | null = null;

  return allData ? allData[path] : null;
};