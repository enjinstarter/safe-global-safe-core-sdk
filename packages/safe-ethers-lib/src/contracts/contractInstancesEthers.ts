import { Signer } from '@ethersproject/abstract-signer'
import { SafeVersion } from '@enjinstarter/safe-global-safe-core-sdk-types'
import { Gnosis_safe__factory as SafeMasterCopy_V1_3_0 } from '../../typechain/src/ethers-v5/v1.3.0/factories/Gnosis_safe__factory'
import { Multi_send_call_only__factory as MultiSendCallOnly_V1_3_0 } from '../../typechain/src/ethers-v5/v1.3.0/factories/Multi_send_call_only__factory'
import { Multi_send__factory as MultiSend_V1_3_0 } from '../../typechain/src/ethers-v5/v1.3.0/factories/Multi_send__factory'
import { Proxy_factory__factory as SafeProxyFactory_V1_3_0 } from '../../typechain/src/ethers-v5/v1.3.0/factories/Proxy_factory__factory'
import GnosisSafeContract_V1_3_0_Ethers from './GnosisSafe/v1.3.0/GnosisSafeContract_V1_3_0_Ethers'
import GnosisSafeProxyFactoryContract_V1_3_0_Ethers from './GnosisSafeProxyFactory/v1.3.0/GnosisSafeProxyFactoryContract_V1_3_0_Ethers'
import MultiSendContract_V1_3_0_Ethers from './MultiSend/v1.3.0/MultiSendContract_V1_3_0_Ethers'
import MultiSendCallOnlyContract_V1_3_0_Ethers from './MultiSendCallOnly/v1.3.0/MultiSendCallOnlyContract_V1_3_0_Ethers'

export function getSafeContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signer: Signer
): GnosisSafeContract_V1_3_0_Ethers {
  let safeContract
  switch (safeVersion) {
    case '1.3.0':
      safeContract = SafeMasterCopy_V1_3_0.connect(contractAddress, signer)
      return new GnosisSafeContract_V1_3_0_Ethers(safeContract)
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getMultiSendContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signer: Signer
): MultiSendContract_V1_3_0_Ethers {
  let multiSendContract
  switch (safeVersion) {
    case '1.3.0':
      multiSendContract = MultiSend_V1_3_0.connect(contractAddress, signer)
      return new MultiSendContract_V1_3_0_Ethers(multiSendContract)
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getMultiSendCallOnlyContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signer: Signer
): MultiSendCallOnlyContract_V1_3_0_Ethers {
  let multiSendCallOnlyContract
  switch (safeVersion) {
    case '1.3.0':
      multiSendCallOnlyContract = MultiSendCallOnly_V1_3_0.connect(contractAddress, signer)
      return new MultiSendCallOnlyContract_V1_3_0_Ethers(multiSendCallOnlyContract)
    default:
      throw new Error('Invalid Safe version')
  }
}

export function getSafeProxyFactoryContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signer: Signer
): GnosisSafeProxyFactoryContract_V1_3_0_Ethers {
  let gnosisSafeProxyFactoryContract
  switch (safeVersion) {
    case '1.3.0':
      gnosisSafeProxyFactoryContract = SafeProxyFactory_V1_3_0.connect(contractAddress, signer)
      return new GnosisSafeProxyFactoryContract_V1_3_0_Ethers(gnosisSafeProxyFactoryContract)
    default:
      throw new Error('Invalid Safe version')
  }
}
