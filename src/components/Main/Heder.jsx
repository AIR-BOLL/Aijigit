import React from "react";
import Produkt from '../Product/Produkt';
import { BrowserRouter, Link } from "react-router-dom";


export default function Main() {
  return (
    <div>
        <header class="header">
    <div class="container">
      <h1 class="logo">Game Store</h1>
      <nav class="nav">
      
        
       <a href="/" class="nav-link">Home</a>
       <a href="#produkt" class="nav-link">Products</a>
        <a href="#l" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
        
       
      </nav>
      </div>
  </header>
    </div>)

    ;
}