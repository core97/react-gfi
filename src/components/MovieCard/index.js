import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import './styles.scss'

export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className='MovieCard'>
        <h3>{movie.Title}</h3>
      </div>
    </Link>
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
