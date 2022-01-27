# NFT Exchange subgraph

## Description

This subgraph tracks SellOrder and BuyOrder structures accounts (wallet or contract). Orders are ephemeral (at time of writing) and don't persist as history once Exercised or Canceled.

## How can I access?

 * Boba Rinkeby
   * Boba's The Graph node: https://graph.rinkeby.boba.network:8000/subgraphs/name/shibuidao/nft-exchange/
   * Indexing status API: https://graph.rinkeby.boba.network:8030/graphql

## Type definitions

There is a published NPM package ([@shibuidao/erc721exchange-types](https://www.npmjs.com/package/@shibuidao/erc721exchange-types)) with a GraphQL schema file and TypeScript typings.
