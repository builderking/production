import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ondi Docs',
  tagline: 'Your Logistics Partner — The smarter way to move products online',
  favicon: 'img/favicon.ico',

  // Client-available config
  customFields: {
    // Use same-origin session endpoint to avoid CORS in production
    chatkitSessionUrl: '/api/chatkit/session',
    chatkitWorkflowId: 'wf_69039d9633ac8190aabba5c3ee297cc70ce212b517da778d',
    // UPDATE THIS: Get a new domain key for docs.ondi.io from OpenAI ChatKit settings
    chatkitDomainPublicKey: 'domain_pk_690473beabac81909f2761a18cd208e70f58ffa752d4fb0d',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs-ondi.web.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Load OpenAI ChatKit bubble on all pages
  scripts: [
    {
      src: 'https://cdn.platform.openai.com/deployments/chatkit/chatkit.js',
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social share image used for OpenGraph/Twitter cards
    image: 'img/Social image 1200 by 676.jpg',
    // Default site metadata
    metadata: [
      {
        name: 'description',
        content:
          'Ondi is a modular logistics system with Last‑mile Delivery, Warehousing, Express Shipping, and more.',
      },
      {
        name: 'keywords',
        content:
          'Ondi, logistics, last mile delivery, warehousing, express shipping, distribution, fulfillment',
      },
    ],
    navbar: {
      logo: {
        alt: 'Ondi Logo',
        src: 'img/ondi-logo-512.png',
        href: 'https://ondi.io',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Learn', position: 'left'},
        {
          href: 'https://app.ondi.io',
          label: 'Try Ondi!',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
