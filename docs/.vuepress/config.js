const { description } = require("../../package");

module.exports = {
  title: "Shibui",
  description: description,

  themeConfig: {
    repo: "ShibuiDAO/docs",
    docsDir: "src",
    docsBranch: "main",

    editLinks: true,
    editLinkText: "Want to improve this page? Hit us with a PR on Github!",

    nav: [
      {
        text: "Organisation",
        items: [
          { text: "Overview", link: "/organisation/" },
          { text: "Token", link: "/organisation/Token.md" },
        ],
      },
      {
        text: "NFT Marketplace",
        items: [
          { text: "Overview", link: "/nft/" },
          {
            text: "Subgraphs",
            items: [{ text: "Exchange", link: "/nft/subgraph/Exchange.md" }],
          },
        ],
      },
      {
        text: "Nova",
        items: [
          { text: "Overview", link: "/nova/" },
          { text: "Reference relayer", link: "/nova/ReferenceRelayer.md" },
        ],
      },
      { text: "Deployed Contracts", link: "/contracts/" },
    ],

    sidebarDepth: 10,
    sidebar: "auto",
    smoothScroll: true,
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  plugins: ["vuepress-plugin-chart"],
};
