import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import VizSensor from 'react-visibility-sensor'
import { Spinner } from '../Spinner'

import { MovieCard } from '../MovieCard'
import { MoviesContext, actions } from '../../contexts/MoviesContext'

import './styles.scss'

export const ListOfMoviesComponent = ({ movies }) => {
  const [isVisibleLastItem, setIsVisibleLastItem] = useState(false)
  const [state, dispatch] = useContext(MoviesContext)

  useEffect(() => {
    if (state.movies.length < state.totalMovies) {
      if (isVisibleLastItem) dispatch({ type: actions.nextPage })
    }
  }, [isVisibleLastItem])

  return (
    <>
      <ul className='ListOfMovies'>
        {movies.map((movie, index) =>
          movies.length === index + 1 ? (
            /* Last item of array */
            <div className='ListOfMovies__item' key={movie.imdbID}>
              <VizSensor
                offset={{ top: 0 }}
                onChange={() => {
                  setIsVisibleLastItem(!isVisibleLastItem)
                }}
              >
                <MovieCard movie={movie} />
              </VizSensor>
            </div>
          ) : (
            <div className='ListOfMovies__item' key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          )
        )}
      </ul>
      {state.movies.length < state.totalMovies && <Spinner />}
    </>
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
