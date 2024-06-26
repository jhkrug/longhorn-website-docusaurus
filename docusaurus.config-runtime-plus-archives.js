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
    "Cloud native, distributed, block storage for Kubernetes<br/>Easy to use, 100% open source, run anywhere",
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
          lastVersion: "1.6.1",
          // onlyIncludeVersions: ["1.7.0", "1.6.1"],
          versions: {
            "1.7.0": {
              label: "1.7.0-dev",
              banner: "none",
            },
            "1.6.2": {
              label: "1.6.2",
              banner: "none",
            },
            "1.6.1": {
              label: "Docs 1.6.1-latest",
              banner: "none",
            },
            "1.6.0": {
              label: "1.6.0",
              banner: "none",
            },
            "1.5.6": {
              label: "1.5.6-dev",
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
            "1.4.4": {
              label: "1.4.4-archived",
              banner: "unmaintained",
            },
            "1.4.3": {
              label: "1.4.3-archived",
              banner: "unmaintained",
            },
            "1.4.2": {
              label: "1.4.2-archived",
              banner: "unmaintained",
            },
            "1.4.1": {
              label: "1.4.1-archived",
              banner: "unmaintained",
            },
            "1.4.0": {
              label: "1.4.0-archived",
              banner: "unmaintained",
            },
            "1.3.4": {
              label: "1.3.4-archived",
              banner: "unmaintained",
            },
            "1.3.3": {
              label: "1.3.3-archived",
              banner: "unmaintained",
            },
            "1.3.2": {
              label: "1.3.2-archived",
              banner: "unmaintained",
            },
            "1.3.1": {
              label: "1.3.1-archived",
              banner: "unmaintained",
            },
            "1.3.0": {
              label: "1.3.0-archived",
              banner: "unmaintained",
            },
            "1.2.6": {
              label: "1.2.6-archived",
              banner: "unmaintained",
            },
            "1.2.5": {
              label: "1.2.5-archived",
              banner: "unmaintained",
            },
            "1.2.4": {
              label: "1.2.4-archived",
              banner: "unmaintained",
            },
            "1.2.3": {
              label: "1.2.3-archived",
              banner: "unmaintained",
            },
            "1.2.2": {
              label: "1.2.2-archived",
              banner: "unmaintained",
            },
            "1.2.1": {
              label: "1.2.1-archived",
              banner: "unmaintained",
            },
            "1.2.0": {
              label: "1.2.0-archived",
              banner: "unmaintained",
            },
            "1.1.3": {
              label: "1.1.3-archived",
              banner: "unmaintained",
            },
            "1.1.2": {
              label: "1.1.2-archived",
              banner: "unmaintained",
            },
            "1.1.1": {
              label: "1.1.1-archived",
              banner: "unmaintained",
            },
            "1.1.0": {
              label: "1.1.0-archived",
              banner: "unmaintained",
            },
            "1.0.2": {
              label: "1.0.2-archived",
              banner: "unmaintained",
            },
            "1.0.1": {
              label: "1.0.1-archived",
              banner: "unmaintained",
            },
            "1.0.0": {
              label: "1.0.0-archived",
              banner: "unmaintained",
            },
            "0.8.1": {
              label: "0.8.1-archived",
              banner: "unmaintained",
            },
            "0.8.0": {
              label: "0.8.0-archived",
              banner: "unmaintained",
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
          hideable: false,
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
        hideOnScroll: true,
        title: "LONGHORN",
        logo: {
          alt: "Longhorn Logo",
          src: "img/icon-longhorn.svg",
          srcDark: "img/icon-longhorn-dark.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
            label: "Documentation",
            position: "left",
            dropdownActiveClassDisabled: false,
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/kb",
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
            href: "https://cloud-native.slack.com/messages/longhorn",
            label: "Slack",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© 2019-${new Date().getFullYear()} Longhorn authors |
					Documentation distributed under CC-BY-4.0.<br/>
					© ${new Date().getFullYear()} The Linux Foundation. All rights
					reserved. The Linux Foundation has registered trademarks and uses
					trademarks.<br/>For a list of trademarks of the Linux Foundation
					please see our
					<a href="https://www.linuxfoundation.org/trademark-usage/">Trademark
					Usage</a> page.`,
      },
      prism: {
        theme: prismThemes.shadesOfPurple,
        darkTheme: prismThemes.shadesOfPurple,
      },
    }),
};

export default config;
