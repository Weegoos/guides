import { GitContributors } from "/home/batyr_ashim/Рабочий стол/Мои проекты/vue press guide /vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/home/batyr_ashim/Рабочий стол/Мои проекты/vue press guide /vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
