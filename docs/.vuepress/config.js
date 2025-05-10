import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Guides',
  description: 'Подсказки для программирования',

  theme: defaultTheme({
    logo: '/images/docs/code_logo.png',

    navbar: ['/', '/get-started', '/get-additional'],
  }),

  bundler: viteBundler(),
})
