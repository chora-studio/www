import { Background } from 'chora/components'
import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research and development',
}

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.sectionMain}>
        <div>
          <h1>
            {'chora '}
            <span style={{ opacity: '0.75' }}>{'studio'}</span>
          </h1>
          <p>
            <i>{'commons governance and ecological regeneration'}</i>
          </p>
          <p>{'research and development'}</p>
        </div>
      </div>
      <div className={styles.sectionText}>
        <div>
          <h2>{'products'}</h2>
          <p>
            {'Chora Studio is stewarding '}
            <a href="https://chora.io" target="_blank">
              {'Chora'}
            </a>
            {
              ' - software for commons governance and ecological regeneration built with distributed ledger technology.'
            }
          </p>
          <p>
            <a href="/products">{'learn more ⇾'}</a>
          </p>
          <h2>{'solutions'}</h2>
          <p>
            {
              'Chora Studio provides software research and development as a service with a focus on distributed ledger technology and regenerative finance.'
            }
          </p>
          <p>
            <a href="/solutions">{'learn more ⇾'}</a>
          </p>
          <h2>{'validator'}</h2>
          <p>
            {'Chora Studio operates Chora Validator on '}
            <a
              href="https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e"
              target="_blank"
            >
              {'Regen'}
            </a>
            {
              ' and multiple test networks including Regen Redwood and Chora Testnet.'
            }
          </p>
          <p>
            <a href="/validator">{'learn more ⇾'}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
