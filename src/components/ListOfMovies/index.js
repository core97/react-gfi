import React/* , { useContext, useEffect } */ from 'react'
import PropTypes from 'prop-types'

// import { MoviesContext } from '../../contexts/moviesContext'

import './styles.scss'

export const ListOfMoviesComponent = ({ movies }) => {
  /* const [state, dispatch] = useContext(MoviesContext)

  useEffect(() => {
    dispatch({ type: 'ADD_MOVIES', payload: { movies } })
  }, []) */

  return (
    <ul className='ListOfMovies'>
      {movies.map((movie) => (
        <p key={movie.imdbID}>{movie.Title}</p>
      ))}
    </ul>
  )
}

ListOfMoviesComponent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.oneOf(['movie', 'series']),
      Poster: PropTypes.string
    })
  ).isRequired
}
