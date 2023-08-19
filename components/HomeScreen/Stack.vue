<script setup>
  import Popper from 'vue3-popper'

  defineComponent(Popper)
</script>

<template>
  <div>
    <div class="pretitle">Stack</div>
    <div class="title">Что я использую</div>

    <div class="bg-box">
      <div class="max-w-md">
        <div class="pretitle-alt mb-5">Код</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElPopper
            name="vue"
            title="Фреймворк для создания пользовательских интерфейсов"
          />
          <HomeScreenElPopper
            name="nuxt"
            title="Фреймворк для универсальных приложений на основе Vue.js"
          />
          <HomeScreenElPopper
            name="vite"
            title="Быстрый инструмент для разработки современных веб-приложений"
          />
          <HomeScreenElPopper
            name="nodejs"
            title="Среда выполнения JavaScript на сервере"
          />
          <HomeScreenElPopper
            name="npm"
            title="Менеджер пакетов для зависимостей JavaScript"
          />
          <HomeScreenElPopper
            name="javascript"
            title="Язык программирования для интерактивных веб-сайтов и приложений"
          />
          <HomeScreenElPopper
            name="sass"
            title="Препроцессор CSS с дополнительными функциями"
          />
          <HomeScreenElPopper
            name="laravel"
            title="Фреймворк для веб-приложений на PHP"
          />
          <HomeScreenElPopper
            name="php"
            title="Скриптовый язык программирования для веб-разработки"
          />
          <HomeScreenElPopper
            name="mysql"
            title="Система управления базами данных для хранения данных"
          />
          <HomeScreenElPopper
            name="composer"
            title="Менеджер зависимостей для проектов на PHP"
          />
          <HomeScreenElPopper
            name="git"
            title="Система контроля версий для совместной разработки кода"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Софт</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElPopper
            name="vscode"
            title="Кодовый редактор Visual Studio Code"
          />
          <HomeScreenElPopper
            name="figma"
            title="Инструмент для дизайна и прототипирования"
          />
          <HomeScreenElPopper name="chrome" title="Веб-браузер Google Chrome" />
          <HomeScreenElPopper
            name="firefox"
            title="Веб-браузер Mozilla Firefox"
          />
          <HomeScreenElPopper
            name="photoshop"
            title="Графический редактор Adobe Photoshop"
          />
          <HomeScreenElPopper
            name="telegram-logo"
            title="Мессенджер Telegram"
          />
          <HomeScreenElPopper
            name="windows"
            title="Операционная система Windows"
          />
          <HomeScreenElPopper
            name="caramba-switcher"
            title="Автоматический переключатель раскладки клавиатуры Caramba Swithcer"
          />
          <HomeScreenElPopper
            name="putty"
            title="Клиент для удаленного доступа к серврееу PuTTY"
          />
          <HomeScreenElPopper name="wireguard" title="Протокол VPN WireGuard" />
          <HomeScreenElPopper
            name="yandex-disk"
            title="Облачное хранилище Yandex.Disk"
          />
        </div>

        <div class="pretitle-alt mt-8 mb-5">Мне помогают</div>
        <div class="flex flex-wrap -mx-2">
          <HomeScreenElPopper name="google" title="Поисковая система Google" />
          <HomeScreenElPopper
            name="github"
            title="Платформа для совместной разработки кода и управления версиями"
          />
          <HomeScreenElPopper
            name="stack-overflow"
            title="Сайт для вопросов и ответов по программированию"
          />
          <HomeScreenElPopper
            name="chatgpt"
            title="Модель GPT для чатов и текстовых взаимодействий"
          />
          <HomeScreenElPopper
            name="youtube"
            title="Платформа для загрузки и просмотра видео"
          />
          <HomeScreenElPopper
            name="reddit"
            title="Социальный новостной сайт с обсуждениями"
          />
        </div>
      </div>
    </div>
  </div>
</template>
