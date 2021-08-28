const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Eigozilla',
  tagline: '英文法のすべてがここに。',
  url: 'https://eigozilla.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eigozilla', // Usually your GitHub org/user name.
  projectName: 'eigozilla', // Usually your repo name.
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Eigozilla',
      logo: {
        alt: 'Eigozilla Logo',
        src: 'img/icon_temporary.svg',
        srcDark: 'img/icon_temporary.svg',
        href: '/'
      },
      items: [
        {
          type: 'doc',
          docId: 'menu',
          position: 'left',
          label: '学習する',
        },
        { 
          to: 'participate', 
          position: 'left',
          label: '参加する',
        },
        {
          to: 'donate',
          position: 'left',
          label: '寄付する',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/eigozilla/eigozilla',
        //   label: 'Contribute',
        //   position: 'right',
        // },
        { type: 'search', position: 'right', },
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
      { name: 'og:description', content: '完全無料・広告ゼロのオンライン英文法学習サイト。パワフルな検索で知りたい情報にアクセス。' },
      { name: 'twitter:card', content: 'summary' },
    ],
    googleAnalytics: {
      trackingID: 'G-6TBVXMP734'
    }
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
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.75 2.5a.25.25 0 00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023 2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path></svg>'
              },
              example: {
                ifmClass: 'alert alert--secondary',
                keyword: 'example',
                svg:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.75 2.5a.25.25 0 00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023 2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path></svg>'
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
};
