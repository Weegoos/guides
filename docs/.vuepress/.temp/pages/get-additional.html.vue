<template><div><h1 id="допольнительно" tabindex="-1"><a class="header-anchor" href="#допольнительно"><span>Допольнительно</span></a></h1>
<p>Здесь будут допольнительные команды в терминале Linux (Ubuntu) в различных ситуациях</p>
<h2 id="как-изменить-порт-postgresql-16" tabindex="-1"><a class="header-anchor" href="#как-изменить-порт-postgresql-16"><span>Как изменить порт PostgreSQL 16</span></a></h2>
<ol>
<li>Открыть конфигурационный файл:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/postgresql/16/main/postgresql.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Найти и изменить строку port</li>
</ol>
<p>Найдите строку:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment">#port = 5432</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>Сохраните:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">CTRL + O <span class="token punctuation">(</span>это команда для сохранения<span class="token punctuation">)</span>.</span>
<span class="line"></span>
<span class="line">После этого <span class="token function">nano</span> попросит вас подтвердить имя файла для сохранения. Нажмите Enter, чтобы сохранить изменения в том же файле.</span>
<span class="line"></span>
<span class="line">Для выхода из редактора нажмите Ctrl + X.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>Перезапустите PostgreSQL</li>
</ol>
<p>После изменения конфигурации перезапустите службу:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> systemctl restart postgresql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>Проверка</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">ss <span class="token parameter variable">-plnt</span> <span class="token operator">|</span> <span class="token function">grep</span> postgres</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


