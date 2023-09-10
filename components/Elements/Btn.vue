<script setup>
  const props = defineProps({
    second: Boolean,
    third: Boolean,

    mini: Boolean,
    nano: Boolean,
    muted: Boolean,
    square: Boolean,
    rounded: Boolean,

    icon: {
      type: String,
      default: null,
    },

    is: {
      type: String,
      default: 'div',
    },
  })

  const component = props.is == 'link' ? resolveComponent('NuxtLink') : props.is

  const pX = computed(() => {
    if (props.square) return ''
    if (props.mini) return 'px-3 sm:px-6'
    else if (props.nano) return 'px-2 sm:px-3'
    else return 'px-6 sm:px-8'
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
        'btn-rounded-full': props.rounded,
      },
    ]
  })
</script>

<template>
  <component :is="component" :class="className">
    <AudioClick
      class="btn-inner flex items-center justify-center w-full h-full whitespace-nowrap"
      :muted="muted"
    >
      <Icon v-if="props.icon" :name="props.icon" />
      <slot></slot>
    </AudioClick>
  </component>
</template>

<style lang="scss">
  .btn,
  .btn-second,
  .btn-third {
    @apply relative flex items-center justify-center leading-none;
    @apply font-head text-center uppercase tracking-widest text-xs leading-none;
    @apply cursor-pointer transition-all duration-200;

    @apply h-12 py-4 rounded-lg;
    @apply sm:h-14 sm:py-5 sm:rounded-xl;

    @apply shadow-lg;
    @apply dark:shadow-gray-950/30 shadow-gray-500/20;
    &:hover {
      @apply -translate-y-0.5;
      @apply shadow-xl;
      @apply dark:shadow-gray-950/50 shadow-gray-500/30;
      svg {
        @apply scale-110;
      }
    }
    &:active {
      @apply translate-y-0.5;
      @apply shadow-md;
      @apply dark:shadow-gray-950/50 shadow-gray-500/30;
    }
    &::before {
      @apply rounded-2xl;
    }
    svg {
      @apply flex-shrink-0 fill-current max-w-full max-h-full;
      // 🩼🩼
      &.w-h {
        @apply w-4;
      }
      &.h-h {
        @apply h-4;
      }
    }
  }

  .btn-rounded-full {
    @apply rounded-full;
  }

  .btn {
    background-position: 100% 50%;
    background-size: 200%;

    @apply bg-gradient-to-r text-white text-opacity-90;
    @apply dark:from-primary-600 dark:via-primary-600 dark:to-primary-800;
    @apply from-primary-600 via-primary-600 to-primary-500;
    &:hover {
      background-position: 0% 50%;
      @apply text-white;
    }
  }

  .btn-second {
    @apply dark:text-gray-300 dark:bg-gray-950/50;
    @apply text-gray-700 bg-white/30;
    @apply bg-opacity-50;
    &::before {
      content: '';
      position: absolute;
      background: var(--btn-gradietnt) border-box;
      background-position: 100% 100%;
      background-size: 280% 280%;

      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      mask-composite: destination-out;
      mask-composite: exclude;
      transition: background-position 0.3s, inset 0.3s;
      @apply border-4 border-transparent inset-0;
      border-radius: inherit;
    }
    &:hover {
      @apply dark:text-white text-primary-600;
      &::before {
        background-position: 0% 0%;
        @apply -inset-0.5;
      }
    }
  }

  .btn-third {
    @apply dark:text-gray-300 dark:bg-gray-900;
    @apply text-gray-600 bg-gray-100;
    @apply bg-opacity-70;
    &:hover {
      @apply bg-opacity-90;
      @apply dark:text-white;
      @apply text-primary-500;
    }
  }

  .btn-mini {
    @apply rounded-md h-9 py-2 text-[0.65rem];
    @apply sm:rounded-lg sm:h-11 sm:py-3 sm:text-xs;
  }

  .btn-nano {
    @apply rounded h-7 py-2 text-[0.6rem];
  }
</style>
