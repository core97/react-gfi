import React from 'react'
import PropTypes from 'prop-types'

export const ListOfMoviesComponent = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <p key={movie.imdbID}>{movie.Title}</p>
      ))}
    </ul>
  )
}

ListOfMoviesComponent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.oneOf(['movie', 'series']),
    Poster: PropTypes.string
  })).isRequired
}
