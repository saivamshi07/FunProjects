import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoboFriendsHeader from './RoboFriendsHeader';
import reportWebVitals from './reportWebVitals';
import Cardouter from './Cardouter.js';
import './Card.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
      <div id = 'hearderDiv' className='innerDiv'>
        <RoboFriendsHeader heading = {'ROBOFIENDS'} />
       </div>
       <div id = 'cardsDiv' className='innerDiv'>
       <div className="cardDiv">
         <Cardouter/>
       </div>
       </div>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
