import React from 'react'
import { PropagateLoader } from 'react-spinners'

import './styles.scss'

export const Spinner = () => {
  return (
    <div className='Spinner'>
      <PropagateLoader />
    </div>
  )
}
