import React from 'react'

import './styles.scss'

export const MovieDetails = ({ imdbID }) => {
  return (
    <div className='MovieDetails'>
      <h2>{imdbID}</h2>
    </div>
  )
}
