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
    <div class="avatar w-40 h-40 mb-10 blackhole">
      <img src="~/assets/images/ava.png" alt="" />
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
    @apply rounded-full shadow-2xl shadow-black border-8 border-gray-900 overflow-hidden transition-all;
    img {
      @apply transition scale-110;
    }
    &:hover {
      @apply shadow-2xl shadow-primary-950 border-4 border-primary-700;
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
