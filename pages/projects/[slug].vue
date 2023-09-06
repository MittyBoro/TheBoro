<script setup>
  const page = await useApi().findOne('projects/' + useRoute().params.slug, {
    populate: ['seo', 'thumb', 'categories', 'tags'],
    fields: ['title', 'description', 'website', 'srcLink', 'views'],
  })

  const projects = await useApi().find('projects', {
    populate: ['thumb', 'categories'],
    fields: ['title', 'website', 'views'],
    sort: ['rank:asc'],
  })

  const similarProjects = projects.filter((item) => item.id !== page.id)

  const currentIndex = projects.findIndex((item) => item.id === page.id)
  const prevIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  provide('siblings', {
    prev: prevIndex >= 0 ? projects[prevIndex] : null,
    next: nextIndex < projects.length ? projects[nextIndex] : null,
  })

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
    <ScreensSingleProject :project="page.data" />
    <Delimiter />
    <ScreensSingleProjectSimilar :similarProjects="similarProjects" />
  </main>
</template>
