import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import VizSensor from 'react-visibility-sensor'

import { MovieCard } from '../MovieCard'
import { MoviesContext, actions } from '../../contexts/moviesContext'

import './styles.scss'

export const ListOfMoviesComponent = ({ movies }) => {
  const [isVisibleLastItem, setIsVisibleLastItem] = useState(false)
  const [, dispatch] = useContext(MoviesContext)

  useEffect(() => {
    dispatch({ type: actions.nextPage })
  }, [])

  useEffect(() => {
    if (isVisibleLastItem) dispatch({ type: actions.nextPage })
  }, [isVisibleLastItem])

  return (
    <ul className='ListOfMovies'>
      {movies.map((movie, index) =>
        movies.length === index + 1 ? (
          /* Last item of array */
          <VizSensor
            key={movie.imdbID}
            offset={{ top: 0 }}
            onChange={() => {
              setIsVisibleLastItem(!isVisibleLastItem)
            }}
          >
            <MovieCard movie={movie} />
          </VizSensor>
        ) : (
          <MovieCard movie={movie} key={movie.imdbID} />
        )
      )}
    </ul>
  )
}

ListOfMoviesComponent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.oneOf(['movie', 'series', 'game']),
      Poster: PropTypes.string
    })
  ).isRequired
}
