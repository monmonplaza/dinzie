import React from 'react'
import Banner from '../Components/Banner/Banner';
import Location from '../Components/Location/Location';
import SliderMain from '../Components/Slider/SliderMain';
import Footer from '../Components/Footer/Footer';
import Tab from '../Components/Tab/Tab';

import SidebarCart from '../Components/SidebarCart/SidebarCart';
const Home = () => {

    const [cart, setCartItems] = React.useState([]);

    const [viewCart, setViewCart] = React.useState(false);
    const handleViewCart = () => {
        setViewCart(!viewCart)

        // const allPrice = document.querySelectorAll('.order__price');
        // for(var i= 0; i <= allPrice.length; i++) {
          
        //         allPrice.push(Number(allPrice.innerHTML)) ;
        //         console.log(allPrice[i])
         
        // }
    };

    const [map, setMap] = React.useState(false);





    return (
        <>
            <div className="snap__parent">

                <Banner handleViewCart={handleViewCart} />
                <SliderMain />
                {/* <Tab addToCart={saveToObject} /> */}
                <Tab addToCart={{ cart, setCartItems }} />
                <Location showMap={{ map, setMap }} />
                <Footer />
                <SidebarCart handleViewCart={handleViewCart} orderList={cart} viewCart={viewCart} />




            </div>
        </>
    )
}

export default Home

