const getValueByDistance = (
  cursorPosition,
  element,
  fromValue,
  toValue,
  maxDistance = 200
) => {
  if (!element) return fromValue

  const valueRange = Math.abs(toValue - fromValue)
  const minValue = Math.min(fromValue, toValue)
  const maxValue = Math.max(fromValue, toValue)

  const distance = getDistanceToElement(cursorPosition, element)
  const normalizedDistance = Math.min(distance, maxDistance)

  const valueChange = (normalizedDistance / maxDistance) * valueRange

  let newValue =
    fromValue < toValue
      ? minValue + valueRange - valueChange
      : minValue + valueChange

  newValue = Math.max(Math.min(newValue, maxValue), minValue)

  return newValue
}

const getDistanceToElement = (cursorPosition, element) => {
  const elementRect = element.getBoundingClientRect()
  const distance =
    Math.sqrt(
      (cursorPosition.x - (elementRect.left + elementRect.width / 2)) ** 2 +
        (cursorPosition.y - (elementRect.top + elementRect.height / 2)) ** 2
    ) -
    elementRect.width / 2

  return distance
}

export { getValueByDistance, getDistanceToElement }
