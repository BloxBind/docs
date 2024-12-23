import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { title } from 'process'

export default {
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title

    const description =
      config.frontMatter.description ||
      'Documentation for BloxBind, a tool for creating and managing Roblox games.'
    const title = config.title + (route === '/' ? '' : ' - BloxBind')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="bloxbind.com" />
        <meta name="twitter:url" content="https://bloxbind.com" />
        <meta name="apple-mobile-web-app-title" content="BloxBind" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
    docsRepositoryBase: 'https://github.com/BloxBind/docs/tree/main',
    logo: <span>BloxBind Documentation</span>,
    project: {
      link: 'https://github.com/BloxBind/docs'
    },
    chat: {
        link: 'https://discord.gg/keWQpA4NXT',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
          </svg>
          )
    },
    footer: {
      content: (
        <span>
          {new Date().getFullYear()} ©{' '}
          <a href="https://bloxbind.com" target="_blank">
            BloxBind
          </a>
          .
        </span>
      )
    },
   color: {
    hue: { dark: 237, light: 237},
    saturation: { dark: 100, light: 100},
    lightness: { dark: 58, light: 0},
   },
   banner: {
    key: 'bloxbannerv1',
    content: (
      <a href="https://bloxbind.com" target="_blank">
        🎉 BloxBind is entering public beta. Read more →
      </a>
    ),
  },
  }