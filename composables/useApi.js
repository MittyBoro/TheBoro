export default function () {
  const strapiToken = useRuntimeConfig().public.strapiToken
  const client = useStrapiClient()

  const get = async (method, queryData = {}) => {
    const queryStr = objectToQueryString({
      locale: ['ru'],
      ...queryData,
    })

    try {
      const { data } = await client(method + '?' + queryStr, {
        headers: {
          Authorization: strapiToken,
        },
      })
      return data
    } catch (error) {
      throw createError({
        statusCode: error.error.status,
        statusMessage: error.error.message,
      })
    }
  }

  const find = async (method, query = {}) => {
    const result = await get(method, query)
    return result
  }

  const findOne = async (method, query = {}) => {
    const result = await find(method, query)
    return {
      data: result.attributes,
      id: result.id,
    }
  }

  return { find, findOne }
}
