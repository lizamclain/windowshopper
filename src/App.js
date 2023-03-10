import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Likes from "./components/Likes";
import Cart from "./components/Cart";
import AddItem from "./components/AddItem";
import WindowShop from './components/WindowShop';

function App() {

  //State 
  const [itemList, setItemList] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [likedItems, setLikedItems] = useState([])
  const [dislikedItems,setDislikedItems] =useState([])
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isWindowShop, setIsWindowShop] = useState(false);
  const [index, setIndex] = useState(0);

  // Fetch Database of Items and store in State
  useEffect(() => {
  fetch("http://localhost:3000/items")
    .then(r => r.json())
    .then(data => setItemList(data))
  },[isWindowShop])

 //add new item to list
 const handleAddItem = (newItem) => {
  setItemList([...itemList, newItem])
}

//Dark Mode
  function handleDarkMode() {
    setDarkMode(prev => !prev);
    toggleDarkMode()
  }

  // Function Toggle Class For Dark Mode
  function toggleDarkMode() {
    isDarkMode ? document.body.classList.remove("AppDark") : document.body.classList.add("AppDark")
  }

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Login setCurrentUser={setCurrentUser} setCartItems={setCartItems} setLikedItems={setLikedItems} setDislikedItems={setDislikedItems}/>}
        />
        <Route 
          path="/signup" 
          element={<SignUp setCurrentUser={setCurrentUser}/>}
        />
        <Route 
          path="/shop" 
          element={(
          <Shop 
              handleDarkMode={handleDarkMode}
              isDarkMode={isDarkMode}
              isWindowShop={isWindowShop}
              setIsWindowShop={setIsWindowShop}
              itemList={itemList} 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              likedItems={likedItems}
              setLikedItems={setLikedItems}
              dislikedItems={dislikedItems} 
              setDislikedItems={setDislikedItems}
              index={index}
              setIndex={setIndex}
              currentUser={currentUser}
          />
              )}
        />
        <Route
          path="/likes"
          element={<Likes likedItems={likedItems} 
          setLikedItems={setLikedItems} 
          dislikedItems={dislikedItems} 
          setDislikedItems={setDislikedItems}
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
          currentUser={currentUser}
          cartItems={cartItems}
          setCartItems={setCartItems}
          />}

          
        />
        <Route 
          path="/cart"
          element={<Cart 
            cartItems={cartItems} 
            setCartItems={setCartItems} 
            currentUser={currentUser}
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
            likedItems={likedItems}
            setLikedItems={setLikedItems}
            dislikedItems={dislikedItems}
            setDislikedItems={setDislikedItems}
          />}
        />
        <Route
          path="/addItem"
          element={<AddItem 
            handleAddItem={handleAddItem}
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
          />}
        />
        <Route
          path="/windowshop"
          element={<WindowShop
              handleDarkMode={handleDarkMode}
              isDarkMode={isDarkMode}
              isWindowShop={isWindowShop}
              setIsWindowShop={setIsWindowShop}
              itemList={itemList}
              setItemList={setItemList} 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              likedItems={likedItems}
              setLikedItems={setLikedItems}
              dislikedItems={dislikedItems} 
              setDislikedItems={setDislikedItems}
              index={index}
              setIndex={setIndex}
              currentUser={currentUser}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
