import React from 'react'
import PropTypes from 'prop-types'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import './styles.scss'

export const FavButton = ({ liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <button onClick={onClick} className='FavButton'>
      <Icon size='32px' />
    </button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
