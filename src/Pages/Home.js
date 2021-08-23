import React from 'react'
import Banner from '../Components/Banner/Banner';
import Location from '../Components/Location/Location';
import SliderMain from '../Components/Slider/SliderMain';
import Footer from '../Components/Footer/Footer';
import Tab from '../Components/Tab/Tab';
const Home = () => {

    const [cart, setCartItems] = React.useState([]);

    const saveToObject = (e) => {
        const orders = {
            name: e.target.parentElement.querySelector('.food__title').innerHTML,
            price: e.target.parentElement.querySelector('.food__price').innerHTML
        }
        setCartItems([...cart, orders])
    }
    console.log(cart)

    return (
        <>
            <div className="snap__parent">

                <Banner showCart={cart} />
                <SliderMain />
                <Tab addToCart={saveToObject} />
                <Location />
                <Footer />
            </div>
        </>
    )
}

export default Home

