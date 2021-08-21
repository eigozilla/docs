const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Eigodzilla',
  tagline: '英文法のすべてがここに。',
  url: 'https://eigodzilla.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eigodzilla', // Usually your GitHub org/user name.
  projectName: 'eigodzilla', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Eigodzilla',
      logo: {
        alt: 'Eigodzilla Logo',
        src: 'img/icon_temporary.svg',
        srcDark: 'img/icon_temporary.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: '教材',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {to: 'contribute', label: 'Contribute', position: 'right'},
        // {
        //   href: 'https://github.com/eigodzilla/eigodzilla',
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
              label: 'はじめに',
              to: '/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: '貢献する',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.com/intl/ja-jp/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eigodzilla/',
            },
            {
              label: 'Donation',
              href: 'https://stripe.com/jp',
            }
          ],
        },
        {
          title: 'More',
          items: [
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eigodzilla Built with Docusaurus.`,
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
    image: 'img/sgc-53AjL2h_eO8-unsplash.jpg',
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
            'https://github.com/eigodzilla/eigodzilla/blob/master/',
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
            'https://github.com/eigodzilla/eigodzilla/blob/master/',
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
