import React, { Component } from "react";
import Slider from "react-slick";
import {sliderData} from './Data'
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }



  render() {
    
    return (
        
      <>
       <section className="bestseller snap__child">
       <div className="bestseller__main">
       <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
        {
            sliderData.map((data, key) => {
                return (
                    <div className="bestseller__item" key={key}>
                        <div className="bestseller__item__grid grid">
                        <div className="bestseller__item__img">
                            <img src={data.main_img} alt="" />
                        </div>
                        <div className="bestseller__item__content">
                            <div className="bestseller__item__content__wrapper">
                            <h2>{data.title}</h2>
                            <ul className="rating">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>

                            <ul className="meta">
                                <li>
                                <div className="meta__item">
                                    <i className="fas fa-clock"></i>
                                    <h4>{data.info[0].prep}</h4>
                                </div>
                                </li>

                                <li>
                                <div className="meta__item">
                                    <i className="fas fa-money"></i>
                                    <h4>{data.info[0].price}</h4>
                                </div>
                                </li>

                                <li>
                                <div className="meta__item">
                                    <i className="fas fa-bike"></i>
                                    <h4>{data.info[0].delivery}</h4>
                                </div>
                                </li>
                            </ul>

                            <p className="description">
                            {data.description}
                            </p>

                            <button href="#" className="btn btn--orange">Add to Cart</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })
        }
         </Slider>
         </div>  
        <div className="bestseller__nav">
             <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
            >
                {
                    sliderData.map((data, key) => {
                        return (
                            <div className="bestseller__navItem" key={key}>
                            <img src={data.thumb_img} alt="" />
                            <h2>{data.title}</h2>
                            </div>
                        )
                    })
                }
            </Slider>
         </div>
       </section>
      </>
    );
  }
}

