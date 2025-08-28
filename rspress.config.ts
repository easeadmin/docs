import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'EaseAdmin',
  icon: '/logo.png',
  logo: {
    light: '/logo-light.png',
    dark: '/logo-dark.png',
  },
  base: '/docs/',
  ssg: true,
  lang: 'zh',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'EaseAdmin',
      description: '使用指南',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'EaseAdmin',
      description: 'Guide',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/easeadmin/core',
      },
    ],
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: {
            src: 'https://hm.baidu.com/hm.js?72868bb68244350d9257dc4e44db15a5'
          }
        }
      ]
    }
  },
});
