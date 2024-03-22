// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

import dsVariableProcessor from "./js-lib/docusaurus-variables.js";
import lhSubstituteCurrentVersion from "./js-lib/longhorn-versions.js";

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      // Process Longhorn versions
      fileContent = lhSubstituteCurrentVersion(fileContent, filePath);

      // Process variables
      fileContent = dsVariableProcessor(fileContent);
      return fileContent;
    },
  },
  title: "Longhorn",
  tagline:
    "Longhorn is a lightweight, reliable, and powerful distributed block storage system for Kubernetes.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  // url: "https://longhorn.io",
  url: "https://main--longhornio-docusaurus.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "longhorn", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          lastVersion: "1.6.0",
          versions: {
            "1.7.0": {
              label: "1.7.0-dev",
              banner: "none",
            },
            "1.6.1": {
              label: "1.6.1-dev",
              banner: "none",
            },
            "1.6.0": {
              label: "1.6.0",
              banner: "none",
            },
            "1.5.5": {
              label: "1.5.5-dev",
              banner: "none",
            },
            "1.5.4": {
              label: "1.5.4",
              banner: "none",
            },
            "1.5.3": {
              label: "1.5.3",
              banner: "none",
            },
            "1.5.2": {
              label: "1.5.2",
              banner: "none",
            },
            "1.5.1": {
              label: "1.5.1",
              banner: "none",
            },
            "1.5.0": {
              label: "1.5.0",
              banner: "none",
            },
            "1.4.5": {
              label: "1.4.5-dev",
              banner: "none",
            },
            "1.4.4": {
              label: "1.4.4",
              banner: "none",
            },
            "1.4.3": {
              label: "1.4.3",
              banner: "none",
            },
            "1.4.2": {
              label: "1.4.2",
              banner: "none",
            },
            "1.4.1": {
              label: "1.4.1",
              banner: "none",
            },
            "1.4.0": {
              label: "1.4.0",
              banner: "none",
            },
          },
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/longhorn/website-docusaurus/edit/main",
        },
        blog: {
          blogTitle: "Longhorn Blog",
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarTitle: "All blog posts",
          blogSidebarCount: "ALL",
          authorsMapPath: "authors.yml",
          editUrl: "https://github.com/longhorn/website-docusaurus/blog/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "kb",
        routeBasePath: "kb",
        path: "./kb",
        showReadingTime: true,
        postsPerPage: 5,
        blogSidebarTitle: "All KB articles",
        blogSidebarCount: "ALL",
        authorsMapPath: "authors.yml",
        editUrl: "https://github.com/longhorn/website-docusaurus/kb/",
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "U8UCEP4M9V",

        // Public API key: it is safe to commit it
        apiKey: "f70f0002b318431425da489b9897dd13",

        indexName: "main--longhornio-usaurus",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      navbar: {
        title: "Longhorn",
        logo: {
          alt: "Longhorn Logo",
          src: "img/icon-longhorn.svg",
          srcDark: "img/icon-longhorn-dark.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            label: "Documentation",
          },
          {
            href: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "/kb",
            label: "Knowledge Base",
            position: "left",
          },
          {
            type: "search",
            position: "left",
          },
          {
            href: "https://github.com/longhorn",
            label: "GitHub",
            position: "right",
          },
          {
            type: "dropdown",
            label: "Community",
            position: "right",
            items: [
              {
                label: "Slack",
                href: "https://cloud-native.slack.com/messages/longhorn",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Longhorn, a CNCF project.`,
      },
      prism: {
        theme: prismThemes.shadesOfPurple,
        darkTheme: prismThemes.shadesOfPurple,
      },
    }),
};

export default config;
