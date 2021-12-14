import React from "react";
import Slider from "react-slick";
import { sliderData } from "./Data";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { FaMoneyBill } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";

import { isMobile } from "react-device-detect";

const SliderMain = () => {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);

  console.log(isMobile);

  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  React.useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section className="bestseller snap__child">
        <div className="bestseller__main">
          <Slider asNavFor={nav2} ref={slider1}>
            {sliderData.map((data, key) => {
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
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                        </ul>

                        <ul className="metadata">
                          <li>
                            <AiFillClockCircle />
                            {data.info[0].prep}
                          </li>
                          <li>
                            <FaMoneyBill />
                            {data.info[0].price}
                          </li>
                          <li>
                            <RiEBike2Fill />
                            {data.info[0].delivery}
                          </li>
                        </ul>

                        <p className="description">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="bestseller__nav">
          {isMobile ? (
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={2}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {sliderData.map((data, key) => {
                return (
                  <div className="bestseller__navItem" key={key}>
                    <img src={data.thumb_img} alt="" />
                    <h2>{data.title}</h2>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {sliderData.map((data, key) => {
                return (
                  <div className="bestseller__navItem" key={key}>
                    <img src={data.thumb_img} alt="" />
                    <h2>{data.title}</h2>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </section>
    </>
  );
};

export default SliderMain;
