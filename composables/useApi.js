export default function () {
  const strapiToken = useRuntimeConfig().public.strapiToken
  const client = useStrapiClient()

  const get = async (method) => {
    const query = objectToQueryString({
      locale: ['ru'],
    })

    const result = await client(method + '?' + query, {
      headers: {
        Authorization: strapiToken,
      },
    })

    return result?.data
  }

  const find = async (method) => {
    const result = await get(method)
    return result
  }

  const findOne = async (method) => {
    const result = await get(method)
    return result
  }

  return { find, findOne }
}
