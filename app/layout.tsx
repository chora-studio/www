'use client'

import { Background, Footer, Header, Sidebar } from 'chora/components'
import { MenuContextProvider, ThemeContextProvider } from 'chora/contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <ThemeContextProvider>
        <MenuContextProvider>
          <Background />
          <Header
            title={{
              link: '/',
              titleX: 'studio',
            }}
            items={[
              {
                link: '/products',
                title: 'products',
                target: '',
              },
              {
                link: '/solutions',
                title: 'solutions',
                target: '',
              },
              {
                link: '/validator',
                title: 'validator',
                target: '',
              },
              'divider',
              {
                link: 'https://chora.blog',
                title: 'blog',
                target: '_blank',
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
                link: 'https://ledger.chora.io/regen-1/network/validator/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                target: '_blank',
                title: 'chora validator',
              },
            ]}
            mobileOnly={true}
          />
          <main>{children}</main>
          <Footer
            sections={[
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
                    link: 'https://ledger.chora.io/regen-1/network/validator/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                    target: '_blank',
                    title: 'regen',
                  },
                  {
                    link: 'https://ledger.chora.io/regen-redwood-1/network/validator/regenvaloper1399y9huuus9phlv2d5fjnznem65nlmsn0qgfrd',
                    target: '_blank',
                    title: 'regen-redwood',
                  },
                  {
                    link: 'https://ledger.chora.io/chora-testnet-1/network/validator/choravaloper1394r2mejx4vaqrqkqm63k8m3qdsx6xzjquwy7u',
                    target: '_blank',
                    title: 'chora-testnet',
                  },
                ],
              },
            ]}
          />
        </MenuContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
)

export default Layout
