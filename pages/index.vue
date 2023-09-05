<script setup>
  const page = await useApi().findOne('home-page', { populate: ['seo'] })

  useSeoMeta({
    title: page.data.seo.metaTitle,
    ogTitle: page.data.seo.metaTitle,
    description: page.data.seo.metaDescription,
    ogDescription: page.data.seo.metaDescription,
    ogImage: 'https://example.com/image.png',
  })
</script>

<template>
  <main>
    <ScreensHome :pageData="page.data" id="home" />
    <Delimiter />
    <ScreensProjects class="-mt-16 pt-16" id="projects" />
    <Delimiter />
    <ScreensGithub id="src" />
  </main>
</template>
