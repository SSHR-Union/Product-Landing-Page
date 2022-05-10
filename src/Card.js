import React from "react";


const Card=({title="default title",buttonText="My Button",text="my text",link="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})=>(
    <div className="card" style={{width: "18rem"}}>
    <img
      src={link}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
       {text}
      </p>
      <a href="#" className="btn btn-success">{buttonText}</a>
    </div>
  </div>
);
export default Card;