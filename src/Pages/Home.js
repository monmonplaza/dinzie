import React from "react";
import Banner from "../Components/Banner/Banner";
import Location from "../Components/Location/Location";
import SliderMain from "../Components/Slider/SliderMain";
import Footer from "../Components/Footer/Footer";

// import SidebarCart from "../Components/SidebarCart/SidebarCart";
import FoodMenu from "../Components/FoodMenu/FoodMenu";
import FloatCart from "../Components/FloatCart/FloatCart";

const Home = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const [map, setMap] = React.useState(false);
  return (
    <>
      <div className="snap__parent">
        <Banner open={{ isOpen, setOpen }} itemCount={cartItems} />
        <SliderMain />
        {/* <Tab /> */}
        <FoodMenu
          open={{ isOpen, setOpen }}
          cart={{ cartItems, setCartItems }}
        />
        <Location showMap={{ map, setMap }} />
        <Footer />
        <FloatCart open={{ isOpen, setOpen }} itemCount={cartItems} />
      </div>
    </>
  );
};

export default Home;
