import React from "react";
import { TiTimes } from "react-icons/ti";
import { RiDeleteBin2Fill } from "react-icons/ri";
const SidebarCart = ({ open, cart, onAdd, onRemove }) => {
  const { isOpen, setOpen } = open;

  const { cartItems, setCartItems } = cart;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const shippingPrice = itemsPrice < 2000 && cartItems.length === 0 ? 0 : 20.0;

  const totalPrice = itemsPrice + shippingPrice;

  const handleClose = () => {
    setOpen(!isOpen);
  };

  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <>
      <aside className={isOpen ? "sidebar__cart open" : "sidebar__cart"}>
        <div className="overlay"></div>
        <div className="wrapper">
          <div className="sidebar__cart__main">
            <button className="close__btn" onClick={handleClose}>
              <TiTimes />
            </button>
            <div className="sidebar__cart__header">
              <h2>Your Order</h2>
              <button onClick={handleClear}>
                <RiDeleteBin2Fill />
              </button>
            </div>
            <div className="order__wrapper">
              {cartItems.length === 0 && (
                <div className="cart__empty">Your cart is currently empty.</div>
              )}
              {cartItems.map((item) => (
                <div className="order__block" key={item.id}>
                  <div className="order__block__wrapper">
                    <img src={item.img} alt="" />
                    <div className="order__info">
                      <h3>{item.title}</h3>
                      <ul>
                        <li>
                          <button
                            onClick={() => {
                              onAdd(item);
                            }}
                          >
                            +
                          </button>
                        </li>
                        <li>{item.qty}</li>
                        <li>
                          <button
                            onClick={() => {
                              onRemove(item);
                            }}
                          >
                            -
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>Php {item.price} </p>
                </div>
              ))}
            </div>
            <h4>Order Summary</h4>
            <div className="order__delivery">
              <h6>Delivery</h6>
              <p>
                Php {cartItems.length === 0 ? 0.0 : shippingPrice.toFixed(2)}
              </p>
            </div>
            <div className="order__total">
              <h5>Total</h5>
              <p>Php {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarCart;
