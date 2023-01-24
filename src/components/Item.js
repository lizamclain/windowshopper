import React, { useState } from 'react';

export default function Item({item, cartItems, setCartItems, likedItems, setLikedItems}) {

  const {id, name, price, image, category, description, color} = item;
    //----------->   TODO: Handle Toggle Side for Description || Dynamically Update Price Img, etc.   <---------------

    const [isBack, setIsBack] = useState(false);

    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const handleLikes = () => {
      console.log("ADDTOLIKE")
    }
    const front = 
      <div>
          <h3>{name}</h3>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <img src={image} onClick={handleFlip}/>
          <h4>Price: ${price}</h4>
          <button onClick={() => onAddToLikes(item)}>Like</button>
          <button>Dislike</button>
      </div>

  const back = 
    <div >
        <h3 onClick={handleFlip}>{name}</h3>
        <button onClick={() => onAddToCart(item)} >Add to Cart</button>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h4>{color}</h4>
        <h4>Price: ${price}</h4>
        <button onClick={() => onAddToLikes(item)}>Like</button>
        <button>Dislike</button>
    </div>

  //add item to cart
  const onAddToCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
    if (existingCartItems) {
      const newCartItems = cartItems.map((x) => 
        x.id === item.id ? {...existingCartItems, item} : x
      )
      setCartItems(newCartItems)
    } else {
      const newCartItems = [...cartItems, item]
      setCartItems(newCartItems)
    }
  }

  //remove item from cart
  const onRemoveFromCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
    if (existingCartItems.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== item.id)
  }
} 

  //add to likes

  const onAddToLikes = (item) => {
    const yourLikedItems = likedItems.find((liked) => liked.id === item.id)
    if (yourLikedItems) {
      const newLikedItems = likedItems.map((liked) => 
      liked.id === item.id ? {...yourLikedItems, item} : liked
      ) 
      setLikedItems(newLikedItems)
    } else {
      const newLikedItems = [...likedItems, item]
      setLikedItems(newLikedItems)
    }
  }
 //add to dislikes
  return (
    isBack ? back : front
  )
}