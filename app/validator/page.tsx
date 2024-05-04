import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | validator',
}

const regenLink =
  'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e'

const ValidatorPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          <h1>{'validator'}</h1>
          <p>
            {'Chora Studio operates Chora Validator on '}
            <a href={regenLink} target="_blank">
              {'Regen'}
            </a>
            {
              ' and multiple test networks including Regen Redwood and Chora Testnet.'
            }
          </p>
          <h2>{'what is a validator?'}</h2>
          <p>
            {
              'In the context of distributed ledger technology, a validator is a node in a network responsible for verifying and producing state transitions. Validators play a critical role in ensuring the security and integrity of a network. '
            }
          </p>
          <p>
            {
              'Chora Validator is currently operating on proof-of-stake blockchains in the Cosmos ecosystem. On proof-of-stake networks, validators stake tokens (i.e. lock up their tokens in the network) and then earn rewards for successfully verifying and producing blocks. Validators are also penalized for downtime or acting maliciously. When a validator is penalized, a portion of the staked tokens are slashed (i.e. destroyed and cannot be recovered).'
            }
          </p>
          <p>
            {
              'In the Cosmos ecosystem, token holders stake tokens with validators to earn rewards alongside validators. When a validator is penalized for downtime or acting maliciously, the token holders are also penalized, i.e. a portion of the staked tokens from each account staking with the validator is slashed. Token holders are therefore incentivized to stake tokens with validators they trust, which in turn reduces the risk of lost assets and helps to ensure the security and integrity of the network.'
            }
          </p>
          <h2>{'what about governance?'}</h2>
          <p>
            {
              'In addition to verifying and producing blocks, validators on proof-of-stake networks in the Cosmos ecosystem also act as representatives in network governance. When staking with a validator in the Cosmos ecosystem, token holders are also delegating their voting power (i.e. one token, one vote) to the validator. Token holders have the option to cancel out their delegated votes by voting independently. If a token holder does not intend to vote on every governance proposal independently, they should stake with validators they think will best represent their interests.'
            }
          </p>
          <h2>{'what about other services?'}</h2>
          <p>
            {
              'Although not required, validators (or companies running validators) often provide additional tools and services as public goods for the benefit of the network. For example, some may run additional infrastructure such as full nodes, archive nodes, relayers, oracle services, or a testnet validator on the corresponding test network, some may contribute to designing, building, or maintaining software, some may organize working groups and publish their research, etc. Token holders may want to consider staking with validators that bring additional and diverse forms of value to the network.'
            }
          </p>
          <h2>{'why choose chora validator?'}</h2>
          <p>
            {
              'Chora Validator is committed to ensuring the security and integrity of every network that Chora Validator operates on. Chora Validator is operated by a senior software engineer with more than two years of experience building, maintaining, and testing software within the Cosmos ecosystem.'
            }
          </p>
          <h3>{'regen'}</h3>
          <p>
            {
              'Chora Validator is running a validator node and a full node with public API endpoints. Chora Validator is also running a testnet validator node on Regen Redwood (the stable test network for Regen). Chora Validator is committed to offsetting energy costs with carbon credits issued on Regen.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ValidatorPage
