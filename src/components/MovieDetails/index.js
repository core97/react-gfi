import React from 'react'

import './styles.scss'

export const MovieDetailsComponent = ({ movieDetails }) => {
  return (
    <div className='MovieDetails'>
      <h2>{movieDetails.Title}</h2>
    </div>
  )
}
