module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Teachers For All',
  siteDescription:
    'Teachers For All is a non-profit organization that connects fine arts students with scholarships for summer camps.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Mike Mathew', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.png', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Teachers For All is a non-profit organization that connects fine arts students with scholarships for summer camps.', // alt text for default meta image
    // twitterSite: '', // i.e. @site - twitter profile of the site
    // twitterCreator: '', // i.e. @author -  twitter profile of the site
    // mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Teachers For All Articles',
    description:
      'Teachers For All is a non-profit organization that connects fine arts students with scholarships for summer camps.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    org: 'Teachers For All',
    street: '',
    city: 'Austin',
    state: 'Texas',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'CesarDeLeon@teachersforall.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
