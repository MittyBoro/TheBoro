<template>
  <div>
    <ScreensHomeAvatar class="mb-10" />
    <div class="font-head mb-6">
      <div class="text-3xl drop-shadow-xl">
        Привет, я
        <span class="text-primary-600">Дмитрий Бородин</span>
      </div>
      <div class="mt-1 text-3xl">
        и я —
        <ScreensHomeTyping class="text-white text-opacity-50" />
      </div>
    </div>
    <div class="mt-6 mb-36 text-white text-opacity-50 font-thin">
      Моя цель – объединить лучшие аспекты дизайна и программирования для
      создания веб-приложений, которые вдохновляют и удивляют! Готов превратить
      вашу концепцию в функциональную реальность!
    </div>

    <div class="flex">
      <Btn type="second" mini square class="mr-5">
        <Icon name="ig" class="scale-[.8]" />
      </Btn>
      <Btn type="second" mini square class="mr-5">
        <Icon name="tg" />
      </Btn>
      <Btn type="second" mini square class="mr-5">
        <Icon name="vk" />
      </Btn>
      <HashLink to="#projects" class="ml-auto">
        <Btn mini class="mr-5">Портфолио</Btn>
      </HashLink>
    </div>
  </div>
</template>
