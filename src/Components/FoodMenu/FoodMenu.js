import React from "react";
import SidebarCart from "../SidebarCart/SidebarCart";
import {
  categoryList,
  bestSeller,
  appetizer,
  mainCourse,
  dessert,
  comboMeal,
  noodles,
} from "./data";
const FoodMenu = ({ cart, open }) => {
  const [selected, setSelected] = React.useState("bestSeller");
  //step 1
  const [data, setData] = React.useState([]);

  const { cartItems, setCartItems } = cart;
  const { isOpen, setOpen } = open;

  //step 2
  React.useEffect(() => {
    switch (selected) {
      case "bestSeller":
        setData(bestSeller);
        break;
      case "appetizer":
        setData(appetizer);
        break;

      case "mainCourse":
        setData(mainCourse);
        break;

      case "dessert":
        setData(dessert);
        break;

      case "comboMeal":
        setData(comboMeal);
        break;

      case "noodles":
        setData(noodles);
        break;

      default:
        setData(bestSeller);
    }
  }, [selected]);

  const onAdd = (data) => {
    const exist = cartItems.find((x) => x.id === data.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, qty: 1 }]);
    }
    console.log(cartItems);
  };

  const onRemove = (data) => {
    const exist = cartItems.find((x) => x.id === data.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== data.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === data.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div className="foodmenu">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="foodmenu__wrapper">
            <div className="foodmenu__nav">
              <h3>Select Category</h3>
              <ul>
                {categoryList.map((category) => (
                  <li
                    className={selected === category.id ? "active" : ""}
                    onClick={() => {
                      setSelected(category.id);
                    }}
                    key={category.id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="foodmenu__list">
              {data.map((d) => {
                return (
                  <div className="foodmenu__card" key={d.id}>
                    <img src={d.img} alt="" />

                    <div className="foodmenu__cardcontent">
                      <h3>{d.title}</h3>
                      <ul>
                        <li>Price</li>
                        <li>Php {d.price}</li>
                      </ul>

                      <button onClick={() => onAdd(d)}>Add to Cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <SidebarCart
        open={{ isOpen, setOpen }}
        cart={{ cartItems, setCartItems }}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </>
  );
};

export default FoodMenu;
