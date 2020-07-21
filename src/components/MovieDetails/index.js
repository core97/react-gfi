import React from 'react'
import PropTypes from 'prop-types'

import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import './styles.scss'

export const MovieDetailsComponent = ({ movieDetails }) => {
  const key = `like-${movieDetails.imdbID}`
  const [liked, setLiked] = useLocalStorage(key)
  console.log(liked)

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
    Rated: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Awards: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Ratings: PropTypes.arrayOf(
      PropTypes.shape({
        Source: PropTypes.string.isRequired,
        Value: PropTypes.string.isRequired
      })
    ),
    Metascore: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    imdbVotes: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    DVD: PropTypes.string.isRequired,
    BoxOffice: PropTypes.string.isRequired,
    Production: PropTypes.string.isRequired
  }).isRequired
}
