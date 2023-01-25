import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Cart({cartItems, setCartItems, onAdd, onRemove, currentUser}) {

  const totalPrice = cartItems.reduce((total, item) => item.price + total , 0)

  //Get Count For How Many Of Duplicate In Cart
  const counts = {};
  cartItems.forEach(x => { counts[x.name] = (counts[x.name] || 0) + 1; });
  console.log(counts);

  //Filter Duplicates
  let filteredItems = [];
  cartItems.forEach(item => {
    if (!filteredItems.includes(item)) {
      filteredItems.push(item);
    }
  })

  //Display Filtered Items Along W/ Total Count In Cart Of Item
  const itemsToShow = filteredItems.map((item) => (
  <>
    <div>Total {item.name}'s in Cart: {counts[item.name]}</div>
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  </>
  ))

  return (
    <>
        <Header/>
        <h2>Cart Items</h2>
        <h3>Total: ${totalPrice}</h3>
        {itemsToShow}
    </>
  )
}
