import React, { Component } from "react";
import Searchcomp from './Searchcomp.js'
import './RoboFriendsHeader.css';

class RoboFriendsHeader extends Component {
    render() {
     return( 
      <div className="heading">
        <h1 className="headerName">{this.props.heading}</h1>
        <Searchcomp/>
      </div>
    );
    }
  }

  export default RoboFriendsHeader;