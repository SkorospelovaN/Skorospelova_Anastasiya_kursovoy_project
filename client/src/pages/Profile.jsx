import React from 'react'
import './Profile.css'


const Profile =  () => {

  return (
    <>
    <div id="around">
        <div className='profile'>
            <svg xmlns="http://www.w3.org/2000/svg" width="217" height="217" viewBox="0 0 217 217" fill="none">
                <path d="M45.2085 172.8C45.2085 150.981 60.5551 132.397 81.4117 128.959L83.2904 128.648C99.991 125.895 117.009 125.895 133.71 128.648L135.589 128.959C156.445 132.397 171.792 150.981 171.792 172.8C171.792 182.23 164.391 189.875 155.263 189.875H61.7378C52.6089 189.875 45.2085 182.23 45.2085 172.8Z" stroke="#CD323C" stroke-width="6"/>
                <path d="M145.421 62.7266C145.421 82.3888 128.891 98.3281 108.5 98.3281C88.1098 98.3281 71.5801 82.3888 71.5801 62.7266C71.5801 43.0644 88.1098 27.125 108.5 27.125C128.891 27.125 145.421 43.0644 145.421 62.7266Z" stroke="#CD323C" stroke-width="6"/>
            </svg>
            <div className='profile-info'>
                <h1>Профиль</h1>
                <p>Логин</p>
                <p>ФИО</p>
                <p>Номер телефона</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile