import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes'
import Mainpage from '../pages/Mainpage'
import Profile from '../pages/Profile'
import { ADMIN_ROUTE, CATALOG_ROUTE, PROFILE_ROUTE, SHOPCART_ROUTE } from '../utils/consts'
import Catalog from '../pages/Catalog'
import ShopCart from '../pages/Shop-cart'
import { Context } from '..'
import Admin from '../pages/Admin'

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
  return (
    <>
    <Routes>
        {user.isAuth && authRoutes.map(({path, Element}) =>
            <Route key={path} path={path} element={Element}>
            <Route path={path} element={<Mainpage />} />
            <Route path={PROFILE_ROUTE} element={<Profile />} />
            <Route path={CATALOG_ROUTE} element={<Catalog />} />
            <Route path={SHOPCART_ROUTE} element={<ShopCart />} />
          </Route>
        )}
         {publicRoutes.map(({path, Element}) =>
            <Route key={path} path={path} element={Element}>
              <Route path={path} element={<Mainpage />} />
              <Route path={CATALOG_ROUTE} element={<Catalog />} />
            </Route>
        )}
        {user.isAuth && user.role === 'ADMIN' && adminRoutes.map(({path, Element}) =>
            <Route key={path} path={path} element={Element}>
                <Route path={ADMIN_ROUTE} element={<Admin />} />
            </Route>
        )}
    </Routes>
    </>
  )
}

export default AppRouter