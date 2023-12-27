import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import './Auth.css'
import Logo from './components/Logo'
import { LOG_ROUTE, MAIN_ROUTE, REGISTR_ROUTE } from '../utils/consts'
import { registration, login, loginAdmin } from '../http/userAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'


const Login = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOG_ROUTE
    const [fio, setFio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email,password);
            } else if (!isLogin){ 
                data = await registration(fio,email,password,phone);
            } else {
                data = await loginAdmin(email,password);
                user.setRole("ADMIN")
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    const handleSubmit = event => {
        event.preventDefault();
    
      };

  return (
    <div className='registr'>
        <div id="around">
            <Logo />
            <div className='form-title-2'>
                <h1>BGUniverse</h1>
                    <form onSubmit={handleSubmit} className='reg-form'>
                        <p>{isLogin ? 'Вход' : 'Регистрация'}</p> 
                        {isLogin ? <></> : <input type='text' placeholder='Введите ФИО...' value={fio} onChange={e => setFio(e.target.value)}/>}
                        <input type='text' placeholder='Введите e-mail...' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' placeholder={isLogin ? 'Введите пароль...' : 'Придумайте пароль...'} value={password} onChange={e => setPassword(e.target.value)}/>
                        {isLogin ? <></> : <input type='tel' placeholder='Введите номер телефона...' value={phone} onChange={e => setPhone(e.target.value)}/>}
                        <div>
                            <p>{isLogin ? 'Впервые у нас?' : 'Уже есть аккаунт?'}</p>
                            {isLogin ? <Link to={REGISTR_ROUTE}>Зарегистрируйтесь</Link> : <Link to={LOG_ROUTE}>Войдите</Link>}
                        </div>
                        <button type='submit' className='log-button' onClick={click}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                    </form>
            </div>
        </div>
    </div>
  )
})

export default Login