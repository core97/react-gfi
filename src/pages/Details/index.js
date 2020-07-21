import React from 'react'

import { MovieDetails } from '../../container/MovieDetails'

import './styles.scss'

export const Details = ({ imdbID }) => {
  return (
    <div className='Details'>
      <MovieDetails movieId={imdbID} />
    </div>
  )
}
