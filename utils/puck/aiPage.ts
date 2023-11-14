export const aiPage = {
  content: [
    {
      type: "Link",
      props: {
        href: "/demo/aiedit",
        content: "Edit this page",
        id: "Link-1695576376753",
      },
    },
    {
      type: "Typography",
      props: {
        text: "AI",
        variant: "h1",
        id: "Typography-723eca1fd989738c501329e40726c5f62687de70",
      },
    },
    {
      type: "Typography",
      props: {
        text: "AskLLM",
        variant: "h2",
        id: "Typography-7d6ca3e7518231b3be790093081a039ad24cb6ad",
      },
    },
    {
      type: "AskLLM",
      props: {
        predefinedPrompt: "Generate 3 ice-cream flavours.",
        predefinedOutput: "chocolate, vanilla, mint",
        id: "AskLLM-3240b6af5ad1ed04dc8530d4773a49311d194dba",
      },
    },
    {
      type: "Typography",
      props: {
        text: "Quiz",
        variant: "h2",
        id: "Typography-26e4a8ce41bf8bd50935c9b8f8e4b82a76ba39ed",
      },
    },
    {
      type: "Typography",
      props: {
        text: "In the future it will be possible to generate quizzes with AI too!",
        variant: "text",
        id: "Typography-ef8333c65ed947dbf18328d5bfff8fadf6ee6899",
      },
    },
    {
      type: "Quiz",
      props: {
        question: "What is coursiton",
        answers: [
          {
            text: "Course building platform",
            isCorrect: true,
          },
          {
            text: "An Ecommerce platform",
            isCorrect: false,
          },
        ],
        id: "Quiz-e43277eb6a5fe3ac9c9f40d837c033b75b78b945",
      },
    },
  ],
  root: {
    props: {
      title: "AI Demo - Coursition",
    },
  },
  zones: {},
}
