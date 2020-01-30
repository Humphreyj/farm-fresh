import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import FarmerLogin from './components/FarmerLogin';
import FarmerRegistration from './components/FarmerRegistration';
import Farms from './components/Farms';
import  { Route, Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
      <Link to='/'>Home</Link>
      
      
      <Route exact  path='/' component={Home} />
      <Route  path='/login-user' component={Login} />
      <Route  path='/login-farmer' component={FarmerLogin} />
      <Route  path='/register-user' component={Registration} />
      <Route  path='/register-farmer' component={FarmerRegistration} />
      <Route  path='/farms' component={Farms} />
    
      </div>
    </Router>
    
    
  );
}

export default App;