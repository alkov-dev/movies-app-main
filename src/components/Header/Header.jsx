import React from 'react'
import { NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return(
    <div className='site-header'>
      <div className='container header-container'>
        <NavLink exact className='header-link' activeClassName='active' to='/'> Поиск </NavLink>
        <NavLink className='header-link header-link-first' activeClassName='active' to='/info'>Инфо</NavLink>
        <NavLink className='header-link' activeClassName='active' to='/saved'>Сохраненые</NavLink>
      </div>
    </div>
  )
}

export default Header;