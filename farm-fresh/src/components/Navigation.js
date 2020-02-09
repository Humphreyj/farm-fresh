import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const Div = styled.div `
background:#1f7a1f ;
margin: 0 auto;
height: 80px;
font-size: 1.3rem;
padding-top: 10px;

.nav-link{
  text-decoration: none ;
  float: left;
  padding-top: 10px;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  transition: all 0.3s ease;
  

}

a:hover{
    color: #a6a6a6;

  }

`


function Navigation() {
  return (
    <Div id="TopNav" className="navigation">
      <NavLink className="nav-link" to="/farmer-dashboard">Dashboard</NavLink>
      <NavLink className="nav-link" to="/products">Products</NavLink>
    <NavLink className="nav-link" to="/farms">Farms</NavLink> 
      {/* <NavLink className="nav-link" to="/inventory">Inventory</NavLink>  */}
      <NavLink className="nav-link" to="/cart">Cart</NavLink>
     
    </Div>
  );
}



export default Navigation;

