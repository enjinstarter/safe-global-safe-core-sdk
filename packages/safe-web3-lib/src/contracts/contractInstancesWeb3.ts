import { SafeVersion } from '@enjinstarter/safe-global-safe-core-sdk-types'
import { Gnosis_safe as SafeMasterCopy_V1_3_0 } from '../../typechain/src/web3-v1/v1.3.0/Gnosis_safe'
import { Multi_send as MultiSend_V1_3_0 } from '../../typechain/src/web3-v1/v1.3.0/Multi_send'
import { Multi_send_call_only as MultiSendCallOnly_V1_3_0 } from '../../typechain/src/web3-v1/v1.3.0/Multi_send_call_only'
import { Proxy_factory as GnosisSafeProxyFactory_V1_3_0 } from '../../typechain/src/web3-v1/v1.3.0/Proxy_factory'
import GnosisSafeContract_V1_3_0_Web3 from './GnosisSafe/v1.3.0/GnosisSafeContract_V1_3_0_Web3'
import GnosisSafeProxyFactoryContract_V1_3_0_Web3 from './GnosisSafeProxyFactory/v1.3.0/GnosisSafeProxyFactoryContract_V1_3_0_Web3'
import MultiSendContract_V1_3_0_Web3 from './MultiSend/v1.3.0/MultiSendContract_V1_3_0_Web3'
import MultiSendCallOnlyContract_V1_3_0_Web3 from './MultiSendCallOnly/v1.3.0/MultiSendCallOnlyContract_V1_3_0_Web3'

export function getSafeContractInstance(
  safeVersion: SafeVersion,
  safeContract: SafeMasterCopy_V1_3_0
): GnosisSafeContract_V1_3_0_Web3 {
  switch (safeVersion) {
    case '1.3.0':
      return new GnosisSafeContract_V1_3_0_Web3(safeContract as SafeMasterCopy_V1_3_0)
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getMultiSendContractInstance(
  safeVersion: SafeVersion,
  multiSendContract: MultiSend_V1_3_0
): MultiSendContract_V1_3_0_Web3 {
  switch (safeVersion) {
    case '1.3.0':
      return new MultiSendContract_V1_3_0_Web3(multiSendContract as MultiSend_V1_3_0)
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getMultiSendCallOnlyContractInstance(
  safeVersion: SafeVersion,
  multiSendCallOnlyContract: MultiSendCallOnly_V1_3_0
): MultiSendCallOnlyContract_V1_3_0_Web3 {
  switch (safeVersion) {
    case '1.3.0':
      return new MultiSendCallOnlyContract_V1_3_0_Web3(
        multiSendCallOnlyContract as MultiSendCallOnly_V1_3_0
      )
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getGnosisSafeProxyFactoryContractInstance(
  safeVersion: SafeVersion,
  gnosisSafeProxyFactoryContract: GnosisSafeProxyFactory_V1_3_0
): GnosisSafeProxyFactoryContract_V1_3_0_Web3 {
  switch (safeVersion) {
    case '1.3.0':
      return new GnosisSafeProxyFactoryContract_V1_3_0_Web3(
        gnosisSafeProxyFactoryContract as GnosisSafeProxyFactory_V1_3_0
      )
    default:
      throw new Error('Invalid Safe version')
  }
}
