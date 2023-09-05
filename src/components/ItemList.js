/** @format */

import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <div>
      {props.itemList.length > 0 ? (
        props.itemList.map((item, i) => (
          <Item
            item={item}
            key={i}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
            addItem={props.addItem}
            index={i}
          />
        ))
      ) : (
        <h1 className="text-center text-danger">No items in the list.</h1>
      )}
    </div>
  );
}
