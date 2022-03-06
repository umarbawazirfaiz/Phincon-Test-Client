import React from 'react'
import icon from '../assets/icons/icon.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <a className="link-brand" href="/">
            <img src=""  className="icon-brand" alt='' />
            <span className="text-brand">Pokedex</span>
        </a>
        <div>
          <Link to={`/my-pokemon`}>
              <img src={icon} className='my-pokemon-icon' alt='' />
          </Link>
        </div>
    </div>
  )
}

export default Header