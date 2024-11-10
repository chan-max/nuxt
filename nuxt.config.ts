const siteConf = {
  brandName: "ShadowForge",
  tagline: 'The Ultimate Destination for Gamers!',
}



export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: `${siteConf.brandName} - ${siteConf.tagline}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `Forge your path to greatness with LunaForge, where lunar magic and gaming artistry collide. Create epic worlds, solve mystical puzzles, and embark on adventures that shine under the moon’s glow. LunaForge offers a unique gaming experience that blends creativity and strategy, allowing you to craft your destiny in a realm filled with lunar wonders. Step into the moonlight and let your imagination take flight with LunaForge!` },
        { hid: 'keywords', name: 'keywords', content: 'lunaforge, lunar games, adventure games, action games, puzzle games, casual games, multiplayer games, single-player games, free games, browser games, mobile games, mystical fun, game challenges, game rewards, game tutorials, game walkthroughs, daily games, new games, popular games, trending games, game updates, game reviews, game achievements, game leaderboards, social games, play games, lunar play, creative play, game world, play online, game events, game activities, game competitions, moonlit gaming' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://securepubads.g.doubleclick.net' },
        { rel: 'dns-prefetch', href: 'https://securepubads.g.doubleclick.net' },
        { rel: 'preload', href: 'https://www.googletagservices.com/tag/js/gpt.js', as: 'script' }
      ],
      script: [
        { src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js', async: false, defer: false },
      ]
    }
  },
  runtimeConfig: {
    public: {
      ...siteConf,
      appEnv: process.env.NODE_ENV || 'development',
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
      apiURL: process.env.API_URL || 'https://api.ohioon.com',
      apiKey: process.env.API_KEY || 'f298164b-2e79-4823-ac51-53ffb604813d',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    "@nuxt/image",
    '@zadigetvoltaire/nuxt-gtm',
    "@stefanobartoletti/nuxt-social-share"
  ],
  gtm: {
    id: 'GTM-NTDHGBN9',
    defer: false,
  },
  site: {
    url: process.env.BASE_URL || 'http://localhost:3000',
  },
  sitemap: {
    cacheMaxAgeSeconds: 60 * 60 * 24,
    xsl: false,
    sitemaps: true,
    autoLastmod: true,
    sources: [
      '/api/__sitemap__/urls',
    ],
  },
  colorMode: {
    preference: 'light'
  },
})