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
              'Chora Studio offers software research and development consulting services to clients building tools and infrastructure for climate solutions.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolutionsPage
