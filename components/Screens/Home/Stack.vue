<template>
  <div>
    <div class="pretitle">Stack</div>
    <div class="title">Что я использую</div>

    <Card>
      <div class="elements max-w-lg">
        <div class="pretitle-alt mb-5">Код</div>
        <div class="flex flex-wrap -mx-2">
          <ScreensHomeStackBtn
            name="vue"
            title="Vue.js — Фреймворк для создания пользовательских интерфейсов"
          />
          <ScreensHomeStackBtn
            name="nuxt"
            title="Nuxt — Фреймворк для универсальных приложений на основе Vue.js"
          />
          <ScreensHomeStackBtn
            name="vite"
            title="Vite — инструмент для сборки веб-приложений"
          />
          <ScreensHomeStackBtn
            name="nodejs"
            title="NodeJS — Среда выполнения JavaScript на сервере"
          />
          <ScreensHomeStackBtn
            name="npm"
            title="NPM — Менеджер пакетов для зависимостей JavaScript"
          />
          <ScreensHomeStackBtn
            name="javascript"
            title="Javascript — язык программирования для интерактивных веб-сайтов и приложений"
          />
          <ScreensHomeStackBtn name="sass" title="SASS — препроцессор CSS" />
          <ScreensHomeStackBtn
            name="laravel"
            title="Laravel — фреймворк для веб-приложений на PHP"
          />
          <ScreensHomeStackBtn
            name="php"
            title="PHP — язык программирования для веб-разработки"
          />
          <ScreensHomeStackBtn
            name="mysql"
            title="MySQL — система управления базами данных"
          />
          <ScreensHomeStackBtn
            name="composer"
            title="Composer — менеджер зависимостей для проектов на PHP"
          />
          <ScreensHomeStackBtn
            name="git"
            title="Git — система контроля версий для совместной разработки кода"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Софт</div>
        <div class="flex flex-wrap -mx-2">
          <ScreensHomeStackBtn
            name="vscode"
            title="Кодовый редактор Visual Studio Code"
          />
          <ScreensHomeStackBtn
            name="figma"
            title="Инструмент для дизайна и прототипирования Figma"
          />
          <ScreensHomeStackBtn
            name="chrome"
            title="Веб-браузер Google Chrome"
          />
          <ScreensHomeStackBtn
            name="firefox"
            title="Веб-браузер Mozilla Firefox"
          />
          <ScreensHomeStackBtn
            name="photoshop"
            title="Графический редактор Adobe Photoshop"
          />
          <ScreensHomeStackBtn
            name="telegram-logo"
            title="Мессенджер Telegram"
          />
          <ScreensHomeStackBtn
            name="windows"
            title="Операционная система Windows"
          />
          <ScreensHomeStackBtn
            name="caramba-switcher"
            title="Автоматический переключатель раскладки клавиатуры Caramba Swithcer"
          />
          <ScreensHomeStackBtn
            name="putty"
            title="Клиент для удаленного доступа к серврееу PuTTY"
          />
          <ScreensHomeStackBtn
            name="wireguard"
            title="Протокол VPN WireGuard"
          />
          <ScreensHomeStackBtn
            name="yandex-disk"
            title="Облачное хранилище Yandex.Disk"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Мне помогают</div>
        <div class="flex flex-wrap -mx-2">
          <ScreensHomeStackBtn name="google" title="Поисковая система Google" />
          <ScreensHomeStackBtn
            name="bing"
            title="Поисковая система Bing с чат-режимом"
          />
          <ScreensHomeStackBtn
            name="chatgpt"
            title="ChatGPT — автор описаний к этому блоку"
          />
          <ScreensHomeStackBtn
            name="github"
            title="Платформа для совместной разработки кода и управления версиями"
          />
          <ScreensHomeStackBtn
            name="stack-overflow"
            title="Stack Overflow — сайт для вопросов и ответов по программированию"
          />
          <ScreensHomeStackBtn
            name="youtube"
            title="Платформа для загрузки и просмотра видео YouTube"
          />
          <ScreensHomeStackBtn
            name="reddit"
            title="Социальный новостной сайт с обсуждениями Reddit"
          />
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    overflow: visible;
  }
</style>
