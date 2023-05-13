# Teachers for All

In April 2023 César De León contacted Mike Mathew based on his TFAA website work. César wanted an easier way to get scholarship applications to fine arts students in the Austin ISD in Austin, Texas.

- [Preview](#preview)
- [Development](#development)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)
- [Credits and Thank yous](#credits-and-thank-yous)

## Preview

https://teachers-for-all.netlify.app

## Features

**This starter includes:**

- The whole CSS workflow as suggested by buildexcellentwebsit.es
- Accessible site navigation, editable in `src/_data/navigation.js`
- Image optimization with Eleventy-img _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-an-image/))_
- Youtube embed with lite-youtube _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-a-video/))_
- Easy resource fetching with eleventy-fetch _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-fetched-content/))_
- Syntax highlighting via eleventy-plugin-syntaxhighlight _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-some-code/))_
- Advanced markdown handling _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-all-the-markdown/))_
- 301 redirects for Netlify _([see blog post](https://eleventy-excellent.netlify.app/blog/post-with-301-redirects/))_
- Automatically generated Open Graph images for blog posts _([see blog post](https://eleventy-excellent.netlify.app/blog/open-graph-images/))_
- SEO basics (XML-sitemap, metadata)
- dayjs handling dates & times
- Bundling via esbuild
- RSS feed
- Links to social networks in footer
- Mastodon domain verification snippet

## First steps

- **Important:** edit meta data in `src/_data/meta.js`, it's being used all over the template.
- Edit your social media in `src/_data/social.js` and `src/_includes/icons`. If you add new icons they must be prefixed with "social-". By default you have rss, mastodon, twitter, ko-fi, linkedin and github. Great resource: https://lucide.dev/
- Not required, but recommended: Delete `github.js` in `src/_data/github.js` and the blog posts, as these serve only as an example.
- Edit your preferences (colors, fluid text sizes etc.) in `src/assets/design-tokens`.
- Optional: set your (favicon) icons in `src/assets/images/favicon`.
- Optional: rename `.env-sample` to `.env` and set custom URL for local development.
- Optional: Change fonts. This starter uses three fonts, Red Hat Display, and Inter. You can add or delete fonts in `src/assets/fonts`. I recommend creating font subsets for performance, for example using the [Fontsquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator). Next, edit `src/assets/css/global/fonts.css`. Add your new font aliases in `src/assets/design-tokens/fonts.json`. Finally, in `src/_layouts/base.njk` edit the font preloads.

## Development

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm run dev
```

### Creating a production build

Minify JS, CSS and HTML.

```
npm run build
```

## Credits and Thank yous

**Lene Saile**

Her "eleventy-excellent" starter was the perfect way to jump-start this small web page. Thank you, Lene! :sunglasses:

- https://github.com/madrilene/eleventy-excellent
- https://www.lenesaile.com/
