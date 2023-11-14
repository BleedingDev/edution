export const mediaPage = {
  content: [
    {
      type: "Typography",
      props: {
        text: "Media",
        variant: "h1",
        id: "Typography-93c6accd02c9cce667023f93705c7c98b9f1976b",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Coursition can handle many types of media from Images to Videos with advanced features!",
        variant: "text",
        id: "Typography-955a9568fab907321008a83fbc9180aee6289921",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Video",
        variant: "h2",
        id: "Typography-f7d85e87799be727ec328e00c8249f09b99f1132",
      },
    },
    {
      type: "Video",
      props: {
        src: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
        title: "Sprite Fight",
        aspectRatio: "16/9",
        align: "center",
        maxWidth: 50,
        subtitles: [
          {
            language: "en-US",
            label: "English (US)",
            src: "https://media-files.vidstack.io/sprite-fight/subs/english.vtt",
          },
        ],
        chapters: [
          {
            language: "en-US",
            src: "https://media-files.vidstack.io/sprite-fight/chapters.vtt",
          },
        ],
        id: "Video-36f861cbb7f6f70534fdd44a39a3a1ebbc3e2aee",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Audio",
        variant: "h2",
        id: "Typography-9eebdfd57ca3209a7e45d4152fb929b593820357",
      },
    },
    {
      type: "Audio",
      props: {
        src: "https://media-files.vidstack.io/sprite-fight/audio.mp3",
        title: "Sprite Fight",
        align: "right",
        maxWidth: 25,
        subtitles: [
          {
            language: "en-US",
            label: "English (US)",
            src: "https://media-files.vidstack.io/sprite-fight/subs/english.vtt",
          },
        ],
        chapters: [
          {
            src: "https://media-files.vidstack.io/sprite-fight/chapters.vtt",
            language: "en-US",
          },
        ],
        id: "Audio-fd4e1e51fa2be261a38460b458db39d4a4878ea8",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Embed",
        variant: "h2",
        id: "Typography-1025452645088d54289cc0a0cd203bdd30c9cec5",
      },
    },
    {
      type: "Embed",
      props: {
        src: "https://www.youtube.com/embed/vU8eL2CjzHw",
        title: "Sprite Fight",
        width: 560,
        height: 315,
        id: "Embed-5fc85f8137a20198418cd286f0689214a3654b34",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Image",
        variant: "h2",
        id: "Typography-fe0599074d19d494993d9a5cf542d522f03b980b",
      },
    },
    {
      type: "Image",
      props: {
        src: "https://picsum.photos/900/1600",
        alt: "Description of the image",
        aspectRatio: "9/16",
        align: "left",
        maxWidth: 20,
        id: "Image-170a9eb0d30d025963ee4ae4ed43cf29d2c8dcc0",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Code",
        variant: "h2",
        id: "Typography-86d75a5ad415ebea4a94bfe12f070e50787894b1",
      },
    },
    {
      type: "Code",
      props: {
        code: {
          raw: 'const hello = "This is a beautiful, highlighted code."',
          processed:
            '<pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4" tabindex="0"><code><span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> hello</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">"This is a beautiful, highlighted code."</span></span></code></pre>',
          lang: "typescript",
        },
        showLines: true,
        id: "Code-726cbef5049feadd7cf14bfa16f72bb9418f281c",
      },
    },
  ],
  root: {
    props: {
      title: "Media Demo - Coursition",
    },
  },
  zones: {},
}
