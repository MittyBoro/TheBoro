export default function (imgObj, size) {
  if (!imgObj) {
    return null
  }

  let src
  if (size) {
    src = imgObj.data.attributes.formats[size].url
  } else {
    src = imgObj.data.attributes.url
  }
  const img = useImage()

  return img(src, {}, { provider: 'strapi' })
}
