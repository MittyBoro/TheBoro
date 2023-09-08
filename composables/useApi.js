export default function () {
  const strapiToken = useRuntimeConfig().public.strapiToken
  const client = useStrapiClient()

  const $fetch = async (path, options = {}) => {
    try {
      const { data } = await client(path, {
        headers: {
          Authorization: strapiToken,
        },
        ...options,
      })
      return data
    } catch (error) {
      throw createError({
        statusCode: error.error.status,
        statusMessage: error.error.message,
      })
    }
  }
  const get = async (path, queryData = {}) => {
    const queryStr = objectToQueryString({
      locale: ['ru'],
      ...queryData,
    })
    return await $fetch(path + '?' + queryStr)
  }
  const post = async (path, data = {}) => {
    const result = await $fetch(path, {
      method: 'POST',
      body: data,
    })
    return result
  }

  const find = async (path, query = {}) => {
    const result = await get(path, query)
    return result
  }

  const findOne = async (path, query = {}) => {
    const result = await find(path, query)
    return {
      data: result.attributes,
      id: result.id,
    }
  }

  return { find, findOne, post }
}
