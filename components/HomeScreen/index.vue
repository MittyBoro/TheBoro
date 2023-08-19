<template>
  <div
    class="home-screen container min-h-screen items-start grid grid-cols-7 gap-10 pt-16"
  >
    <div class="col-span-3 sticky top-10">
      <HomeScreenHello />
    </div>

    <div class="col-span-4">
      <HomeScreenWhatIDo class="mb-24" />
      <HomeScreenStack class="mb-24" />
      <HomeScreenMyWay />
    </div>
  </div>
</template>
