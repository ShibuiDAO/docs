# Token

## General information

 - [OolongSwap token info page](https://info.oolongswap.com/#/token/0xf08ad7c3f6b1c6843ba027ad54ed8ddb6d71169b)

## Distribution

|           Target            |   Amount   |
| --------------------------- | ---------- |
|         BobaDAO[^1]         |  2,500,000 |
|         Raise - NFT         |  6,000,000 |
|   Raise - BobaBrewery IDO   |  6,000,000 |
|      Exchange Liquidity     |  1,000,000 |
|           Treasury          | 20,000,000 |
|         Contributors        |   500,000  |
|         Advisors[^2]        |  4,000,000 |
|        Founding Team        | 10,000,000 |

```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [2500000, 6000000, 6000000, 1000000, 20000000, 500000, 4000000, 10000000],
      "backgroundColor": ["#d6fe51", "#2f0599", "#6dd477", "#e9a55c", "#fda360", "#fd8260", "#fd6060", "#191b1f"]
    }],
    "labels": ["BobaDAO", "Raise - NFT", "Raise - BobaBrewery IDO", "Exchange Liquidity", "Treasury", "Contributors", "Advisors", "Founding Team"]
  }
}
```

### Treasury Sub-Distribution

|    Target    |   Amount   |
| ------------ | ---------- |
|    Runway    | 12,500,000 |
|    Grants    | 5,000,000  |
| Bug Bounties | 2,500,000  |

```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [12500000, 5000000, 2500000],
      "backgroundColor": ["#fda360", "#d6fe51", "#6dd477"]
    }],
    "labels": ["Runway", "Grants", "Bug Bounties"]
  }
}
```

### Executed distributions

1. [`0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2`](https://blockexplorer.boba.network/tx/0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2/token-transfers) -> 400/1,000,000 Exchange liquidity minted and pooled into OolongSwap at rate of 1:4000 = ETH:🌊 ([`0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90`](https://blockexplorer.boba.network/tx/0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90/token-transfers)).

## Footnotes

[^1]: The address holding the `BobaDAO` distribution will be locked from transferring it thus it will only act as voting power. This power can be delegated if they so choose.

[^2]: The "Advisors" distribution is split between 2 people/address'.
