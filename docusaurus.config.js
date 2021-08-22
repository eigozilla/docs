const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Eigozilla',
  tagline: '英文法のすべてがここに。',
  url: 'https://eigozilla.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eigozilla', // Usually your GitHub org/user name.
  projectName: 'eigozilla', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Eigozilla',
      logo: {
        alt: 'Eigozilla Logo',
        src: 'img/icon_temporary.svg',
        srcDark: 'img/icon_temporary.svg',
        href: '/menu'
      },
      items: [
        {
          type: 'doc',
          docId: 'menu',
          position: 'left',
          label: '学習する',
        },
        { 
          to: 'donate', 
          position: 'right',
          label: '寄付する',
        },
        { 
          to: 'participate', 
          position: 'right',
          label: '参加する',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/eigozilla/eigozilla',
        //   label: 'Contribute',
        //   position: 'right',
        // },
        { type: 'search', position: 'left', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学習する',
          items: [
            {
              label: 'メニュー',
              to: '/menu',
            },
            {
              label: 'Eigozillaの紹介',
              to: '/',
            },
          ],
        },
        {
          title: '貢献する',
          items: [
            {
              label: '参加する',
              to: '/participate',
            },
            {
              label: '寄付する',
              to: '/donate',
            },
            {
              label: 'Slack',
              href: 'https://slack.com/intl/ja-jp/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eigozilla/',
            },
            {
              label: 'Donation',
              href: 'https://stripe.com/jp',
            }
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eigozilla Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '\u{1f319}',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{02600}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    hideableSidebar: true,
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      // Optional: see doc section bellow
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/icon_temporary.png',
    metadatas: [
      { name: 'og:title', content: 'Eigozilla | 英文法のすべてがここに。' },
      { name: 'twitter:card', content: 'summary' }
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs-only mode
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/eigozilla/eigozilla/blob/master/',
          admonitions: {
            options: {
              infima: true,
            },
            customTypes: {
              grammar: {
                ifmClass: 'alert alert--info',
                keyword: 'grammar',
                svg:
                  '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 7.553l6 7.447h-19v9h-1v-23h20l-6 6.553zm-13-5.553v12h16.91l-5.228-6.489 5.046-5.511h-16.728z"/></svg>'
              },
              example: {
                ifmClass: 'alert alert--secondary',
                keyword: 'example',
                svg:
                  '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 7.553l6 7.447h-19v9h-1v-23h20l-6 6.553zm-13-5.553v12h16.91l-5.228-6.489 5.046-5.511h-16.728z"/></svg>'
              },
            }
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/eigozilla/eigozilla/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
};
