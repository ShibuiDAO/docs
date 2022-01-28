# Reference relayer

The reference relayer is minimally functional relayer for [Nova](https://docs.rari.capital/nova/). It aims to precisely follow the steps laid out in the [Relayer guide](https://docs.rari.capital/nova/guides/relaying/).

The souce code of the relayer can be found [here (ShibuiDAO/nova-reference-relayer)](https://github.com/ShibuiDAO/nova-reference-relayer). For its function it requires some environmental variable which can be provided in a `.env.development` fille with the following contents:

```ino
ALCHEMY_L1_API_KEY=
ALCHEMY_L2_API_KEY=

L1_CHAIN_ID=1
L2_CHAIN_ID=10

L2_NOVA_REGISTRY_ADDRESS=
```
