export default function (imageRef, className = 'loaded') {
  const setImgLoaded = () => {
    imageRef.value.classList.add(className)
  }

  if (!imageRef.value.complete) {
    imageRef.value.onload = setImgLoaded
  } else {
    setImgLoaded()
  }
}
