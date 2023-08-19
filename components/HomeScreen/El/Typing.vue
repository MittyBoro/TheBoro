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
  <span class="typing">{{ whoAmI }}</span>
</template>

<style lang="scss" scoped>
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
