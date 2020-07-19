const API_KEY = 'f12ba140'

const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

const buildUrl = (uri = '', query = '') => `${BASE_URL}${uri}${query}`

export const fetchMovies = async (title, page) => {
  try {
    const url = buildUrl('', `&s=${title}&page=${page}`)
    const res = await window.fetch(url)
    const resJSON = await res.json()
    return resJSON
  } catch (error) {
    throw new Error(error)
  }
}
