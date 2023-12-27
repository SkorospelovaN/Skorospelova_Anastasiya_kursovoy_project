import {ADMIN_ROUTE, CATALOG_ROUTE, LOG_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTR_ROUTE, SHOPCART_ROUTE} from './utils/consts'
import ShopCart from './pages/ShopCart'
import Profile from './pages/Profile'
import App from './pages/App'
import Auth from './pages/Auth'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <App />
    },
    {
        path: SHOPCART_ROUTE,
        Element: <ShopCart />
    },
    {
        path: PROFILE_ROUTE,
        Element: <Profile />
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <App />
    },
    {
        path: CATALOG_ROUTE,
        Element: <Catalog />
    },
    {
        path: LOG_ROUTE,
        Element: <Auth />
    },
    {
        path: REGISTR_ROUTE,
        Element: <Auth />
    } 
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin />
    }
]