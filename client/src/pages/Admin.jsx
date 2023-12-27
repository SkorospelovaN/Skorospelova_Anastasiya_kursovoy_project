import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { fetchUsers } from '../http/userAPI'
import { Context } from '..'
import './Admin.css'
import Logo from './components/Logo'
import CreateGame from './components/CreateGame'

const Admin = observer(() => {
  const {user} = useContext(Context)

  useEffect(() => {
    fetchUsers().then(data => user.setUsers(data))
  }, [])




  return (
    <>
    <div className='admin'>
      <div id='around'>
        <Logo />
        <div className='users'>
        
        <div className='user'  >
          <h1>Пользователи</h1>
          {user._users.map(users => 
          <div key={users} users={users}>
            <p>id: {users.id}</p>
            <p>ФИО: {users.fio}</p>
            <p>email: {users.email}</p>
            <p>Номер телефона: {users.phone}</p>
          </div>
          )}
        </div>
      
      </div>
      <CreateGame />
      </div>
    </div>
    </>
  )
})

export default Admin