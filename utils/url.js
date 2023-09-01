function objectToQueryString(obj, parentKey = null) {
  return Object.keys(obj)
    .map((key) => {
      const value = obj[key]

      if (parentKey) {
        key = `${parentKey}[${key}]`
      }

      if (typeof value === 'object') {
        return objectToQueryString(value, key)
      }

      return `${key}=${encodeURIComponent(value)}`
    })
    .join('&')
}

export { objectToQueryString }
