import React, {useState} from "react";

function Item({ name, category }) {
  const [inOrOut, setInOrOut] = useState(true);

  function handleInOrOut(){
    setInOrOut((inOrOut) => !inOrOut);
  }
  const addOrRemoveItem = inOrOut ? "" : "in-cart";
  const inCartOrNot = inOrOut ? "Add to Cart" : "Remove From Cart";
  return (
    <li className= {addOrRemoveItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInOrOut}>{inCartOrNot}</button>
    </li>
  );
}

export default Item;
