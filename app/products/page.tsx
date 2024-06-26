import { Metadata } from 'next'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'chora studio | products',
}

const ProductsPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          <h1>{'products'}</h1>
          <p>
            {'Chora Studio is stewarding '}
            <a href="https://chora.io" target="_blank">
              {'Chora'}
            </a>
            {
              ' - software for commons governance and ecological regeneration built with distributed ledger technology.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
