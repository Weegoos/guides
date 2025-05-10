import comp from "/home/batyr_ashim/Рабочий стол/Мои проекты/vue press guide /vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/docs/code_logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Tailwind + Quasar\",\"details\":\"Базовые настройки и конфигурация проекта с использованием Tailwind CSS и Quasar Framework для быстрого старта.\"},{\"title\":\"Docker\",\"details\":\"Руководство по установке и базовой настройке проектов с использованием Docker.\"},{\"title\":\"Дополнительно\",\"details\":\"Различные советы и подсказки, которые не вошли в другие категории, но могут пригодиться в работе.\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1746879282000,\"contributors\":[{\"name\":\"Weegoos\",\"username\":\"\",\"email\":\"batyr.ashim05@mail.ru\",\"commits\":1}],\"changelog\":[{\"hash\":\"fb74b7f584688789169a78dec2c57019748085fc\",\"time\":1746879282000,\"email\":\"batyr.ashim05@mail.ru\",\"author\":\"Weegoos\",\"message\":\"first commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
