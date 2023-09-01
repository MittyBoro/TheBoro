export default function () {
  const strapiToken = useRuntimeConfig().public.strapiToken
  const client = useStrapiClient()

  const get = async (method, queryData = {}) => {
    const queryStr = objectToQueryString({
      populate: ['seo'],
      locale: ['ru'],
      ...queryData,
    })

    const result = await client(method + '?' + queryStr, {
      headers: {
        Authorization: strapiToken,
      },
    })

    return result.data
  }

  const find = async (method, query = {}) => {
    const result = await get(method, query)
    return result
  }

  const findOne = async (method, query = {}) => {
    const result = await get(method, query)
    return result.attributes
  }

  return { find, findOne }
}
