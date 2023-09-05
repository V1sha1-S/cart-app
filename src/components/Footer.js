/** @format */

import React from "react";

const Footer = (props) => {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetQuantity(props.index);
        }}
      >
        Reset
      </button>
      <button className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </button>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
};

export default Footer;
