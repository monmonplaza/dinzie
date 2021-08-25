import React from 'react'
import { TiTimes } from 'react-icons/ti'
const SidebarCart = ({ handleViewCart, viewCart, orderList }) => {
    return (
        <>
            <aside className={(viewCart) ? "sidebar__cart open" : "sidebar__cart "}>
                <div className="overlay"></div>
                <div className="wrapper">
                    <div className="sidebar__cart__main">
                        <button className="close__btn" onClick={handleViewCart}><TiTimes /></button>
                        <h3>Your Cart</h3>
                        {
                            orderList && orderList.map((order, key) => {
                                
                                return (
                                    <div className="order__block" key={key}>
                                        <ul>
                                            <li><h4>{order.name}</h4></li>
                                            <li>x1</li>
                                        </ul>
                                        <p className="order__price"> {order.price}</p>
                                    </div>
                                )
                            })
                        }



                        <div className="order__total">
                            <h5>Total</h5>
                            <p>sasa</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SidebarCart


