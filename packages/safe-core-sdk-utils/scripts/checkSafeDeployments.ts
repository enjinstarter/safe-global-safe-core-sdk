import { SafeVersion } from '@enjinstarter/safe-global-safe-core-sdk-types'
import { DeploymentFilter, getSafeSingletonDeployment } from '@enjinstarter/safe-global-safe-deployments'
import { networks } from '../src/eip-3770/config'

const safeVersion: SafeVersion = '1.3.0'

function getSafeDeploymentNetworks(): string[] {
  const filters: DeploymentFilter = { version: safeVersion, released: true }
  const singletons = getSafeSingletonDeployment(filters)
  if (!singletons) {
    throw new Error('Empty Safe Deployments')
  }
  return Object.keys(singletons.networkAddresses)
}

function getLocalNetworksConfig(): string[] {
  return networks.map(network => network.chainId.toString())
}

function checkConfigDiff() {
  const safeDeployments = getSafeDeploymentNetworks()
  const localNetworks = getLocalNetworksConfig()
  if (safeDeployments.length <= 0) {
    const errorMessage = `No safe deployments`
    throw new Error(errorMessage)
  }
  if (localNetworks.length <= 0) {
    const errorMessage = `EIP-3770 local config is empty`
    throw new Error(errorMessage)
  }
  const chainIdsDiff = safeDeployments.filter(chainId => !localNetworks.includes(chainId))
  if (chainIdsDiff.length > 0) {
    const errorMessage = `EIP-3770 local config is missing chainIds: ${chainIdsDiff}`
    throw new Error(errorMessage)
  }
}

checkConfigDiff()
