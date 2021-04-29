const BLOG = {
  title: 'invisprints blog',
  author: 'invisprints',
  email: 'invisprints@outlook.com',
  link: 'https://invisprints.vercel.app/',
  description: 'My personal blog',
  lang: 'zh-CN',
  appearance: 'light', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/invisprints',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: 'ajboZzHeZf90e3N8kPaf7QRoCg5aiEQSIWFf18fhYFA' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
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
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'nobelium', // The repository of store comments
      owner: 'invisprints',
      admin: ['invisprints'],
      clientID: '724370a04ff0a13a52df',
      clientSecret: '08608b259684ac907fcb1edb04e5713aca7d2841',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  }
}
// export default BLOG
module.exports = BLOG
