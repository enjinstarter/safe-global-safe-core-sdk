import { SafeTransactionDataPartial } from '@enjinstarter/safe-global-safe-core-sdk-types'

export type SafeTransactionOptionalProps = Pick<
  SafeTransactionDataPartial,
  'safeTxGas' | 'baseGas' | 'gasPrice' | 'gasToken' | 'refundReceiver' | 'nonce'
>
