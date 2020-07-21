import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export const Textfield = ({
  type = 'text',
  placeholder,
  name,
  register,
  errors
}) => {
  return (
    <div className='Textfield'>
      <input type={type} placeholder={placeholder} name={name} ref={register} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  )
}

Textfield.prototypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object
}
