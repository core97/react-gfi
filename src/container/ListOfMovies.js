import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { ListOfMoviesComponent } from '../components/ListOfMovies'
import { MoviesContext, actions } from '../contexts/moviesContext'

const API_KEY = 'f12ba140'

const getSearchMovies = (movie, page) =>
  `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}&page=${page}`

export const ListOfMovies = ({ title }) => {
  const [state, dispatch] = useContext(MoviesContext)
  const [page] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await window.fetch(getSearchMovies(title, page))
        const resJSON = await res.json()
        console.log(resJSON)
        dispatch({ type: actions.addMovies, payload: { movies: resJSON.Search } })
        console.log(state)
      } catch (error) {
        console.log(error)
      }
    }
    if (title) fetchMovies()
  }, [title])

  if (!title) return <h2>Escribe alguna película</h2>
  if (!state.movies) return <h2>Cargando</h2>

  return <ListOfMoviesComponent movies={state.movies} />
}

ListOfMovies.propTypes = {
  title: PropTypes.string.isRequired
}
