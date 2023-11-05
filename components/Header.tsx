'use client'

import { ThemeContext } from '@contexts/ThemeContext'
import choraLogoDark from '../public/images/chora_dark_small.png'
import choraLogoLight from '../public/images/chora_light_small.png'
import ThemeButton from '@components/ThemeButton'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import styles from './Header.module.css'

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (darkTheme) {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  }

  return (
    <div className={styles.header}>
      <div style={{ display: 'none' }}>{darkTheme.toString()}</div>
      <div>
        <div className={styles.title}>
          <Link href="/">
            <Image
              alt="chora studio"
              src={darkTheme ? choraLogoDark : choraLogoLight}
            />
            <div>
              {'chora '}
              <span style={{ opacity: '0.75' }}>{'studio'}</span>
            </div>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/products">{'products'}</Link>
            </li>
            <li>
              <Link href="/solutions">{'solutions'}</Link>
            </li>
            <li>
              <Link href="/validator">{'validator'}</Link>
            </li>
            <li className={styles.divider}>{'|'}</li>
            <li>
              <Link href="https://chora.blog" target="_blank">
                {'blog ↗'}
              </Link>
            </li>
          </ul>
          <ThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  )
}

export default Header
