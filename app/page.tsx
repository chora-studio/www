import { Metadata } from 'next'

import Background from '@components/Background'

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
            <i>
              {'what is the role of technology in ecological regeneration?'}
            </i>
          </p>
          <p>{'software research and development'}</p>
        </div>
      </div>
      <div className={styles.sectionText}>
        <div>
          <h2>{'products'}</h2>
          <p>
            {'Chora Studio is stewarding '}
            <a href="https://chora.io" target="_blank">
              {'Chora Protocol'}
            </a>
            {
              ' - distributed ledger technology for commons governance and ecological regeneration.'
            }
          </p>
          <p>
            <a href="/products">{'learn more ⇾'}</a>
          </p>
          <h2>{'solutions'}</h2>
          <p>
            {
              'Chora Studio offers software research and development consulting services to clients building infrastructure for climate solutions.'
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
