/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const items = [
    {
      price: 999,
      name: "Mobile",
      quantity: 0,
    },
    {
      price: 999,
      name: "Phone",
      quantity: 0,
    },
    {
      price: 999,
      name: "Tab",
      quantity: 0,
    },
  ];

  const [itemList, setItemList] = useState(items);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newItemList = [...itemList];
    let newTotalAmount = totalAmount; // Initialize newTotalAmount
    newItemList[index].quantity++;
    newTotalAmount += newItemList[index].price;
    setTotalAmount(newTotalAmount); // Update totalAmount state
    setItemList(newItemList);
  };

  const decrementQuantity = (index) => {
    let newItemList = [...itemList];
    if (newItemList[index].quantity > 0) {
      newItemList[index].quantity--;
      let newTotalAmount = totalAmount; // Initialize newTotalAmount
      newTotalAmount -= newItemList[index].price;
      setTotalAmount(newTotalAmount); // Update totalAmount state
    }
    setItemList(newItemList);
  };

  let resetQuantity = (index) => {
    let newItemList = [...itemList];
    newItemList.map((item) => {
      item.quantity = 0;
    });
    setItemList(newItemList);
    setTotalAmount(0); // Update totalAmount state
  };

  let removeItem = (index) => {
    let newItemList = [...itemList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newItemList[index].quantity * newItemList[index].price;
    newItemList.splice(index, 1);
    setItemList(newItemList);
    setTotalAmount(newTotalAmount);
  };

  let addItem = (name, price) => {
    let newItemList = [...itemList];
    newItemList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setItemList(newItemList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ItemList
          itemList={itemList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
