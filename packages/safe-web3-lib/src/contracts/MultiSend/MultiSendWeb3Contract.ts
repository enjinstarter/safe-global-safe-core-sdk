import { MultiSendContract } from '@enjinstarter/safe-global-safe-core-sdk-types'
import { Multi_send as MultiSend_V1_3_0 } from '../../../typechain/src/web3-v1/v1.3.0/Multi_send'

abstract class MultiSendWeb3Contract implements MultiSendContract {
  constructor(public contract: MultiSend_V1_3_0) {}

  getAddress(): string {
    return this.contract.options.address
  }

  encode(methodName: string, params: any[]): string {
    return (this.contract as any).methods[methodName](...params).encodeABI()
  }
}

export default MultiSendWeb3Contract
