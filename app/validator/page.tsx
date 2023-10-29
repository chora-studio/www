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
          <h2>{'validator'}</h2>
          <p>
            {'Chora Studio operates as Chora Validator on '}
            <a href={regenLink} target="_blank">
              {'Regen'}
            </a>
            {
              ' as well as multiple test networks including Regen Redwood and Chora Testnet.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ValidatorPage
