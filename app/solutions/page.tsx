import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | solutions',
}

const SolutionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionText}>
        <div>
          <h1>{'solutions'}</h1>
          <p>
            {
              'Chora Studio provides software research and development as a service with a focus on distributed ledger technology and regenerative finance.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolutionsPage
