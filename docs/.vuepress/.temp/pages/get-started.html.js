import comp from "/home/batyr_ashim/Рабочий стол/Мои проекты/vue press guide /vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Tailwind + Quasar\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{\"updatedTime\":1746879282000,\"contributors\":[{\"name\":\"Weegoos\",\"username\":\"Weegoos\",\"email\":\"batyr.ashim05@mail.ru\",\"commits\":1,\"url\":\"https://github.com/Weegoos\"}],\"changelog\":[{\"hash\":\"fb74b7f584688789169a78dec2c57019748085fc\",\"time\":1746879282000,\"email\":\"batyr.ashim05@mail.ru\",\"author\":\"Weegoos\",\"message\":\"first commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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
