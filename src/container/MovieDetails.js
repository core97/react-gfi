import React, { useEffect, useState } from 'react'

import { MovieDetailsComponent } from '../components/MovieDetails'
import { fecthMovieById } from '../services/omdbAPI'
import { Spinner } from '../components/Spinner'

export const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null)
  const [errorFetch, setErrorFetch] = useState(false)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fecthMovieById(movieId)
        setMovie(res)
        setErrorFetch(false)
      } catch (error) {
        setErrorFetch(true)
      }
    }
    if (movieId) getMovie()
  }, [])

  if (errorFetch) return <h2>Error en los detalles de la peli</h2>
  if (!movie) return <Spinner />

  return <MovieDetailsComponent movieDetails={movie} />
}
