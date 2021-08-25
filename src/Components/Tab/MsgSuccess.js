import React from 'react'
import {BiCheck} from 'react-icons/bi'
const MsgSuccess = ({msgShow}) => {
    return (
        <div className={msgShow ? "msg open" : "msg"}>
            <div className="msg__success">
                <p><BiCheck /> Order added to cart</p>
            </div>
        </div>
    )
}

export default MsgSuccess
