<template>
  <div>
    <div class="pretitle">Stack</div>
    <div class="title">Что я использую</div>

    <div class="bg-box">
      <div class="elements max-w-md">
        <div class="pretitle-alt mb-5">Код</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElStackBtn
            name="vue"
            title="Фреймворк для создания пользовательских интерфейсов"
          />
          <HomeScreenElStackBtn
            name="nuxt"
            title="Фреймворк для универсальных приложений на основе Vue.js"
          />
          <HomeScreenElStackBtn
            name="vite"
            title="Быстрый инструмент для разработки современных веб-приложений"
          />
          <HomeScreenElStackBtn
            name="nodejs"
            title="Среда выполнения JavaScript на сервере"
          />
          <HomeScreenElStackBtn
            name="npm"
            title="Менеджер пакетов для зависимостей JavaScript"
          />
          <HomeScreenElStackBtn
            name="javascript"
            title="Язык программирования для интерактивных веб-сайтов и приложений"
          />
          <HomeScreenElStackBtn
            name="sass"
            title="Препроцессор CSS с дополнительными функциями"
          />
          <HomeScreenElStackBtn
            name="laravel"
            title="Фреймворк для веб-приложений на PHP"
          />
          <HomeScreenElStackBtn
            name="php"
            title="Скриптовый язык программирования для веб-разработки"
          />
          <HomeScreenElStackBtn
            name="mysql"
            title="Система управления базами данных для хранения данных"
          />
          <HomeScreenElStackBtn
            name="composer"
            title="Менеджер зависимостей для проектов на PHP"
          />
          <HomeScreenElStackBtn
            name="git"
            title="Система контроля версий для совместной разработки кода"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Софт</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElStackBtn
            name="vscode"
            title="Кодовый редактор Visual Studio Code"
          />
          <HomeScreenElStackBtn
            name="figma"
            title="Инструмент для дизайна и прототипирования"
          />
          <HomeScreenElStackBtn
            name="chrome"
            title="Веб-браузер Google Chrome"
          />
          <HomeScreenElStackBtn
            name="firefox"
            title="Веб-браузер Mozilla Firefox"
          />
          <HomeScreenElStackBtn
            name="photoshop"
            title="Графический редактор Adobe Photoshop"
          />
          <HomeScreenElStackBtn
            name="telegram-logo"
            title="Мессенджер Telegram"
          />
          <HomeScreenElStackBtn
            name="windows"
            title="Операционная система Windows"
          />
          <HomeScreenElStackBtn
            name="caramba-switcher"
            title="Автоматический переключатель раскладки клавиатуры Caramba Swithcer"
          />
          <HomeScreenElStackBtn
            name="putty"
            title="Клиент для удаленного доступа к серврееу PuTTY"
          />
          <HomeScreenElStackBtn
            name="wireguard"
            title="Протокол VPN WireGuard"
          />
          <HomeScreenElStackBtn
            name="yandex-disk"
            title="Облачное хранилище Yandex.Disk"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Мне помогают</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElStackBtn
            name="google"
            title="Поисковая система Google"
          />
          <HomeScreenElStackBtn
            name="bing"
            title="Поисковая система Bing с чат-режимом"
          />
          <HomeScreenElStackBtn
            name="chatgpt"
            title="GPT модель для чатов и текстовых взаимодействий"
          />
          <HomeScreenElStackBtn
            name="github"
            title="Платформа для совместной разработки кода и управления версиями"
          />
          <HomeScreenElStackBtn
            name="stack-overflow"
            title="Сайт для вопросов и ответов по программированию"
          />
          <HomeScreenElStackBtn
            name="youtube"
            title="Платформа для загрузки и просмотра видео"
          />
          <HomeScreenElStackBtn
            name="reddit"
            title="Социальный новостной сайт с обсуждениями"
          />
        </div>
      </div>
    </div>
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
