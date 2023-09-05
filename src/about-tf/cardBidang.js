import React from "react";
import './cardBidang.css'

function Cardbidang ({txtBidang, fotoBidang}) {
    return (
        <div className="Background">
            <p className="txt"><img className="fotoObeng" src={fotoBidang} />{txtBidang}</p>
        </div>
    )
}

export default Cardbidang