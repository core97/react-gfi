import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from '@reach/router'

import { Textfield } from '../../components/Textfield'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import userData from '../../user.mock.json'

import './styles.scss'

export const Login = () => {
  const { username, password } = userData
  const key = `isLogged-${username}`
  const [, setIsLogged] = useSessionStorage(key, false)
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    setIsLogged(true)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          placeholder='Usuario'
          name='inputUsername'
          register={register({
            required: {
              value: true,
              message: 'Este campo es obligatorio'
            },
            pattern: {
              value: new RegExp(`^${username}$`),
              message: 'Usuario incorrecto'
            }

          })}
          errors={errors}
        />
        <Textfield
          placeholder='Contraseña'
          name='inputPassword'
          type='password'
          register={register({
            required: {
              value: true,
              message: 'Este campo es obligatorio'
            },
            pattern: {
              value: new RegExp(`^${password}$`),
              message: 'Contraseña incorrecta'
            }

          })}
          errors={errors}
        />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}
