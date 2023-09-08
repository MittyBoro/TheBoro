<script setup>
  const api = useApi()
  const pageId = useRoute().params.slug

  const page = await api.findOne('projects/' + pageId, {
    populate: ['seo', 'thumb', 'categories', 'tags'],
    fields: ['title', 'description', 'website', 'srcLink', 'views'],
  })

  const projects = await api.find('projects', {
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

  provide('isProject', true)

  if (page.data.seo) {
    useSeoMeta({
      title: page.data.seo.metaTitle,
      ogTitle: page.data.seo.metaTitle,
      description: page.data.seo.metaDescription,
      ogDescription: page.data.seo.metaDescription,
      ogImage: 'https://example.com/image.png',
    })
  }
  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
  })

  const appendVievs = () => {
    const localKey = `projects_incremeted_${pageId}`

    if (sessionStorage.getItem(localKey)) return

    api.post(`projects/${pageId}/increment_views`)
    sessionStorage.setItem(localKey, true)
  }

  onMounted(() => {
    setTimeout(appendVievs, 3000)
  })
</script>

<template>
  <main>
    <ScreensSingleProject :project="page.data" />
    <Delimiter />
    <ScreensSingleProjectSimilar :similarProjects="similarProjects" />
  </main>
</template>
