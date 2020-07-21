import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import './styles.scss'

export const MovieCard = ({ movie }) => {
  const key = `like-${movie.imdbID}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const addDefaultSrc = (ev) => {
    ev.target.src = 'https://res.cloudinary.com/dyjfq7bd7/image/upload/v1591612177/guvwrnk2vd8p8u1bcquy.png'
  }

  return (
    <div className='MovieCard'>
      <Link to={`/movie/${movie.imdbID}`}>
        <div className='MovieCard__imgWrapper'>
          <img onError={addDefaultSrc} src={movie.Poster} alt={movie.Title} />
        </div>
      </Link>
      <div className='MovieCard__content'>
        <FavButton liked={liked} onClick={() => setLiked(!liked)} />
        <h3>{movie.Title}</h3>
      </div>
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
