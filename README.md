# Safe Core SDK Monorepo

Software developer tools that facilitate the interaction with the Safe [contracts](https://github.com/safe-global/safe-contracts) and [services](https://github.com/safe-global/safe-transaction-service).

## Guides

| Title | Description |
| ------- | ----------- |
| [Integrating the Safe Core SDK](https://github.com/safe-global/safe-core-sdk/blob/main/guides/integrating-the-safe-core-sdk.md) | This guide shows how to use the [Safe Core SDK](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk) and [Safe Service Client](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-service-client). |

## Packages

| Package | Release | Description |
| ------- | :-----: | ----------- |
| [safe-core-sdk](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk) | TypeScript library that facilitates the interaction with the [Safe contracts](https://github.com/safe-global/safe-contracts) |
[safe-core-sdk-types](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk-types) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk-types.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk-types) | Common types extracted from the [Safe Core SDK](https://github.com/safe-global/safe-core-sdk/tree/main/packages) packages |
[safe-core-sdk-utils](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk-utils) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk-utils.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-core-sdk-utils) | Utilities for the [Safe Core SDK](https://github.com/safe-global/safe-core-sdk/tree/main/packages) packages |
[safe-ethers-lib](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-ethers-lib) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-ethers-lib.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-ethers-lib) | Ethers.js utilities and Safe contracts types (typechain ethers-v5) used to initialize the [Safe Core SDK](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk) |
[safe-web3-lib](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-web3-lib) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-web3-lib.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-web3-lib) | Web3.js utilities and Safe contracts types (typechain web3-v1) used to initialize the [Safe Core SDK](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-core-sdk) |
[safe-service-client](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-service-client) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-service-client.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-service-client) | [Safe Transaction Service API](https://github.com/safe-global/safe-transaction-service) client library |
[safe-ethers-adapters](https://github.com/safe-global/safe-core-sdk/tree/main/packages/safe-ethers-adapters) | [![NPM Version](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-ethers-adapters.svg)](https://badge.fury.io/js/%40gnosis.pm%2Fsafe-ethers-adapters) | [Ethers](https://docs.ethers.io/v5/single-page/) adapter that facilitates the interaction with the [Safe Services](https://github.com/safe-global/safe-transaction-service) |

## Playground

There is a [playground script](https://github.com/safe-global/safe-core-sdk/tree/main/playground/index.ts) that can be used to play around with the Safe Core SDK.

Update the config inside the script and execute the following command to run the script:

```bash
yarn play
```
