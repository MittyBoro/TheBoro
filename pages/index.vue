<script setup>
  const pageData = await useApi().findOne('home-page', { populate: ['seo'] })

  useSeoMeta({
    title: pageData.seo.metaTitle,
    ogTitle: pageData.seo.metaTitle,
    description: pageData.seo.metaDescription,
    ogDescription: pageData.seo.metaDescription,
    ogImage: 'https://example.com/image.png',
  })
</script>

<template>
  <main>
    <ScreensHome :pageData="pageData" id="home" />
    <Delimiter />
    <ScreensProjects id="projects" />
    <Delimiter />
    <ScreensGithub id="src" />
  </main>
</template>
