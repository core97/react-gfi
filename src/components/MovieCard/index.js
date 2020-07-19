import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import './styles.scss'

export const MovieCard = ({ movie }) => {
  const key = `like-${movie.imdbID}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <div className='MovieCard'>
      <Link to={`/movie/${movie.imdbID}`}>
        <h3>{movie.Title}</h3>
      </Link>
      <FavButton liked={liked} onClick={() => setLiked(!liked)} />
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
