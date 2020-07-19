import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export const MovieCard = ({ movie }) => {
  return (
    <div className='MovieCard'>
      <h3>{movie.Title}</h3>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.oneOf(['movie', 'series', 'game']),
    Poster: PropTypes.string
  })
}
