export default function (src) {
  const strapiUrl = useRuntimeConfig().public.strapiUrl

  return strapiUrl + src
}
