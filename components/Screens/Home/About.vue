<script setup></script>

<template>
  <section class="about-screen">
    <div class="pretitle">несколько слов</div>
    <div class="title">Обо мне</div>
    <Box>
      <div class="styled-text max-w-lg">
        <p>Разработчик с многолетним опытом работы в фрилансе.</p>
        <p>
          Разрабатываю веб-приложения с использованием современных технологий.
        </p>
        <p>В настоящий момент с бо’льшим энтузиазмом изучаю front-end</p>
        <p>Открыт к предложениям с релокацией в другую страну</p>
        <p>
          <b>Хобби:</b>
          фотографирую, катаюсь на велосипеде, смотрю кино, слушаю множество
          жанров музыки, читаю книги, играю на PC
        </p>
      </div>
    </Box>
  </section>
</template>

<style lang="scss" scoped>
  .pretitle-alt {
    margin: 0;
  }
  .link {
    &:hover {
      @apply text-primary-600;
      .ex-icon {
        @apply scale-100 opacity-100;
      }
    }
  }
  .ex-icon {
    margin-right: -1em;
    width: 1em;

    @apply inline h-auto ml-2 fill-primary-600 opacity-0 transition-all scale-0 duration-500;
  }
</style>
