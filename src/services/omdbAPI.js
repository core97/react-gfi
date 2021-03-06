const API_KEY = 'f12ba140'

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`

const buildUrl = (query = '') => `${BASE_URL}${query}`

export const fetchMovies = async (title, page) => {
  try {
    const url = buildUrl(`&s=${title}&page=${page}`)
    const res = await window.fetch(url)
    const resJSON = await res.json()
    return resJSON
  } catch (error) {
    throw new Error(error)
  }
}

export const fecthMovieById = async (imdbID) => {
  try {
    const url = buildUrl(`&i=${imdbID}`)
    const res = await window.fetch(url)
    const resJSON = await res.json()
    return resJSON
  } catch (error) {
    throw new Error(error)
  }
}
