import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo15.png';
import Navbar from 'react-bootstrap';
function NavBar() {
 return (
  <div>

   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
     <NavLink className="nav-link" aria-current="page" to="/portfolio22">
      <img src={logo} alt="" width="225" height="54"></ img>
     </NavLink>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ">
       <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/portfolio22">Home</NavLink>
       </li>
       <li class="nav-item">
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
       </li>
       <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
       </li>
       {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
         data-bs-toggle="dropdown" aria-expanded="false">
         More...
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li><a class="dropdown-item" href="./languages.html">Languages</a></li>
         <li><a class="dropdown-item" href="./education.hmtl">Education</a></li>
        </ul>
       </li> */}
      </ul>
     </div>
    </div>
   </nav>
  </div>

 )
}

export default NavBar;