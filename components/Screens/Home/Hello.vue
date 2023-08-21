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
    <div class="mt-6 mb-28 text-white text-opacity-50 font-thin">
      Моя цель – объединить лучшие аспекты дизайна и программирования для
      создания веб-приложений, которые вдохновляют и удивляют! Готов превратить
      вашу концепцию в функциональную реальность!
    </div>

    <div class="pretitle">Я здесь</div>
    <div class="flex mt-3">
      <AudioHover>
        <div class="btn-mini btn-wa-border btn-second aspect-square mr-4">
          <Icon name="ig" class="scale-75 svg" />
        </div>
      </AudioHover>
      <AudioHover>
        <div class="btn-mini btn-second aspect-square mr-4">
          <Icon name="tg" class="svg" />
        </div>
      </AudioHover>
      <AudioHover>
        <div class="btn-mini btn-second aspect-square mr-4">
          <Icon name="vk" class="svg" />
        </div>
      </AudioHover>
      <AudioHover class="ml-auto">
        <HashLink to="#projects" class="btn-mini btn">
          <span>Портфолио</span>
        </HashLink>
      </AudioHover>
    </div>
  </div>
</template>
