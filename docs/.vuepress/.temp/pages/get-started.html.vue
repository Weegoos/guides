<template><div><h1 id="front-end" tabindex="-1"><a class="header-anchor" href="#front-end"><span>Front-end</span></a></h1>
<p>Гайды как запускать и работать с Tailwind CSS, Quasar, Vue-press</p>
<h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2>
<h2 id="cordova-quasar" tabindex="-1"><a class="header-anchor" href="#cordova-quasar"><span>Cordova + Quasar</span></a></h2>
<h3 id="как-создавать-apk" tabindex="-1"><a class="header-anchor" href="#как-создавать-apk"><span>Как создавать APK</span></a></h3>
<ol>
<li>
<p>Удаляем ранее созданный dist/spa во фронте</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> dist/spa</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Оставаясь в папке фронта, не переходя src-cordova, создаем сборку</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">quasar build <span class="token parameter variable">-m</span> cordova <span class="token parameter variable">-T</span> android</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Переходим в папку src-cordova</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> src-cordova</span>
<span class="line">cordova build android //в папке запускаем</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="vue-press" tabindex="-1"><a class="header-anchor" href="#vue-press"><span>Vue press</span></a></h2>
<h3 id="установка" tabindex="-1"><a class="header-anchor" href="#установка"><span>Установка</span></a></h3>
<ol>
<li>Создание проекта VuePress:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init vuepress vuepress-starter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Переход в папку проекта и инициализация Git:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> vuepress-starter</span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Инициализация:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>Установка VuePress</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="как-запускать" tabindex="-1"><a class="header-anchor" href="#как-запускать"><span>Как запускать</span></a></h3>
<ol>
<li>Переход в нужную папку:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> vuepress-starter/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Запускаем проект</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="как-изменить-фотографию-на-главнои-странице" tabindex="-1"><a class="header-anchor" href="#как-изменить-фотографию-на-главнои-странице"><span>Как изменить фотографию на главной странице?</span></a></h3>
<h4 id="_1-создаем-папку-public-в-docs-vuepress" tabindex="-1"><a class="header-anchor" href="#_1-создаем-папку-public-в-docs-vuepress"><span>1. Создаем папку public в .docs/.vuepress/</span></a></h4>
<h4 id="_2-создаем-папки-docs-vuepress-public-images-docs-здесь-будут-храниться-фотографии" tabindex="-1"><a class="header-anchor" href="#_2-создаем-папки-docs-vuepress-public-images-docs-здесь-будут-храниться-фотографии"><span>2. Создаем папки docs/.vuepress/public/images/docs/ (здесь будут храниться фотографии)</span></a></h4>
<h4 id="_3-переходим-readme-md-и-меняем-иконку" tabindex="-1"><a class="header-anchor" href="#_3-переходим-readme-md-и-меняем-иконку"><span>3. Переходим README.md и меняем иконку</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">home: <span class="token boolean">true</span></span>
<span class="line">title: Домой</span>
<span class="line">heroImage: /images/docs/code_logo.png</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


