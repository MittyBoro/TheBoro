<script setup>
  let phrases = [
    'алкоголик',
    'fullstack разработчик',
    'front-end разработчик',
    'back-end разработчик',
  ]

  const whoAmI = ref('')

  let state = reactive({
    currentPhraseIndex: 0,
    currentCharacterIndex: 0,
    isDeleting: false,
  })

  const TYPING_DELAY = 80
  const DELETING_DELAY = 30
  const PHRASE_END_DELAY = 2500
  const PHRASE_START_DELAY = 300

  function typing() {
    const currentPhrase = phrases[state.currentPhraseIndex]
    if (state.isDeleting) {
      whoAmI.value = currentPhrase
        .toString()
        .substring(0, state.currentCharacterIndex - 1)
      state.currentCharacterIndex--
    } else {
      whoAmI.value = currentPhrase
        .toString()
        .substring(0, state.currentCharacterIndex + 1)
      state.currentCharacterIndex++
    }

    if (
      !state.isDeleting &&
      state.currentCharacterIndex === currentPhrase.length
    ) {
      state.isDeleting = true
      setTimeout(typing, state.currentPhraseIndex == 0 ? 0 : PHRASE_END_DELAY)
    } else if (state.isDeleting && state.currentCharacterIndex === 0) {
      state.isDeleting = false
      state.currentPhraseIndex = (state.currentPhraseIndex + 1) % phrases.length
      setTimeout(typing, PHRASE_START_DELAY)
    } else {
      setTimeout(typing, state.isDeleting ? DELETING_DELAY : TYPING_DELAY)
    }
  }
  onMounted(typing)
</script>

<template>
  <div>
    <div class="avatar w-40 h-40 mb-10 star">
      <div class="avatar-img-wrap">
        <img src="~/assets/images/ava.png" alt="" />
      </div>
    </div>
    <div class="font-head mb-6">
      <div class="text-3xl drop-shadow-xl">
        Привет, я
        <span class="text-primary-600">Дмитрий Бородин</span>
      </div>
      <div class="mt-1 text-3xl">
        и я —
        <span class="text-white text-opacity-50 typing">{{ whoAmI }}</span>
      </div>
    </div>
    <div class="mt-6 mb-28 text-white text-opacity-50 font-thin">
      Моя цель – объединить лучшие аспекты дизайна и программирования для
      создания веб-приложений, которые вдохновляют и удивляют! Готов превратить
      вашу концепцию в функциональную реальность!
    </div>

    <div class="pretitle">Я здесь</div>
    <div class="flex mt-3">
      <div class="btn-mini btn-alt aspect-square mr-4">
        <Icon name="ig" class="scale-75" />
      </div>
      <div class="btn-mini btn-alt aspect-square mr-4"><Icon name="tg" /></div>
      <div class="btn-mini btn-alt aspect-square mr-4"><Icon name="vk" /></div>
      <div class="btn-mini btn ml-auto">
        <span>Портфолио</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .btn-mini {
    svg {
      @apply w-auto h-auto fill-current;
    }
  }
  .avatar {
    background-image: var(--gradietnt);
    background-position: 100% 100%;
    background-size: 250% 250%;

    --gradietnt: linear-gradient(
      to bottom right,
      theme(colors.primary.600/0.75),
      theme(colors.primary.800/0759),
      theme(colors.gray.900/0.75),
      theme(colors.gray.950/0.75)
    );

    @apply p-2 relative rounded-full;
    @apply shadow-2xl shadow-black;
    @apply transition-all duration-300;
    .avatar-img-wrap {
      @apply rounded-full overflow-hidden;
    }
    img {
      @apply transition scale-110;
    }
    &:hover {
      background-position: 0 0;
      @apply shadow-2xl shadow-primary-800;
      img {
        @apply scale-150;
      }
    }
  }
  .typing {
    &::after {
      content: '|';
      animation: pulse 0.7s linear infinite;

      @apply font-sans;
    }
  }

  @keyframes pulse {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }
</style>
