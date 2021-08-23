import React from 'react'

const QRModal = ({handleIsModal, isModal}) => {
    return (
        <>
            <div className={(isModal) ?  "qr__modal open" : "qr__modal "}>
                <div className="qr__modal__main">
                    <h3>Scan to view Menu</h3>
                    <img src="./images/qrcode.png" alt="" />
                    <button onClick={handleIsModal}>Close</button>
                </div>
            </div>
        </>
    )
}

export default QRModal
