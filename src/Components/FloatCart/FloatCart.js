import React from "react";
import { FaCartPlus } from "react-icons/fa";

const FloatCart = ({ open, itemCount }) => {
  const { isOpen, setOpen } = open;
  const handleViewCart = () => setOpen(!isOpen);

  const [isModal, setModal] = React.useState(false);
  const handleIsModal = () => setModal(!isModal);
  return (
    <>
      <div className="floatcart" onClick={handleViewCart}>
        <FaCartPlus />
        <div className={itemCount >= 0 ? "badge " : "badge show"}>
          {itemCount.length}
        </div>
      </div>
    </>
  );
};

export default FloatCart;
