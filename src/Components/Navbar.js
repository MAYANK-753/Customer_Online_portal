import React, { Component } from "react";
import "./Navbar.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import imagee from "../images/search.png";

const isLoggedIn = true;
const customerName = "Shivaani";
const Zipcode = "110091";
class Navbar extends Component {
  // const feedURL = "";
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pentair
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
              
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/customer/detail">
                  Feedback
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              
              <button id="search-btn"  type="submit">
              <img id="search-img" src={imagee} />  
              </button>
            </form>
          </div>
        </div>
        {
          <div>
            <Popup
              trigger={
                <button className="btn btn-outline-success" type="submit">
                  {customerName}
                </button>
              }
              position="bottom center"
            >
              <div>
                {customerName}
                <br/>
                
                {Zipcode}
                 </div>
              <button>Close </button>
            </Popup>

          </div>
        }
        
      </nav>
    );
  }
}

export default Navbar;
