import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import image1 from "../images/download.jpeg";
import image2 from "../images/download.jpeg";
import image3 from "../images/download.jpeg";
import image4 from "../images/download.jpeg";
import image5 from "../images/download.jpeg";
import image6 from "../images/download.jpeg";
// import React from 'react';


import "./ProductList.css";




const name = "shivaani";
const product = [
  {
    id: 1,
    name: "Product 1",
    quantity:0,     
    value: false
    
  },
  {
    id: 2,
    name: "Product 2",
    quantity:0,
    value: false
   
  },
  {
    id: 3,
    name: "Product 3",
    quantity:0,
    value: false
   
  },
  {
    id:4,
    name:"product 4",
    quantity:0,
    value: false

  },
  {
    id: 5,
    name: "Product 5",
    quantity:0,
    value: false
   
  },
  {
    id: 6,
    name: "Product 6",
    quantity:0,
    value: false
   
  },
  

  
];




const ProductList = () => {
const handleClick = (productName, productId) => {
  console.log("Button clicked!");
  console.log("Customer Name:", {name});
  console.log("Product ID:", {productId});
  console.log("Product Name:", {productName});
  // console.log("Address");
 
  
};
const [val, setVal] = useState(true);

const handleChange = () => {
  setVal(!val);
};



  { 
        return (
          <React.Fragment>
          <Navbar/>
          <a href="#" className="btn btn-primary"onClick={() => handleClick(product[1].name, product[1].id)}>
                Request Now
              
            </a>

<div className="py-5">

  <div className="container">
    <div className="row hidden-md-up">

      <div className="col-md-4" key={product.id}>
        <div className="card">
        <input type="radio" checked={product[0].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image1} alt=" " />
            <h4 className="card-title">{product[0].name}</h4>
         <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            <p className="card-text p-y-1">
              Some quick example text to build on the card title .
            </p>
           

           
          </div>
        </div>
      </div>
     
    
      <div className="col-md-4"key={product.id}>
        <div className="card">
        <input type="radio" checked={product[1].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image2} alt="Card image cap" />
            <h4 className="card-title">{product[1].name}</h4>
            <h6 className="card-subtitle text-muted">Pentair pump </h6>
            <p className="card-text p-y-1">
              Size:1
            </p>
           
            
          </div>
        </div>
      </div>
      <div className="col-md-4"key={product.id}>
        <div className="card">
        <input type="radio" checked={product[2].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image3} alt="Card image cap" />
            <h4 className="card-title">{product[2].name}</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            <p className="card-text p-y-1">
              Some quick example text to build on the card title .
            </p>
          
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-4"key={product.id}>
        <div className="card">
        <input type="radio" checked={product[3].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image4} alt="Card image cap" />
            <h4 className="card-title">{product[3].name}</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            <p className="card-text p-y-1">
              Some quick example text to build on the card title .
            </p>
          
          </div>
        </div>
      </div>
      <div className="col-md-4"key={product.id}>
        <div className="card">
        <input type="radio" checked={product[4].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image5} alt="Card image cap" />
            <h4 className="card-title">{product[4].name}</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            <p className="card-text p-y-1">
              Some quick example text to build on the card title .
            </p>
           
            
            
          </div>
        </div>
      </div>
      <div className="col-md-4"key={product.id}>
        <div className="card">
        <input type="radio" checked={product[5].value} onClick={handleChange} />
          <div className="card-block">
          <img className="card-img-top" src={image6} alt="Card image cap" />
            <h4 className="card-title">{product[5].name}</h4>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            <p className="card-text p-y-1">
              Some quick example text to build on the card title .
            </p>
           
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</React.Fragment>
            
        );
    }
}
 
export default ProductList ;




