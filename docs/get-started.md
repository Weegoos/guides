# Front-end

Гайды как запускать и работать с Tailwind CSS, Quasar, Vue-press

## Docker

## Redis

### Как соединиться с Redis
1. Устанавливаем Redis в проект

    ```bash
    npm install redis
    ```

2.  Установка Redis (классический способ):
    ```bash
    sudo apt update
    sudo apt install redis-server
    ```
    Это установит и сервер, и redis-cli.

 3. Проверь, работает ли Redis:
    
    ### Запуск сервера
    ```bash
    sudo systemctl start redis-server
    ```
    ### Проверка Redis
    ```bash
    redis-cli ping
    ```

    ### Интеграция в проект 
    ```bash
    import { createClient } from "redis"; // импортируем пакеты

    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    ```

## Cordova + Quasar

### Как создавать APK

1. Удаляем ранее созданный dist/spa во фронте

    ```bash
    rm -rf dist/spa
    ```

2. Оставаясь в папке фронта, не переходя src-cordova, создаем сборку

    ```bash
    quasar build -m cordova -T android
    ```
3. Переходим в папку src-cordova

    ```bash
    cd src-cordova
    cordova build android //в папке запускаем
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