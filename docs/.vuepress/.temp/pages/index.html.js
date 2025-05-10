import comp from "/home/batyr_ashim/Рабочий стол/Мои проекты/vue press guide /vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Домой\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Домой\",\"heroImage\":\"/images/docs/code_logo.png\",\"actions\":[{\"text\":\"Tailwind + Quasar\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"Допольнительно\",\"link\":\"/get-additional.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Tailwind + Quasar\",\"details\":\"Базовые настройки и конфигурация проекта с использованием Tailwind CSS и Quasar Framework для быстрого старта.\"},{\"title\":\"Docker\",\"details\":\"Руководство по установке и базовой настройке проектов с использованием Docker.\"},{\"title\":\"Дополнительно\",\"details\":\"Различные советы и подсказки, которые не вошли в другие категории, но могут пригодиться в работе.\"}],\"footer\":\"Copyright © 2025-present\"},\"headers\":[],\"git\":{\"updatedTime\":1746880208000,\"contributors\":[{\"name\":\"Weegoos\",\"username\":\"Weegoos\",\"email\":\"batyr.ashim05@mail.ru\",\"commits\":2,\"url\":\"https://github.com/Weegoos\"}],\"changelog\":[{\"hash\":\"9f476defb12e39ff51a84979f0b1d0570649b413\",\"time\":1746880208000,\"email\":\"batyr.ashim05@mail.ru\",\"author\":\"Weegoos\",\"message\":\"The landing page has been updated\"},{\"hash\":\"fb74b7f584688789169a78dec2c57019748085fc\",\"time\":1746879282000,\"email\":\"batyr.ashim05@mail.ru\",\"author\":\"Weegoos\",\"message\":\"first commit\"}]},\"filePathRelative\":\"README.md\"}")
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
