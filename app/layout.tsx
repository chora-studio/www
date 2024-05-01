'use client'

import { Background, Footer, Header, Sidebar } from 'chora/components'
import { MenuContextProvider, ThemeContextProvider } from 'chora/contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <main>
        <ThemeContextProvider>
          <MenuContextProvider>
            <Background />
            <Header
              title={{
                link: '/',
                titleX: 'studio',
              }}
              itemsLeft={[
                {
                  link: '/products',
                  title: 'products',
                },
                {
                  link: '/solutions',
                  title: 'solutions',
                },
                {
                  link: '/validator',
                  title: 'validator',
                },
              ]}
              itemsRight={[
                {
                  link: 'https://chora.blog',
                  title: 'blog',
                },
              ]}
              showMenuButton={true}
              showMobileTitle={true}
            />
            <Sidebar
              items={[
                {
                  link: '.',
                  target: '',
                  title: 'home',
                },
                {
                  link: 'products',
                  target: '',
                  title: 'products',
                },
                {
                  link: 'solutions',
                  target: '',
                  title: 'solutions',
                },
                {
                  link: 'validator',
                  target: '',
                  title: 'validator',
                },
                'divider',
                {
                  link: 'https://chora.blog',
                  target: '_blank',
                  title: 'chora blog',
                },
                {
                  link: 'https://chora.io',
                  target: '_blank',
                  title: 'chora software',
                },
                {
                  link: 'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                  target: '_blank',
                  title: 'chora validator',
                },
              ]}
              mobile={true}
            />
            {children}
            <Footer
              items={[
                {
                  title: 'chora studio',
                  items: [
                    {
                      link: 'https://chora.blog',
                      target: '_blank',
                      title: 'blog',
                    },
                    {
                      link: '/products',
                      target: '',
                      title: 'products',
                    },
                    {
                      link: '/solutions',
                      target: '',
                      title: 'solutions',
                    },
                    {
                      link: '/validator',
                      target: '',
                      title: 'validator',
                    },
                  ],
                },
                {
                  title: 'chora software',
                  items: [
                    {
                      link: 'https://chora.io',
                      target: '_blank',
                      title: 'applications',
                    },
                    {
                      link: 'https://docs.chora.io',
                      target: '_blank',
                      title: 'documentation',
                    },
                    {
                      link: 'https://github.com/chora-io',
                      target: '_blank',
                      title: 'repositories',
                    },
                  ],
                },
                {
                  title: 'chora validator',
                  items: [
                    {
                      link: 'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                      target: '_blank',
                      title: 'regen',
                    },
                    {
                      link: 'https://chora.io/ledger',
                      target: '_blank',
                      title: 'regen-redwood',
                    },
                    {
                      link: 'https://chora.io/ledger',
                      target: '_blank',
                      title: 'chora-testnet',
                    },
                  ],
                },
              ]}
            />
          </MenuContextProvider>
        </ThemeContextProvider>
      </main>
    </body>
  </html>
)

export default Layout
