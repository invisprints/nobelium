const BLOG = {
  title: 'invisprints blog',
  author: 'invisprints',
  email: 'invisprints@outlook.com',
  link: 'https://invisprints.vercel.app/',
  description: 'My personal blog',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'light', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2016, // if leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true, // WIP
  showArchive: true, // WIP
  autoCollapsedNavBar: false, // the automatically collapsed navigation bar
  socialLink: 'https://twitter.com/invisprints',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: 'ajboZzHeZf90e3N8kPaf7QRoCg5aiEQSIWFf18fhYFA' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: 'https://ackee.craigary.net/tracker.js', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: 'https://ackee.craigary.net', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '0e2257a8-54d4-4847-91a1-0311ea48cc7b' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-YL3M6R137Y' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    // gitalkConfig: {
    //   repo: 'nobelium', // The repository of store comments
    //   owner: 'invisprints',
    //   admin: ['invisprints'],
    //   clientID: '724370a04ff0a13a52df',
    //   clientSecret: '08608b259684ac907fcb1edb04e5713aca7d2841',
    //   distractionFreeMode: false
    // },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: 'b395630c-94f7-4a6c-9121-f6dea33ec798', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
