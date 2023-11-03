import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | validator',
}

const regenLink =
  'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e'

const ValidatorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionText}>
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
              'Chora Validator is currently operating on proof-of-stake blockchains in the Cosmos ecosystem. With proof-of-stake networks, validators stake tokens (i.e. lock up tokens in the network) and then earn rewards for successfully verifying and producing blocks. Validators are also penalized for downtime or acting maliciously. When a validator is penalized, a portion of the staked tokens are slashed (i.e. destroyed and cannot be recovered).'
            }
          </p>
          <p>
            {'In the Cosmos ecosystem, token holders stake their tokens with validators to earn staking rewards alongside validators. When a validator is penalized for downtime or acting maliciously, token holders staking with the validator are also penalized, i.e. a portion of staked tokens from each account staking with the validator is also slashed. As a result, token holders are incentivized to stake tokens with validators they trust in order to reduce the risk of lost assets and to ensure the security and integrity of the network.'
            }
          </p>
          <h2>{'what about governance?'}</h2>
          <p>
            {
              'In addition to verifying and producing blocks, validators on proof-of-stake networks in the Cosmos ecosystem also act as representatives in network governance. When staking with a validator in the Cosmos ecosystem, token holders are also delegating their voting power (i.e. one token, one vote) to the validator. Token holders have the option to cancel out their delegated votes by voting independently. If a token holder does not intend to weigh in and vote independently on every governance proposal, they should choose validators that they feel best represents their interests.'
            }
          </p>
          <h2>{'what about other services?'}</h2>
          <p>
            {
              'Although not required, validators (or companies running validators) often provide additional tools and services as public goods for the benefit of the network. For example, some validators may run additional infrastructure such as full nodes, archive nodes, relayers, data oracles, or a validator on the corresponding test network, some validators may contribute to building or maintaining software, some validators may organize working groups and publish research, etc. Token holders may consider staking with validators that bring additional value to the network.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ValidatorPage
