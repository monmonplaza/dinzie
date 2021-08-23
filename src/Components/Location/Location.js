import React from 'react'
import { AiFillPhone, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { RiRoadMapFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Steps } from './data';
const location = () => {

    const lowOpacity = (e) => {
        const steps = document.querySelectorAll('.order__steps');
        steps.forEach((step) => {
            step.style.opacity = ".2";
        })

        if (e.target.classList.contains('.order__steps')) {
            e.target.style.opacity = "1!important";
        }

    }

    const fullOpacity = (e) => {
        const steps = document.querySelectorAll('.order__steps');
        steps.forEach((step) => {
            step.style.opacity = "1";
        })
    }

    return (
        <>
            <section className="order snap__child">
                <div className="container">
                    <div className="order__grid">
                        <div className="order__block">
                            <h2>How to Order to Us</h2>

                            {
                                Steps.map((step, key) => {
                                    return (
                                        <div className="order__steps" onMouseOver={lowOpacity} onMouseLeave={fullOpacity} key={key}>
                                            <div className="step__count">
                                                <span>{key + 1}</span>
                                            </div>
                                            <div className="step__body" >
                                                <h3>{step.title}</h3>
                                                <p>{step.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }






                        </div>

                        <div className="order__block">
                            <div className="order__img">
                                <img src="./images/iphone.png" alt="phone" />
                            </div>
                        </div>

                    </div>

                    <div className="contact">
                        <div className="contact__grid">

                            <div className="contact__box">
                                <h3>Contact Us</h3>
                                <p>We can deliver it for you or you can pick up your order</p>
                            </div>

                            <div className="contact__box">
                                <h3>Home Address </h3>
                                <p>435 Brgy Sta. Monica <br /> San Pablo City, Laguna 4000</p>
                            </div>
                            <div className="contact__box">
                                <h3>Mobile</h3>
                                <ul>
                                    <li><AiFillPhone /> 0921 123 1234</li>
                                    <li><AiFillPhone /> 0921 123 1234</li>
                                </ul>
                            </div>

                            <div className="contact__box">
                                <h3>Social Media</h3>
                                <ul className="social__media">
                                    <li><Link to="/"><AiFillFacebook /></Link></li>
                                    <li><Link to="/"><AiFillInstagram /> </Link></li>
                                    <li><Link to="/"><AiFillTwitterSquare /></Link></li>
                                </ul>
                            </div>


                            <div className="contact__box">
                                <h3>Map Location</h3>
                                <button><RiRoadMapFill /> <span>  View Map </span></button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default location
