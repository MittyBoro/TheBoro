<script setup>
  const list = [
    {
      image: 'https://picsum.photos/id/111/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
    {
      image: 'https://picsum.photos/id/220/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
    {
      image: 'https://picsum.photos/id/397/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
    {
      image: 'https://picsum.photos/id/402/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
    {
      image: 'https://picsum.photos/id/550/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
    {
      image: 'https://picsum.photos/id/600/500/300',
      tags: 'сайт, сайтец, сайтище',
      title: 'Невъебенный Мммегасайт',
    },
  ]
</script>

<template>
  <section class="projects-screen container">
    <div class="text-center">
      <div class="pretitle">отборные шедевры</div>
      <div class="title">Портфолио</div>
    </div>
    <div class="grid grid-cols-3 gap-x-8 gap-y-10">
      <Box v-for="item in list" :key="item.image" class="hover">
        <NuxtLink
          to="/projects/1"
          class="bg-gray-950 block shadow-lg mb-6 rounded-lg overflow-hidden cursor-pointer aspect-[4/3]"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="object-cover object-center w-full h-full"
          />
        </NuxtLink>
        <div class="mb-4 flex justify-between items-center">
          <div class="pretitle-alt">{{ item.tags }}</div>
          <div class="pl-5 flex items-center link opacity-60">
            <Icon name="heart" class="w-4 h-auto mr-2" />
            <div class="font-head text-xs">255</div>
          </div>
        </div>
        <NuxtLink to="/projects/1" class="link title-alt mt-3 mb-1">
          <span>{{ item.title }}</span>
          <Icon name="external" class="ex-icon" />
        </NuxtLink>
      </Box>
      <div class="mt-8 col-start-2 flex justify-center">
        <Btn type="second">Показать ещё</Btn>
      </div>
    </div>
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
