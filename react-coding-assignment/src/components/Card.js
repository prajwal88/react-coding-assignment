import React from "react";
import "../styles/card.css"

const Card = (props) => {
    return (
      <>
        <div className="card">
            <img src={props.image} alt="Avatar" style={{width:'100%'}}  height="140px" width="240px" />
            <div className="container">
                <h4 className="margin-0"><b>{props.description}</b></h4> 
                <p className="margin-0">{props.headline}</p> 
            </div>
        </div>
      </>
    )
}

export default Card;