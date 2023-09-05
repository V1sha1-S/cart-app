/** @format */

import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name, price);
    setName("");
    setPrice("");
  };

  return (
    <form className="row mb-5" onSubmit={handleSubmit}>
      <div className="mb-3 col-4">
        <label htmlFor="inputName">Item Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="Item Name"
          placeholder="Enter item name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputPrice">Price</label>
        <input
          type="text"
          className="form-control"
          id="inputPrice"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary col-4">
        Submit
      </button>
    </form>
  );
};

export default AddItem;
