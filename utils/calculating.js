const getValueByDistance = (
  event,
  element,
  fromValue,
  toValue,
  maxDistance = 200
) => {
  if (!element) return fromValue

  const valueRange = Math.abs(toValue - fromValue)
  const minValue = Math.min(fromValue, toValue)
  const maxValue = Math.max(fromValue, toValue)

  const distance = getDistanceToElement(event, element)
  const normalizedDistance = Math.min(distance, maxDistance)

  const valueChange = (normalizedDistance / maxDistance) * valueRange

  let newValue =
    fromValue < toValue
      ? minValue + valueRange - valueChange
      : minValue + valueChange

  newValue = Math.max(Math.min(newValue, maxValue), minValue)

  return newValue
}

const getDistanceToElement = (event, element) => {
  const elementRect = element.getBoundingClientRect()
  const distance =
    Math.sqrt(
      (event.clientX - (elementRect.left + elementRect.width / 2)) ** 2 +
        (event.clientY - (elementRect.top + elementRect.height / 2)) ** 2
    ) -
    elementRect.width / 2

  return distance
}

export { getValueByDistance, getDistanceToElement }
