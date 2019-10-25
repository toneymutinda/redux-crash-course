import baseUrl from './main'

export const getJoke = async () => {
    const res = await baseUrl.get('random')
    return res.data
}

export const getJokeByCategory = async (category) => {
    const res = await baseUrl.get(`random?category=${category}`)
    return res.data
}

export const getSearchJoke = async (query) => {
    const res = await baseUrl.get(`search?query=${query}`)
    return res.data
}
