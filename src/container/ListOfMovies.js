import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '../components/Spinner'

import { ListOfMoviesComponent } from '../components/ListOfMovies'
import { MoviesContext, actions } from '../contexts/MoviesContext'
import { fetchMovies } from '../services/omdbAPI'

export const ListOfMovies = ({ title }) => {
  const [state, dispatch] = useContext(MoviesContext)
  const [errorFetch, setErrorFetch] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetchMovies(title, state.page)
        dispatch({
          type: actions.addMovies,
          payload: { movies: [...res.Search], totalMovies: res.totalResults }
        })
        setErrorFetch(false)
      } catch (error) {
        console.error(error)
        setErrorFetch(true)
      }
    }
    if (title) getMovies()
  }, [title, state.page])

  if (errorFetch) return <h2>Error en la petición</h2>
  if (!state.movies) return <Spinner />

  return <ListOfMoviesComponent movies={state.movies} />
}

ListOfMovies.propTypes = {
  title: PropTypes.string.isRequired
}
