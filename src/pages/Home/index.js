import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { ListOfMovies } from '../../container/ListOfMovies'
import { Textfield } from '../../components/Textfield'
import { MoviesContext, actions } from '../../contexts/MoviesContext'

import './styles.scss'

export const Home = () => {
  const [title, setTitle] = useState('')
  const [, dispatch] = useContext(MoviesContext)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    setTitle(data.title)
    dispatch({ type: actions.deleteMovies })
    // e.target.reset()
  }

  return (
    <div className='Home'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          placeholder='Buscar película'
          name='title'
          register={register({
            required: true,
            minLength: {
              value: 3,
              message: 'Por favor introduce más de dos caracteres'
            }
          })}
          errors={errors}
        />
        <button className='button' type='submit'>Buscar</button>
      </form>
      <ListOfMovies title={title} />
    </div>
  )
}
