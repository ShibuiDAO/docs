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

1. [`0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2`](https://blockexplorer.boba.network/tx/0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2/token-transfers) -> 400/1,000,000 (t. 400/1,000,000) Exchange liquidity minted and pooled into OolongSwap at rate of 1:4000 = ETH:🌊 ([`0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90`](https://blockexplorer.boba.network/tx/0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90/token-transfers)).
2. [`0x9f04ea78e2af841463c5550bb96e547bbd624853f69e73fcf063d1fa64dadae2`](https://blockexplorer.boba.network/tx/0x9f04ea78e2af841463c5550bb96e547bbd624853f69e73fcf063d1fa64dadae2/token-transfers) -> 10,000,000/10,000,000 (t. 10,000,000/10,000,000) Founding team distribution minted and vested for 6 months ([`0xf676dc79a56d7c46522560a2e131b95e9e2d9000eab48cfc45297461dc143086`](https://blockexplorer.boba.network/tx/0xf676dc79a56d7c46522560a2e131b95e9e2d9000eab48cfc45297461dc143086/internal-transactions)).
3. [`0x9d65935fcadf811622cf76fddba3891e585f8ce8f44d41af888601507d1fdc67`](https://blockexplorer.boba.network/tx/0x9d65935fcadf811622cf76fddba3891e585f8ce8f44d41af888601507d1fdc67/token-transfers) -> 500,000/500,000 (t. 500,000/500,000) Contributors distribution minted and vested for 6 months ([`0x909d0b9564c8a4cb1102bfd8f93f2164eba8062574c2cefe7e2deae837d38fe1`](https://blockexplorer.boba.network/tx/0x909d0b9564c8a4cb1102bfd8f93f2164eba8062574c2cefe7e2deae837d38fe1/internal-transactions)).
4. [`0xf218eb919e457cd92a2d046a95e766349d243e63424985799479f3f7be73833f`](https://blockexplorer.boba.network/tx/0xf218eb919e457cd92a2d046a95e766349d243e63424985799479f3f7be73833f/token-transfers) -> 2,000,000/4,000,000 (t. 2,000,000/4,000,000) Advisors distribution minted and vested for 6 months ([`0xa7af03afdac506cb63b12b5215abbe9bb8b6f0f030380ce10a639fcf845319ff`](https://blockexplorer.boba.network/tx/0xa7af03afdac506cb63b12b5215abbe9bb8b6f0f030380ce10a639fcf845319ff/internal-transactions)).
5. [`0x2c8805c537ce1fe403b6a2b48ec892eb9230ec347db680497c6cd3653f2a5935`](https://blockexplorer.boba.network/tx/0x2c8805c537ce1fe403b6a2b48ec892eb9230ec347db680497c6cd3653f2a5935/token-transfers) -> 2,000,000/4,000,000 (t. 4,000,000/4,000,000) Advisors distribution minted and vested for 6 months ([`0xa4c688509d78f49b186665ac045fdac97ffcc68a6157882e72807abd7ef1d11b`](https://blockexplorer.boba.network/tx/0xa4c688509d78f49b186665ac045fdac97ffcc68a6157882e72807abd7ef1d11b/internal-transactions)).

## Footnotes

[^1]: The address holding the `BobaDAO` distribution will be locked from transferring it thus it will only act as voting power. This power can be delegated if they so choose.

[^2]: The "Advisors" distribution is split between 2 people/address'.
