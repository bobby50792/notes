import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import remarkFootnotes from 'remark-footnotes';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';

function rehypeRenameFootnotes() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'h2' && node.children?.[0]?.value === 'Footnotes') {
        node.children[0].value = '脚注';
      }
    });
  };
}

const config: Config = {
  title: 'Bobby 的网站',
  tagline: '基于 Docusaurus 搭建的文档站',
  url: 'https://notes-bobby.vercel.app',
  baseUrl: '/',
  organizationName: 'bobby50792',
  projectName: 'notes',
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'] },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          remarkPlugins: [remarkMath, remarkFootnotes],
          rehypePlugins: [rehypeKatex, rehypeRenameFootnotes],
        },
        blog: {
          showReadingTime: false,
          remarkPlugins: [remarkMath, remarkFootnotes],
          rehypePlugins: [rehypeKatex, rehypeRenameFootnotes],
          blogSidebarTitle: "最新文章",
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '首页',
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: '文档', position: 'left' },
        { to: '/blog', label: '博客', position: 'left' },
        // { href: 'https://github.com/bobby50792/notes', label: 'GitHub', position: 'right' },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [{ title: '文档', items: [{ label: '快速开始', to: '/docs/intro' }] }],
    // },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
    },
  ],
};

export default config;
