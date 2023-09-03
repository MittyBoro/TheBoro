<script setup>
  const props = defineProps({
    second: Boolean,
    third: Boolean,

    mini: Boolean,
    nano: Boolean,
    muted: Boolean,
    square: Boolean,

    is: {
      type: String,
      default: 'div',
    },
  })

  const pX = computed(() => {
    if (props.square) return ''
    if (props.mini) return 'px-6'
    else if (props.nano) return 'px-3'
    else return 'px-10'
  })
  const typeClass = computed(() => {
    if (props.second) return 'btn-second'
    else if (props.third) return 'btn-third'
    else return 'btn'
  })

  const className = computed(() => {
    return [
      typeClass.value,
      pX.value,
      {
        'btn-mini': props.mini,
        'btn-nano': props.nano,
        'aspect-square': props.square,
      },
    ]
  })
</script>

<template>
  <component :is="props.is" :class="className">
    <AudioHover
      class="btn-inner flex items-center justify-center w-full h-full"
      :muted="muted"
    >
      <slot></slot>
    </AudioHover>
  </component>
</template>

<style lang="scss">
  .btn,
  .btn-second,
  .btn-third {
    @apply flex items-center justify-center leading-none;
    @apply relative h-14 py-5 rounded-xl;
    @apply font-head text-center uppercase tracking-widest text-xs leading-none;
    @apply cursor-pointer transition-all duration-200;
    &:hover {
      @apply -translate-y-0.5;
      svg {
        @apply scale-110;
      }
    }
    &::before {
      @apply rounded-2xl;
    }
    svg {
      @apply transition flex-shrink-0 fill-current max-w-full max-h-full;
      // 🩼🩼
      &.w-h {
        @apply w-4;
      }
      &.h-h {
        @apply h-4;
      }
    }
  }

  .btn {
    background-position: 100% 50%;
    background-size: 200%;

    @apply bg-gradient-to-r from-primary-600 via-primary-600 to-primary-800 text-white text-opacity-80;
    @apply shadow-lg;

    &:hover {
      background-position: 0% 50%;
      @apply shadow-xl shadow-primary-900 text-white;
    }
  }

  .btn-second {
    @apply text-gray-300 border-gray-800 bg-gray-950 bg-opacity-50;
    @apply shadow-lg shadow-gray-950;
    &::before {
      content: '';
      position: absolute;
      background: var(--btn-gradietnt) border-box;
      background-position: 100% 100%;
      background-size: 280% 280%;

      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      mask-composite: destination-out;
      mask-composite: exclude;
      transition: background-position 0.3s;
      @apply border-4 border-transparent -inset-1;
    }
    &:hover {
      @apply text-white;
      @apply shadow-xl shadow-gray-950;
      &::before {
        background-position: 0% 0%;
      }
    }
  }

  .btn-third {
    @apply text-gray-300 bg-gray-900 bg-opacity-70;
    @apply shadow-lg shadow-gray-950;
    &:hover {
      @apply shadow-xl shadow-gray-950 bg-opacity-90 text-white;
    }
  }

  .btn-mini {
    @apply rounded h-11 py-3;
    &::before {
      @apply rounded-lg;
    }
  }

  .btn-nano {
    @apply rounded h-7 py-2 text-[0.6rem];
    &::before {
      @apply rounded-md;
    }
  }
</style>
