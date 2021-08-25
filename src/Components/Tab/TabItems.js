import React from 'react'
import { Link } from 'react-router-dom'
import MsgSuccess from './MsgSuccess';
const TabItems = ({ saveToObject, data, clickIsActive, index, isActiveTab }) => {
    const { cart, setCartItems } = saveToObject;
    const [msgShow, setMsgShow] = React.useState(false);
    const [order, setOrder] =React.useState(0)

    function handleMsgShow() {
        setMsgShow(!msgShow);
        setTimeout(() => {
            setMsgShow(false);
        }, 2000)
    }

    function totalOrder (e) {
        const itemPrice = Number(e.target.parentElement.querySelector('.food__price').innerHTML)
        setOrder(prev => prev + itemPrice)
    }

    const handleAddCart = (e) => {
        const orders = {
            name: e.target.parentElement.querySelector('.food__title').innerHTML,
            price: e.target.parentElement.querySelector('.food__price').innerHTML
        }
       
        setCartItems([...cart, orders])

        totalOrder(e);
       
        
        handleMsgShow ();
        
    }

    return (
        <>
            <div
                className={(isActiveTab === index) ? "menu__nav__item active" : "menu__nav__item"}
                onClick={() => { clickIsActive(index) }}
                id={"tab-" + data.id + "-menu"}
                key={index}
            >
                <img src={data.thumb_img} alt="" />
                <div className="menu__nav__item__info">
                    <h3 className="food__title">{data.title}</h3>
                    <ul className="food__rating">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <ul className="food__data">
                        <li><i className="fas fa-clock"></i> {data.info[0].prep}</li>
                        <li><i className="fas fa-dollar"></i> <span className="food__price"> {data.info[0].price}</span></li>
                    </ul>
                    <Link to="/"
                        className="btn btn--orange"
                        onClick={handleAddCart}
                    >Add to Card</Link>
                </div>
            </div>
            <MsgSuccess msgShow= {msgShow} />
        </>
    )


}

export default TabItems
