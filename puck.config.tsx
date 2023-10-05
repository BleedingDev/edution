import type { Config } from "@measured/puck";
import { selectAspectRatios } from "@utils/puckUtils";
import { PropsFrom } from "@utils/types";
import { Audio } from "components/Audio";
import { Image } from "components/Image";
import { Link } from "components/Link";
import { Spoiler } from "components/Spoiler";
import { Video } from "components/Video";

import { Root } from "./components/Root";
import { Typography } from "./components/Typography";
import { Divider } from "components/Divider";
import { List } from "components/List";
// TODO: Better Type Inference
type Props = {
  Typography: PropsFrom<typeof Typography>;
  Spoiler: PropsFrom<typeof Spoiler>;
  Link: PropsFrom<typeof Link>;
  Image: PropsFrom<typeof Image>;
  Video: PropsFrom<typeof Video>;
  Audio: PropsFrom<typeof Audio>;
  Divider: PropsFrom<typeof Divider>;
  List: PropsFrom<typeof List>;
};

export const config = {
  root: {
    render: Root,
  },
  components: {
    Typography: {
      fields: {
        text: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Heading 1", value: "h1" },
            { label: "Heading 2", value: "h2" },
            { label: "Heading 3", value: "h3" },
            { label: "Heading 4", value: "h4" },
            { label: "Text", value: "text" },
            { label: "Quote", value: "quote" },
          ],
        },
      },
      defaultProps: {
        text: "This is example text",
        variant: "text",
      },
      render: Typography,
    },
    Spoiler: {
      fields: {
        title: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        title: "Spoiler Title",
        content: "Spoiler Content",
      },
      render: Spoiler,
    },
    Link: {
      fields: {
        href: { type: "text" },
        content: { type: "text" },
      },
      defaultProps: {
        href: "/",
        content: "Internal Link",
      },
      render: Link,
    },
    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        aspectRatio: { type: "select", options: selectAspectRatios },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        maxWidth: { type: "number" },
      },
      defaultProps: {
        src: "https://picsum.photos/1600/900",
        alt: "Description of the image",
        aspectRatio: "16/9",
        align: "left",
        maxWidth: 100,
      },
      render: Image,
    },
    Video: {
      fields: {
        src: { type: "text" },
        title: { type: "text" },
        aspectRatio: { type: "select", options: selectAspectRatios },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        maxWidth: { type: "number" },
        subtitles: {
          type: "array",
          getItemSummary: (item) => item.label || "en-US",
          arrayFields: {
            language: { type: "text" },
            label: { type: "text" },
            src: { type: "text" },
          },
        },
        chapters: {
          type: "array",
          getItemSummary: (item) => item.language || "en-US",
          arrayFields: {
            language: { type: "text" },
            src: { type: "text" },
          },
        },
      },
      defaultProps: {
        src: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        title: "Sprite Fight",
        aspectRatio: "16/9",
        align: "left",
        maxWidth: 100,
        subtitles: [],
        chapters: [],
      },
      render: Video,
    },
    Audio: {
      fields: {
        src: { type: "text" },
        title: { type: "text" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        maxWidth: { type: "number" },
        subtitles: {
          type: "array",
          getItemSummary: (item) => item.label || "en-US",
          arrayFields: {
            language: { type: "text" },
            label: { type: "text" },
            src: { type: "text" },
          },
        },
        chapters: {
          type: "array",
          getItemSummary: (item) => item.language || "en-US",
          arrayFields: {
            language: { type: "text" },
            src: { type: "text" },
          },
        },
      },
      defaultProps: {
        src: "https://media-files.vidstack.io/sprite-fight/audio.mp3",
        title: "Sprite Fight",
        align: "left",
        maxWidth: 100,
        subtitles: [],
        chapters: [],
      },
      render: Audio,
    },
    Divider: {
      render: Divider,
    },
    List: {
      fields: {
        lists: {
          type: "array",
          getItemSummary: (item) => item.content || "New List",
          arrayFields: {
            content: { type: "text" },
          },
        },
      },
      defaultProps: {
        lists: [{ content: "Create the list" }],
      },
      render: List,
    },
  },
} satisfies Config<Props>;

export const getDefaultData = (path: string) => ({
  content: [
    {
      type: "Link",
      props: {
        href: `/demo${path}edit`,
        content: "Edit this page",
        id: "Link-1695576376753",
      },
    },
  ],
  root: { title: "Demo page" },
});

export default config;
