<script setup></script>

<template>
  <section class="about-screen container">
    <div class="text-center">
      <div class="pretitle">Source</div>
      <div class="title">Исходный код</div>
    </div>
    <div class="mx-auto max-w-xl prose text-center">
      <p>
        Исторически сложилось, что у меня не так много открытых проектов на
        Github. Поэтому данный сайт я разместил в открытом репозитории, чтобы
        любой желающий мог его оценить
      </p>
    </div>
    <div class="flex mt-10 justify-center">
      <Btn second>
        <Icon name="github" class="mr-3" />
        theboro src
      </Btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
