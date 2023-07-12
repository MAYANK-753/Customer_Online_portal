import React, { Component } from "react";
import { VscHistory } from "react-icons/";

import "./DealerRequest.css";
import Icon from './icon';
import Downicon from './downicon';
import History from "./History";


const name = "shivaani";
const productId = "[1,2,3]";
const Zipcode = "201002"
class DealerRequest extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>

<div>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">DealerRequest</span>
    <Downicon/>
    <Icon />
  </div>
</nav>

</div>
<div className="list-group">
  <p className="table-cont common" >Customer Name</p>
  {/* <br></br> */}
  <p className="table-cont common" >Product Id</p>
  {/* <br></br> */}
  <p className="table-cont common" >Zipcode</p>
  {/* <br></br> */}
  <p className="table-cont common" >Accept</p>
  {/* <br></br> */}
  <p className="table-cont common" >Reject</p>
  {/* <hr></hr> */}
</div>
<div>
<div className="list-group">
            <p
            
              className="listItem common"
              aria-current="true"
            >
              {name}
            </p>
          
            <p className="listItem common">
              {productId}
            </p>
          
            <p className="listItem common">
              {Zipcode}
            </p>
            {/* <button>close</button> */}
          
            <button className="btn-dealer common">
              Accept
            </button>
          
            <button className="btn-dealers common">
              Reject
            </button>
            <br></br>
          
          </div>
          <div className="list-group">
            <p
            
            className="listItem common"
            aria-current="true"
          >
            {name}
          </p>
        
          <p className="listItem common">
            {productId}
          </p>
        
          <p className="listItem common">
            {Zipcode}
          </p>
          {/* <button>close</button> */}
        
          <button className="btn-dealer common">
            Accept
          </button>
        
          <button className="btn-dealers common">
            Reject
          </button>
          </div>

          <div className="list-group">
            <p
            
            className="listItem common"
            aria-current="true"
          >
            {name}
          </p>
        
          <p className="listItem common">
            {productId}
          </p>
        
          <p className="listItem common">
            {Zipcode}
          </p>
          {/* <button>close</button> */}
        
          <button className="btn-dealer common">
            Accept
          </button>
        
          <button className="btn-dealers common">
            Reject
          </button>
          </div>

  </div>
  <hr>
    </hr>
  <History/>
</React.Fragment>


        );
    }
}
 
export default DealerRequest ;