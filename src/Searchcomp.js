import React from "react";
import './Searchcomp.css';

function Searchcomp() {

  const handleChange = e => {
     var cards = document.querySelectorAll('.card');
     var searchValue = e.target.value.toLowerCase();
     cards.forEach(function(card){
        if(!(card.id.toLowerCase().includes(searchValue))){
          card.classList.add("dN");
        }else{
          card.classList.remove("dN");
        }
     });
  };
     return( 
        <div className="searchDiv">
        <input className="searchPlace" type = "search" onChange = {handleChange} placeholder="search robots"></input>
        </div>
    );
  }

  export default Searchcomp;