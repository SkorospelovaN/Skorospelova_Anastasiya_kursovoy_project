import React, { useContext} from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import './Header.css'
import Logo from './Logo'
import { CATALOG_ROUTE, LOG_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, SHOPCART_ROUTE } from '../../utils/consts'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

const Header = observer( () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }


  const LogOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    navigate(MAIN_ROUTE)
  }

  return (
    <> 
    {user.isAuth ? 
      <ul className='header'>
      <Logo />
      <div>
        <NavLink to={MAIN_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>О нас</NavLink>
        <NavLink to={CATALOG_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Каталог</NavLink>
        <NavLink to={PROFILE_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Личный кабинет</NavLink>
        <NavLink to={SHOPCART_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Корзина</NavLink>
        <NavLink onClick={handleScroll} className='menu'>Контакты</NavLink>
      </div>
      <button onClick={() => LogOut()}>Выйти</button>
    </ul>
    :
    <ul className='header'>
      <Logo />
      <div>
        <NavLink to={MAIN_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>О нас</NavLink>
        <NavLink to={CATALOG_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Каталог</NavLink>
        <NavLink to={LOG_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Личный кабинет</NavLink>
        <NavLink to={LOG_ROUTE} className={({ isActive }) => (isActive ? "menu-active" : "menu")}>Корзина</NavLink>
        <NavLink onClick={handleScroll} className='menu'>Контакты</NavLink>
      </div>
      <button onClick={() => navigate(LOG_ROUTE)}>Войти</button>
    </ul>
  }
    
    </>
  )
})

export default Header