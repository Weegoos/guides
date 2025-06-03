# Front-end

Гайды как запускать и работать с Tailwind CSS, Quasar, Vue-press

## Docker

## Cordova + Quasar

### Установка 

```bash
quasar mode add cordova
```
### Переход в папку 

```bash
cd src-cordova
```
### Инициализация 
```bash
cordova platform add [android|ios]
```

### Как создавать APK

```bash
cordova clean
cordova build android
```

## Vue press 
### Установка
1.  Создание проекта VuePress:
```bash
npm init vuepress vuepress-starter
```

2.  Переход в папку проекта и инициализация Git:
```bash
cd vuepress-starter
git init
```

3. Инициализация:
```bash
npm init
```

4. Установка VuePress

```bash
npm install -D vuepress@next
```

### Как запускать
1. Переход в нужную папку: 
```bash
cd vuepress-starter/
```

2. Запускаем проект 
```bash
npm run docs:dev
```
### Как изменить фотографию на главной странице?
#### 1. Создаем папку public в .docs/.vuepress/
#### 2. Создаем папки docs/.vuepress/public/images/docs/ (здесь будут храниться фотографии)
#### 3. Переходим README.md и меняем иконку 
```bash
home: true
title: Домой
heroImage: /images/docs/code_logo.png
```