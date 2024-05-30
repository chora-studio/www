import { ArrowRight } from 'chora/components/icons'
import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | research and development',
}

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div>
          <h1>
            {'chora'} <span style={{ opacity: '0.75' }}>{'studio'}</span>
          </h1>
          <p>
            <i>{'commons governance and ecological regeneration'}</i>
          </p>
          <p>{'research and development'}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h2>{'products'}</h2>
          <p>
            {'Chora Studio is stewarding '}
            <Link href="https://chora.io" target="_blank">
              {'Chora'}
            </Link>
            {
              ' - software for commons governance and ecological regeneration built with distributed ledger technology.'
            }
          </p>
          <Link href="/products">
            {'learn more'}
            <ArrowRight />
          </Link>
          <h2>{'solutions'}</h2>
          <p>
            {
              'Chora Studio provides software research and development as a service with a focus on distributed ledger technology and regenerative finance.'
            }
          </p>
          <Link href="/solutions">
            {'learn more'}
            <ArrowRight />
          </Link>
          <h2>{'validator'}</h2>
          <p>
            {'Chora Studio operates Chora Validator on '}
            <a
              href="https://ledger.chora.io/regen-1/network/validator/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e"
              target="_blank"
            >
              {'Regen'}
            </a>
            {
              ' and multiple test networks including Regen Redwood and Chora Testnet.'
            }
          </p>
          <Link href="/validator">
            {'learn more'}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
