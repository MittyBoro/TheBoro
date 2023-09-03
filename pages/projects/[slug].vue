<script setup>
  const id = useRoute().params.slug
  const page = await useApi().findOne('projects/' + useRoute().params.slug, {
    populate: ['seo', 'thumb', 'categories', 'tags'],
    fields: ['title', 'description', 'likes', 'website', 'srcLink', 'views'],
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
    <ScreensSingleProjectSimilar :pageId="page.id" />
  </main>
</template>
