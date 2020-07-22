import React from 'react'
import PropTypes from 'prop-types'

import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import './styles.scss'

export const MovieDetailsComponent = ({ movieDetails }) => {
  const key = `like-${movieDetails.imdbID}`
  const [liked, setLiked] = useLocalStorage(key)

  const addDefaultSrc = (ev) => {
    ev.target.src =
      'https://res.cloudinary.com/dyjfq7bd7/image/upload/v1591612177/guvwrnk2vd8p8u1bcquy.png'
  }

  return (
    <div className='MovieDetails'>
      <div className='MovieDetails__imgWrapper'>
        <div>
          <img
            onError={addDefaultSrc}
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
        </div>
      </div>
      <div className='MovieDetails__content'>
        <h2>{movieDetails.Title}</h2>
        <p>{movieDetails.Plot}</p>
        <h3>{`${movieDetails.imdbRating}`}</h3>
        <FavButton liked={liked} onClick={() => setLiked(!liked)} />
      </div>
    </div>
  )
}

MovieDetailsComponent.propTypes = {
  movieDetails: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Rated: PropTypes.string,
    Released: PropTypes.string,
    Runtime: PropTypes.string,
    Genre: PropTypes.string,
    Director: PropTypes.string,
    Writer: PropTypes.string,
    Actors: PropTypes.string,
    Plot: PropTypes.string.isRequired,
    Language: PropTypes.string,
    Country: PropTypes.string,
    Awards: PropTypes.string,
    Poster: PropTypes.string.isRequired,
    Ratings: PropTypes.arrayOf(
      PropTypes.shape({
        Source: PropTypes.string,
        Value: PropTypes.string
      })
    ),
    Metascore: PropTypes.string,
    imdbRating: PropTypes.string.isRequired,
    imdbVotes: PropTypes.string,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string,
    DVD: PropTypes.string,
    BoxOffice: PropTypes.string,
    Production: PropTypes.string
  }).isRequired
}
