export const aspectRatio = {
  "16/9": "16 / 9",
  "9/16": "9 / 16",
  "1/1": "1 / 1",
  "3/4": "3 / 4",
  "4/3": "4 / 3",
  "2/3": "2 / 3",
  "2/1": "2 / 1",
} as const;

export const selectAspectRatios = Object.keys(aspectRatio).map((key) => ({
  value: key,
  label: key,
}));

// Tailwind needs full string to match the search
export const aspect: Record<keyof typeof aspectRatio, string> = {
  "16/9": "aspect-16/9",
  "9/16": "aspect-9/16",
  "1/1": "aspect-1/1",
  "3/4": "aspect-3/4",
  "4/3": "aspect-4/3",
  "2/3": "aspect-2/3",
  "2/1": "aspect-2/1",
} as const;

export const alignClasses = {
  left: "",
  center: "mx-auto",
  right: "ml-auto",
};
