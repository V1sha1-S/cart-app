/** @format */

import React from "react";

const Item = (props) => {
  // console.log(props.item)
  return (
    <div className="row mt-3 ">
      <div className="col-5">
        <h2>
          {props.item.name}
          <span className="badge bg-secondary">₹{props.item.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.item.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">{props.item.quantity * props.item.price}</div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem (props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Item;
