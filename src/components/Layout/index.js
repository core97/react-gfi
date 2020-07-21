import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { navItems } from './constants'

import './styles.scss'

export const Layout = ({ children }) => {
  const renderNavItems = (route, textContent) => {
    return (
      <li key={textContent}>
        <Link to={route}>{textContent}</Link>
      </li>
    )
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            {navItems.map((item) =>
              renderNavItems(item.route, item.textContent)
            )}
          </ul>
        </nav>
      </header>
      <div className='content'>{children}</div>
      <footer>
        <p>© Copyright Juan Cortés</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}
