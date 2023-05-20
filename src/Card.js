import React, { Component } from "react";
import './Card.css';

class Card extends Component {
    render() {
     return( 
       <div className="card" id ={this.props.uName}>
         <img src = {`https://robohash.org/${this.props.uId}?size=200x200`} className="image"></img>
         <div className="cardDetail">
              <h1>{this.props.uName}</h1>
              <p>{this.props.email}</p>
         </div>
       </div>
     );
    }
  }

  export default Card;