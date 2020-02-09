
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";
import FarmerInventory from './farmer/FarmerInventory';
// import NavigationFarmer from "./NavigationFarmer";

const Container = styled.div`

  width: 80%;
  margin: 2em auto;
  padding: 10px;
  box-shadow: 4px 4px 4px 8px #888888;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Cabin', sans-serif;
  }

  .info {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
      .contact {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    
      .address {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        div {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
    
      }

    
  }


.user-buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1em;
}
  button {
    width: 10%;
    color: white;
    height: 2.2em;
    background-color:  #1f7a1f;
   
  }

`

export default function Farmer() {
  let id = localStorage.getItem("farmId");
  let name = localStorage.getItem('userId')
  const [farmer, setFarmer] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`https://farm-fresh-produce-api.herokuapp.com/api/farms/${id}`)
      .then(response => {
        console.log(response);
        setFarmer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    
  }, []);

  const logOut = (e) => {
    localStorage.clear();
    window.location.reload();
  }
  return (
  <Container className="dashboard">

      
      <div className="title">
        <h3>Welcome, {name}</h3>
        <h3>{farmer.farm_name}</h3>
      </div>
      <div className="info">
        <div className="contact">
          <p>Phone Number: {farmer.phone_number} </p>
          <p>Email: {farmer.email}</p>
        </div>
        <div className="address">
          <div>
            <p>Address: {farmer.address}</p>
            <p>City: {farmer.city}</p>
          </div>
          <div>
            <p>State: {farmer.state}</p>
            <p>Zip Code: {farmer.zipcode}</p>
          </div>
         
          
        </div>
        
        
        <div className="user-buttons">
          <button className = "edit">Edit Info</button>
          <button 
          className = "logoout"
          onClick={e =>logOut()}
          >Log Out</button>
        </div>
        
        <FarmerInventory />
      </div>
    </Container>
  );
}


