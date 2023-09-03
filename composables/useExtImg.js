export default function (thumb, size) {
  const preffix = useExtSrc()
  if (size) {
    return preffix + thumb.data.attributes.formats[size].url
  } else {
    return preffix + thumb.data.attributes.url
  }
}
