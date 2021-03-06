# NFT Exchange subgraph

## Description

This subgraph tracks SellOrder and BuyOrder structures accounts (wallet or contract). Orders are ephemeral (at time of writing) and don't persist as history once Exercised or Canceled.

## How can I access?

 * Boba Mainnet
   * Boba's The Graph node: [https://graph.mainnet.boba.network:8000/subgraphs/name/shibui/nft-exchange/](https://graph.mainnet.boba.network:8000/subgraphs/name/shibui/nft-exchange/)
   * Indexing status API: [https://graph.mainnet.boba.network:8030/graphql](https://graph.mainnet.boba.network:8030/graphql)
 * Boba Rinkeby
   * Boba's The Graph node: [https://graph.rinkeby.boba.network:8000/subgraphs/name/shibui/nft-exchange/](https://graph.rinkeby.boba.network:8000/subgraphs/name/shibui/nft-exchange/)
   * Indexing status API: [https://graph.rinkeby.boba.network:8030/graphql](https://graph.rinkeby.boba.network:8030/graphql)

## Type definitions

There is a published NPM package ([@shibuidao/erc721exchange-types](https://www.npmjs.com/package/@shibuidao/erc721exchange-types)) with a GraphQL schema file and TypeScript typings.
