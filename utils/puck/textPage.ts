export const textPage = {
  content: [
    {
      type: "Typography",
      props: {
        text: "Text",
        variant: "h1",
        id: "Typography-b5e9f40fecab8ac20476aeb1fc9515682aa62036",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Text Editor",
        variant: "h2",
        id: "Typography-410d8782186f73d91ff9acdb41ab5a69ede18297",
      },
    },
    {
      type: "TextEditor",
      props: {
        text: {
          raw: "### Advanced\n\nThis is advanced text editor that supports **many** *types* ~~of~~ text formatting.\n\n> Coursition is the best software for course creation.\\\\\n>\n> - Petr Glaser\n\n### Lists\n\n- Unordered\n\n1. Ordered\n\n- [ ] Checkboxes",
          html: '<h3>Advanced</h3><p>This is advanced text editor that supports <strong>many</strong> <em>types</em> <s>of</s> text formatting.</p><blockquote class="novel-border-l-4 novel-border-stone-700"><p>Coursition is the best software for course creation.\\</p><ul class="novel-list-disc novel-list-outside novel-leading-3 novel--mt-2 tight" data-tight="true"><li class="novel-leading-normal novel--mb-2"><p>Petr Glaser</p></li></ul></blockquote><p></p><h3>Lists</h3><ul class="novel-list-disc novel-list-outside novel-leading-3 novel--mt-2 tight" data-tight="true"><li class="novel-leading-normal novel--mb-2"><p>Unordered</p></li></ul><ol class="novel-list-decimal novel-list-outside novel-leading-3 novel--mt-2 tight" data-tight="true"><li class="novel-leading-normal novel--mb-2"><p>Ordered</p></li></ol><ul class="novel-not-prose novel-pl-2" data-type="taskList"><li class="novel-flex novel-items-start novel-my-4" data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Checkboxes</p></div></li></ul>',
        },
        id: "TextEditor-1f48562ebb14cffb2b513d51f834c13a700c21f5",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Links",
        variant: "h2",
        id: "Typography-b51a0fade71fab56474d2912683edd766426cd2f",
      },
    },
    {
      type: "Link",
      props: {
        href: "/",
        content: "Landing page (no demo)",
        id: "Link-2414fd4b0d53af7017e233e772c0d8464388cc00",
      },
    },
    {
      type: "Link",
      props: {
        href: "https://coursition.com",
        content: "External page",
        id: "Link-96acd7c77342c722586a59756dc67f1d46649631",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Lists",
        variant: "h2",
        id: "Typography-665403657386fcf626bed625419d6847abcdd952",
      },
    },
    {
      type: "List",
      props: {
        lists: [
          {
            content: "We have nice features",
          },
          {
            content: "Including AI based",
          },
        ],
        ordered: false,
        id: "List-48bd8425eb72c395542d79582d622ad04ece2eba",
      },
    },
    {
      type: "List",
      props: {
        lists: [
          {
            content: "AskLLM",
          },
          {
            content: "Generate Quiz in the future!",
          },
        ],
        ordered: true,
        id: "List-defa7e06dcc09745522c81fafb2b9856c017edcf",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Spoiler",
        variant: "h2",
        id: "Typography-a62aca20a6d7c0d92fd03c5a18ecdedc3a563d82",
      },
    },
    {
      type: "Spoiler",
      props: {
        title: "What's inside?",
        content: "Anything you'd like to! Surprised? 😱",
        id: "Spoiler-224c32128155dac4f818decfba54829c1f36ccc4",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Divider",
        variant: "h2",
        id: "Typography-4055fd8ec0a65f76c4e69858d68811d0dc6489b3",
      },
    },
    {
      type: "Divider",
      props: {
        id: "Divider-f170b2d72ab41ee54d2b632cacf582a678f83a0c",
      },
    },
  ],
  root: {
    props: {
      title: "Text Demo - Coursition",
    },
  },
  zones: {},
}
