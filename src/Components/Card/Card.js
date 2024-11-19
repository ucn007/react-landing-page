import React from "react";
import "./index.scss";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-inner-container">
        <div className="cardImg card-img-bg">
          <img src={props.image} alt="" />
        </div>
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
