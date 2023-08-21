<template>
  <section class="home-screen container">
    <div class="min-h-screen items-start grid grid-cols-7 gap-10">
      <div class="col-span-3 sticky top-10">
        <ScreensHomeHello />
      </div>

      <div class="col-span-4">
        <ScreensHomeWhatIDo />
        <Delimiter class="-my-10" full />

        <ScreensHomeStack />
        <Delimiter class="-my-10" full />

        <ScreensHomeMyWay />
      </div>
    </div>
  </section>
</template>
