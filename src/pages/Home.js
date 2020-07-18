import React from 'react'
import { useForm } from 'react-hook-form'

import { ListOfMovies } from '../container/ListOfMovies'
import { Textfield } from '../components/Textfield'

export const Home = () => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
      <ListOfMovies title='batman' page={1} />
    </div>
  )
}
