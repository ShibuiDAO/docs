# Litepaper

<small>08. 04. 2022 | [quantumlyy](https://twitter.com/quantumlyy)</small>

## Overview

The following lite paper reviews the ShibuiNFT project, which is a Boba Network native NFT marketplace, governed by the Boba Network community. The project is being developed by the Shibui organisation as a DAO, under the leadership of [`quantumlyy`](https://twitter.com/quantumlyy).

### Near-Term Organisational Roadmap

The first item on our organizational to-do list is the ShibuiDAO IDO on the Boba Brewery platform, which will be start in the coming month (April 2022) and which will likely run until all [allocated assets](../organisation/Token.html#distribution) are distributed. More information about this raise can be found [here](../organisation/raise/BobaBreweryIDO.html).

In terms of governance, we will begin by using [Discord](https://docs.shibuidao.com/discord) (less so [Telegram](https://docs.shibuidao.com/telegram)) and [Snapshot](https://docs.shibuidao.com/snapshot). Discord and Telegram will be used for discussion whilst Snapshot will be used to enact decisions we have reached consensus on. Of course, Snapshot may also be used to decide internal conflicts, but we will do our best to avoid contentious issues early on. Once we have found our bearings as a community we will create a Discourse forum and begin outlining some more formal procedures for decision making.

There will be no employees to begin with at the pre-IDO phase, however it is certain that our organization will employ people in the near future, so it's worth noting that we will aim to offer competitive compensation that is similar to what could be expected in the tech industry.

## Motivation

We consider Boba Network and its technology as one of the best examples of an Ethereum L2 scaling solution that we’ve got currently available on the market. The ShibuiNFT marketplace was created from a simple desire to address the current situation of NFT assets on Boba Network: the NFTs are not being used to their full potential on Boba and that’s why we decided to tackle the problem.

We are also firm believers in decentralisation and community involvement, so this is why we have decided for ShibuiNFT (alongside Shibui as a whole) to become controlled by an on-chain governance system.

## Mechanism

### NFT Exchange

The ShibuiNFT marketplace functions by utilising a custom built ERC721 exchange protocol. The protocol functions fully on-chain by storing all orders (sell and buy) in a decoupled universal OrderBook. We also allow collections to specify their own royalty rates dynamically (they could even make them based on the token ID) by utilising an on-chain Royalty Registry and Royalty Engine, which were first shown off and designed by [Manifold](https://www.manifold.xyz).

The NFT exchange facilitates said buy (akin to offers) and sell orders to be executed with either ETH or any other [ERC20 token](https://eips.ethereum.org/EIPS/eip-20). All orders are non-custodial as the exchange only has to be approved for the traded asset and never takes custody of it.

### Token

#### Distribution

Information about the token (SHIBUI) distribution can be found on the [Token subpage](../organisation/Token.html).

### Treasury

The Shibui treasury comes in 3 layers (from least to most governance controlled):

1. Hot treasury - Multi-sig <> Signers are core team members; used for day to day operations and refunded monthly by the cold treasury through a governance vote
2. Transient funds - [Governor Charlie](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/governance/GovernorCharlie.sol) [Timelock](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/governance/Timelock.sol) <> Controlled by [Governor Charlie](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/governance/GovernorCharlie.sol) via on-chain governance
3. Cold treasury - [Token Manager](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/governance/TokenManager.sol) <> Controlled by the [Timelock](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/governance/Timelock.sol) via on-chain governance

## Code

All ShibuiNFT related code can be found under the [ShibuiDAO organisation on Github](https://github.com/ShibuiDAO).
The core repositories for ShibuiNFT are:
 * [ShibuiNFT interface](https://github.com/ShibuiDAO/interface)
 * [ShibuiNFT protocol](https://github.com/ShibuiDAO/exchange)
 * [ShibuiNFT subgraph](https://github.com/ShibuiDAO/nft-exchange-subgraph)
 * [Royalty Registry](https://github.com/ShibuiDAO/royalty-registry)
 * [Shibui governance](https://github.com/ShibuiDAO/shibui)

## Conclusion

We invite anyone and everyone to join us in our mission. Over time, that mission will inevitably change but it's important that we begin our journey on the same footing, and with the same principles in mind, so that we may move forward, not only as a community, but as an anti-fragile digital warband.

## Appendix

### v2

Although ShibuiNFT version 1 is only just taking off, there are already improvements in mind for version 2.
One of these improvements for instance are gas-less listings using signed messages. Another missing feature in v1 is ERC1155 support which has been slated for v2.

### Communication Channels

 * [Discord](https://docs.shibuidao.com/discord)
 * [Twitter](https://docs.shibuidao.com/twitter)
 * [Snapshot](https://docs.shibuidao.com/snapshot)
 * [Telegram](https://docs.shibuidao.com/telegram)

### Document Format

This is a living document meaning it can and will change/be updated.
Once finalised it will be published in a final format as a PDF document.
Any references to other pages on the [ShibuiDAO docs](https://docs.shibuidao.com) will be inlined where used.
