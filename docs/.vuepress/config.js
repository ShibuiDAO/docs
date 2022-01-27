const { description } = require("../../package");

module.exports = {
  title: "Shibui DAO",
  description: description,

  themeConfig: {
    repo: "ShibuiDAO/docs",
    docsDir: "src",
    docsBranch: "main",

    editLinks: true,
    editLinkText: "Want to improve this page? Hit us with a PR on Github!",

    nav: [
      {
        text: "NFT Marketplace",
        items: [
          { text: "Overview", link: "/nft/" },
          {
            text: "Subgraphs",
            items: [
              { text: "Exchange", link: "/nft/subgraph/Exchange.md" },
            ],
          },
        ],
      },
    ],

    sidebarDepth: 10,
    sidebar: "auto",
    smoothScroll: true,
  },
};
