import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { ListOfMovies } from '../container/ListOfMovies'
import { Textfield } from '../components/Textfield'
import { MoviesContext, actions } from '../contexts/moviesContext'

export const Home = () => {
  const [title, setTitle] = useState('')
  const [, dispatch] = useContext(MoviesContext)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    setTitle(data.title)
    dispatch({ type: actions.deleteMovies })
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          placeholder='Introduce el título de la película'
          name='title'
          register={register({
            required: true
          })}
          errors={errors}
        />
        <button type='submit'>Buscar</button>
      </form>
      <ListOfMovies title={title} />
    </div>
  )
}
