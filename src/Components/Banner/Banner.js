import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImQrcode } from "react-icons/im";
import { bannerData } from "./data";
import QRModal from "../QRModal/QRModal";
// import SidebarCart from '../SidebarCart/SidebarCart';

const Banner = ({ open, itemCount }) => {
  const { isOpen, setOpen } = open;
  const handleViewCart = () => setOpen(!isOpen);

  const [isModal, setModal] = React.useState(false);
  const handleIsModal = () => setModal(!isModal);

  return (
    <>
      {bannerData.map((data, key) => {
        return (
          <section className="banner snap__child" key={key}>
            <div className="banner__wrapper grid">
              <div className="banner__content">
                <div className="banner__top">
                  <div className="branding">
                    <img src="./images/logo.jpg" alt="logo" />
                  </div>
                  <div className="cartIcon__wrapper">
                    <Link
                      to="/"
                      className="icon__cart"
                      onClick={handleViewCart}
                    >
                      <FaCartPlus />
                    </Link>
                    <div className={itemCount >= 0 ? "badge " : "badge show"}>
                      {itemCount.length}
                    </div>
                  </div>
                </div>

                <ul className="icon_socialmedia">
                  <li>
                    <Link to="/">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>

                <Link to="/" className="icon__QR" onClick={handleIsModal}>
                  <ImQrcode />
                </Link>

                <div className="banner__content__wrapper">
                  <h1 className="banner__header">{data.title}</h1>
                  <p className="banner__body">{data.body}</p>
                  <button className="btn btn--orange"> View Menu</button>
                </div>
              </div>
              <div className="banner__img">
                <img src={data.image} alt="" />
              </div>
            </div>
          </section>
        );
      })}

      <QRModal handleIsModal={handleIsModal} isModal={isModal} />
      {/* <SidebarCart handleViewCart={handleViewCart} viewCart={viewCart} /> */}
    </>
  );
};

export default Banner;
