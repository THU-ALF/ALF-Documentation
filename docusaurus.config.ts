import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Replaces every "How-to guides" category with the pages inside it.
function flattenHowTo(items: any[]): any[] {
  return items.flatMap((item) => {
    if (item.type !== 'category') return [item];
    const children = flattenHowTo(item.items);
    if (item.label === 'How-to guides') return children;
    return [{...item, items: children}];
  });
}

const config: Config = {
  title: 'ALF XR Framework',
  tagline: 'Documentation for the ALF XR Framework',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages: https://thu-alf.github.io/ALF-Documentation/
  url: 'https://thu-alf.github.io',
  baseUrl: '/ALF-Documentation/',
  organizationName: 'THU-ALF',
  projectName: 'ALF-Documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Skip the "How-to guides" level in the sidebar: each tool only has
          // that one sub-section, so its guides are listed directly under the tool.
          // The files stay in */how-to/, so page URLs and links don't change.
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);
            return flattenHowTo(items);
          },
          editUrl: 'https://github.com/THU-ALF/ALF-Documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
  title: 'ALF XR Framework',
  logo: {
    alt: 'ALF logo',
    src: 'img/thu-logo.png',
  },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/THU-ALF/ALF-Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Introduction', to: '/docs/intro'}],
        },
        {
          title: 'More',
          items: [{label: 'GitHub', href: 'https://github.com/THU-ALF/ALF-Documentation'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} THU-ALF. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;