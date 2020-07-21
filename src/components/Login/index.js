import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from '@reach/router'

import { Textfield } from '../../components/Textfield'
import userData from '../../user.mock.json'

import './styles.scss'

const JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

export const Login = ({ activateAuth }) => {
  const { username, password } = userData
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    window.sessionStorage.setItem('token', JWT)
    activateAuth()
    navigate('/')
  }

  return (
    <div className='Login'>
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
        <button type='submit' className='button'>Entrar</button>
      </form>
    </div>
  )
}
