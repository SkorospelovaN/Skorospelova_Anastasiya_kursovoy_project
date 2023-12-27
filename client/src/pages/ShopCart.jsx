import React from 'react'
import './ShopCart.css'

const ShopCart = () => {
  return (
    <>
    <div id="around">
        <div className='shop-cart'>
            <h1>Корзина</h1>
            <div className='shop-grid'>
                <p>В вашей корзине пусто</p>
            </div>
            <button className='shopcart-btn'>Заказать</button>
        </div>
    </div>
    </>
  )
}

export default ShopCart