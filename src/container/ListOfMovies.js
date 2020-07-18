import React from 'react'
import PropTypes from 'prop-types'

import { ListOfMoviesComponent } from '../components/ListOfMovies'
import { useFetch } from '../hooks/useFetch'

const API_KEY = 'f12ba140'

const getSearchMovies = (movie, page) =>
  `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}&page=${page}`

export const ListOfMovies = ({ title, page }) => {
  const { response, error } = useFetch(getSearchMovies(title, page))

  if (!response) return <h2>Cargando</h2>
  if (error) return <h2>Cargando</h2>

  return <ListOfMoviesComponent movies={response.Search} />
}

ListOfMovies.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired
}
