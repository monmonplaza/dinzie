import React from 'react'
import { Link } from 'react-router-dom'
import MsgSuccess from './MsgSuccess';
import { MdAddShoppingCart } from 'react-icons/md'
const TabItems = ({ data, clickIsActive, index, isActiveTab }) => {
    const [msgShow, setMsgShow] = React.useState(false);
    // const [totalOrder, setTotalOrder] = React.useState('')

    function handleMsgShow() {
        setMsgShow(!msgShow);
        setTimeout(() => {
            setMsgShow(false);
        }, 2000)
    }

    function getOrder() {

        let orders = [];
        if (localStorage.getItem('orders')) {
            orders = JSON.parse(localStorage.getItem('orders'));
        }

        return orders
    }

    // function computeTotal() {

    //     let orders = getOrder();

    //     let totalOrder = '';
    //     orders.forEach((order) => {
    //         let totalOrder = totalOrder + Number(order.price);
    //     })

    // }

    // computeTotal()


    function addOrderToLocalstorage(e) {
        const ordersObj = {
            name: e.target.parentElement.querySelector('#foodTitle').innerHTML,
            price: e.target.parentElement.querySelector('#foodPrice').innerHTML
        }

        let orders = getOrder();

        // if (localStorage.getItem('orders')) {
        //     orders = JSON.parse(localStorage.getItem('orders'));
        // }


        if (ordersObj) {
            orders.push({ 'name': ordersObj.name, 'price': ordersObj.price });
            localStorage.setItem('orders', JSON.stringify(orders));
        }





    }






    const handleAddCart = (e) => {
        addOrderToLocalstorage(e);
        handleMsgShow();

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
                    <h3 className="food__title" id="foodTitle">{data.title}</h3>
                    <ul className="food__rating">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <ul className="food__data">
                        <li><i className="fas fa-clock"></i> {data.prep}</li>
                        <li><i className="fas fa-dollar"></i> <span className="food__price" id="foodPrice"> {data.price}</span></li>
                    </ul>
                    <Link to="/"
                        className="btn btn--orange"
                        onClick={handleAddCart}
                    ><MdAddShoppingCart /></Link>
                </div>
            </div>
            <MsgSuccess msgShow={msgShow} />
        </>
    )


}

export default TabItems
