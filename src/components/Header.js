import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Header({handleDarkMode, isDarkMode}) {

  const navigate = useNavigate();
  const handleBackToShop = () => {
    navigate("/shop");
}

  return (
    <>
      <Navbar class="me-auto" bg="bg-custom-light" expand="sm" id="custom">
        <Container>
          <Navbar.Brand id="custom" onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="ms-auto" pullRight>
            <button class="btn btn-dark me-2" id="custom-btn" onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
            <NavLink to="/shop"><button class="btn btn-dark me-2" id="custom-btn">Shop</button></NavLink>
            <NavLink to='/addItem'><button class="btn btn-dark me-2" id="custom-btn">List An Item</button></NavLink>
            <NavLink to="/likes"><button class="btn btn-dark me-2" id="custom-btn">Likes/Dislikes</button></NavLink>
            <NavLink to="/cart"><button class="btn btn-dark" id="custom-btn">Cart</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}