import React, { Component } from "react";
import "./History.css";

class History extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <div>
                <h3>History</h3>

            </div>
            <div className="list-group-history">
            <a
              href="#"
              className="list-group-item list-group-item-action li"
              aria-current="true"
            >
              The current link item
            </a>
          
            <a href="#" className="list-group-item list-group-item-action li">
              A second link item
            </a>
          
            <a href="#" className="list-group-item list-group-item-action li">
              A third link item
            </a>
          
            <a href="#" className="list-group-item list-group-item-action li">
              A fourth link item
            </a>
          
            <a href="#" className="list-group-item list-group-item-action li">
              A fifth link item
            </a>
          
          </div>
          </React.Fragment>
        );
    }
}
 
export default History;
