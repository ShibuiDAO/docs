# Token

## General Information

 - [CoinGecko page](https://www.coingecko.com/en/coins/shibui-dao)
 - [OolongSwap token info page](https://info.oolongswap.com/#/token/0xf08ad7c3f6b1c6843ba027ad54ed8ddb6d71169b)
 - [GeckoTerminal page](https://geckoterminal.com/boba/pools/0xce9f38532b3d1e00a88e1f3347601dbc632e7a82)

## Token Information

 - Boba Mainnet contract address: [`0xF08AD7C3f6b1c6843ba027AD54Ed8DDB6D71169b`](https://blockexplorer.boba.network/address/0xF08AD7C3f6b1c6843ba027AD54Ed8DDB6D71169b/transactions)
 - Decimals: 18
 - Maximum supply: 50,000,000 (50 million)

The code for the SHIBUI token can be found on [our Github organisation](https://github.com/ShibuiDAO/shibui/blob/main/src/contracts/shibui/Shibui.sol).

## Distribution

|            Target             |   Amount   |
| ----------------------------- | ---------- |
|          BobaDAO[^1]          |  2,500,000 |
|        Raise - NFT[^2]        |  3,000,000 |
|  Raise - BobaBrewery IDO[^3]  |  2,300,000 |
|       Exchange Liquidity      |  500,000   |
|            Treasury           | 20,000,000 |
|          Contributors         |   500,000  |
|          Advisors[^4]         |  4,000,000 |
|         Founding Team         | 10,000,000 |
|        Unallocated[^5]        |  7,200,000 |

```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [2500000, 3000000, 2300000, 500000, 20000000, 500000, 4000000, 10000000, 7200000],
      "backgroundColor": ["#d6fe51", "#2f0599", "#6dd477", "#e9a55c", "#fda360", "#fd8260", "#fd6060", "#191b1f", "ff0000"]
    }],
    "labels": ["BobaDAO", "Raise - NFT", "Raise - BobaBrewery IDO", "Exchange Liquidity", "Treasury", "Contributors", "Advisors", "Founding Team", "Unallocated"]
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

### Executed Distributions

1. [`0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2`](https://blockexplorer.boba.network/tx/0x055eab86cc71ce3ca175af80587a8ee00cb56c395d15ac9168f1f98ab6ec53a2/token-transfers) -> 400/1,000,000 (t. 400/1,000,000) Exchange liquidity minted and pooled into OolongSwap at rate of 1:4000 = ETH:???? ([`0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90`](https://blockexplorer.boba.network/tx/0x439ee9ad77640788ab7430d44d192ad45a9226a9e0095db0c15d2e1ab8d95b90/token-transfers)).
2. [`0x9f04ea78e2af841463c5550bb96e547bbd624853f69e73fcf063d1fa64dadae2`](https://blockexplorer.boba.network/tx/0x9f04ea78e2af841463c5550bb96e547bbd624853f69e73fcf063d1fa64dadae2/token-transfers) -> 10,000,000/10,000,000 (t. 10,000,000/10,000,000) Founding team distribution minted and vested for 6 months ([`0xf676dc79a56d7c46522560a2e131b95e9e2d9000eab48cfc45297461dc143086`](https://blockexplorer.boba.network/tx/0xf676dc79a56d7c46522560a2e131b95e9e2d9000eab48cfc45297461dc143086/internal-transactions)).
3. [`0x9d65935fcadf811622cf76fddba3891e585f8ce8f44d41af888601507d1fdc67`](https://blockexplorer.boba.network/tx/0x9d65935fcadf811622cf76fddba3891e585f8ce8f44d41af888601507d1fdc67/token-transfers) -> 500,000/500,000 (t. 500,000/500,000) Contributors distribution minted and vested for 6 months ([`0x909d0b9564c8a4cb1102bfd8f93f2164eba8062574c2cefe7e2deae837d38fe1`](https://blockexplorer.boba.network/tx/0x909d0b9564c8a4cb1102bfd8f93f2164eba8062574c2cefe7e2deae837d38fe1/internal-transactions)).
4. [`0xf218eb919e457cd92a2d046a95e766349d243e63424985799479f3f7be73833f`](https://blockexplorer.boba.network/tx/0xf218eb919e457cd92a2d046a95e766349d243e63424985799479f3f7be73833f/token-transfers) -> 2,000,000/4,000,000 (t. 2,000,000/4,000,000) Advisors distribution minted and vested for 6 months ([`0xa7af03afdac506cb63b12b5215abbe9bb8b6f0f030380ce10a639fcf845319ff`](https://blockexplorer.boba.network/tx/0xa7af03afdac506cb63b12b5215abbe9bb8b6f0f030380ce10a639fcf845319ff/internal-transactions)).
5. [`0x2c8805c537ce1fe403b6a2b48ec892eb9230ec347db680497c6cd3653f2a5935`](https://blockexplorer.boba.network/tx/0x2c8805c537ce1fe403b6a2b48ec892eb9230ec347db680497c6cd3653f2a5935/token-transfers) -> 2,000,000/4,000,000 (t. 4,000,000/4,000,000) Advisors distribution minted and vested for 6 months ([`0xa4c688509d78f49b186665ac045fdac97ffcc68a6157882e72807abd7ef1d11b`](https://blockexplorer.boba.network/tx/0xa4c688509d78f49b186665ac045fdac97ffcc68a6157882e72807abd7ef1d11b/internal-transactions)).
6. [`0x545e3e2d1a96d0aa7957cc34246902fd30a8fd155bcf62447f9f4a64690ee64d`](https://blockexplorer.boba.network/tx/0x545e3e2d1a96d0aa7957cc34246902fd30a8fd155bcf62447f9f4a64690ee64d/token-transfers) -> 2,500,000/2,500,000 (t. 2,500,000/2,500,000) BobaDAO distribution minted and locked from transfer ([`0xf082e0980c6f4de7ff895bd771466d490b09df947c33fea31b1cf975d5ed05e7`](https://blockexplorer.boba.network/tx/0xf082e0980c6f4de7ff895bd771466d490b09df947c33fea31b1cf975d5ed05e7/internal-transactions)).
7. [`0xe4908e11a80a02e7cc2c92005752b5152a24e088e4170bcdbf76ae2dbc2f3189`](https://blockexplorer.boba.network/tx/0xe4908e11a80a02e7cc2c92005752b5152a24e088e4170bcdbf76ae2dbc2f3189/token-transfers) -> 800/1,000,000 (t. 1200/1,000,000) Exchange liquidity minted and pooled into OolongSwap at rate of 1:4000 = ETH:???? ([`0x01250bd77e74c7fbd0ca829d8436feba1e84a911708dbad7a76f912233a5f42a`](https://blockexplorer.boba.network/tx/0x01250bd77e74c7fbd0ca829d8436feba1e84a911708dbad7a76f912233a5f42a/token-transfers)).
8. [`0x35d3bb1ffb862bc7b66b249e5ada70c4676c6000ebd256fcb40a878619b065d1`](https://blockexplorer.boba.network/tx/0x35d3bb1ffb862bc7b66b249e5ada70c4676c6000ebd256fcb40a878619b065d1/internal-transactions) -> 2,300,000/2,300,000 (t. 2,300,000/2,300,000) Boba Brewery IDO, Boba Brewery marketing, and Boba Brewery airdrop

## Footnotes

[^1]: The address holding the `BobaDAO` distribution will be locked from transferring it thus it will only act as voting power. This power can be delegated if they so choose.

[^2]: More information about the NFT raise can be found [here](./raise/NFT.html).

[^3]: The distribution of 2mil is split between the actual IDO and Boba Breweries marketing budget for the IDO. Another 300k was allocated out-of-the blue after the initial 2mil for an airdrop suggested by Boba Brewery. More information about the IDO with Boba Brewery can be found [here](./raise/BobaBreweryIDO.html).

[^4]: The "Advisors" distribution is split between 2 people/address'.

[^5]: This part of the distribution may be used in the future (examples: airdrop, block rewards, incentives, ...).
