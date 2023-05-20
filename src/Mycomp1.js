import React, { Component } from "react";
import './Mycomp1.css';

class Mycomp1 extends Component {
    render() {
     return( <div className='alignCenter'>
        {this.props.data}
      </div>);
    }
  }

  export default Mycomp1;