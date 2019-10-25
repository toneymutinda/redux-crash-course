import baseUrl from './main'

export const getCategories = async () => {
    const res = await baseUrl.get('categories')
    return res
}
