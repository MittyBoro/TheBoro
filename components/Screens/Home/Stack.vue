<template>
  <div>
    <div class="pretitle">Stack</div>
    <div class="title">Что я использую</div>

    <Box>
      <div class="elements max-w-md">
        <div class="pretitle-alt mb-5">Код</div>
        <div class="flex flex-wrap -mx-2">
          <ScreensHomeStackBtn
            name="vue"
            title="Фреймворк для создания пользовательских интерфейсов"
          />
          <ScreensHomeStackBtn
            name="nuxt"
            title="Фреймворк для универсальных приложений на основе Vue.js"
          />
          <ScreensHomeStackBtn
            name="vite"
            title="Быстрый инструмент для разработки современных веб-приложений"
          />
          <ScreensHomeStackBtn
            name="nodejs"
            title="Среда выполнения JavaScript на сервере"
          />
          <ScreensHomeStackBtn
            name="npm"
            title="Менеджер пакетов для зависимостей JavaScript"
          />
          <ScreensHomeStackBtn
            name="javascript"
            title="Язык программирования для интерактивных веб-сайтов и приложений"
          />
          <ScreensHomeStackBtn
            name="sass"
            title="Препроцессор CSS с дополнительными функциями"
          />
          <ScreensHomeStackBtn
            name="laravel"
            title="Фреймворк для веб-приложений на PHP"
          />
          <ScreensHomeStackBtn
            name="php"
            title="Скриптовый язык программирования для веб-разработки"
          />
          <ScreensHomeStackBtn
            name="mysql"
            title="Система управления базами данных для хранения данных"
          />
          <ScreensHomeStackBtn
            name="composer"
            title="Менеджер зависимостей для проектов на PHP"
          />
          <ScreensHomeStackBtn
            name="git"
            title="Система контроля версий для совместной разработки кода"
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
            title="Инструмент для дизайна и прототипирования"
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
            title="GPT модель для чатов и текстовых взаимодействий"
          />
          <ScreensHomeStackBtn
            name="github"
            title="Платформа для совместной разработки кода и управления версиями"
          />
          <ScreensHomeStackBtn
            name="stack-overflow"
            title="Сайт для вопросов и ответов по программированию"
          />
          <ScreensHomeStackBtn
            name="youtube"
            title="Платформа для загрузки и просмотра видео"
          />
          <ScreensHomeStackBtn
            name="reddit"
            title="Социальный новостной сайт с обсуждениями"
          />
        </div>
      </div>
    </Box>
  </div>
</template>

<style lang="scss" scoped>
  .bg-box {
    :deep(svg) {
      filter: hue-rotate(40deg) sepia(100%) saturate(170%) hue-rotate(-40deg)
        hue-rotate(hue(#bd183f));
      filter: saturate(85%) brightness(85%);
      transition: filter 0.3s, transform 0.3s;
      @apply scale-90;
    }

    &:hover {
      :deep(.btn-sq:hover svg) {
        filter: brightness(105%);
        @apply scale-110;
      }
    }
  }
</style>
