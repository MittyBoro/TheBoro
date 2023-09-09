<script setup>
  const page = await useApi().findOne('home-page', {
    populate: ['seo', 'seo.metaImage'],
  })

  useSeoMeta({
    title: page.data.seo.metaTitle,
    ogTitle: page.data.seo.metaTitle,
    description: page.data.seo.metaDescription,
    ogDescription: page.data.seo.metaDescription,
  })
  if (page.data.seo.metaImage) {
    const image = useStrapiImg(page.data.seo.metaImage, 'large')
    useSeoMeta({
      ogImage: image,
    })
  }
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
