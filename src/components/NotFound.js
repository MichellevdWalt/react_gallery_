import React from 'react';
import unicorn from './images/unicorn1.jpg'
import {NavLink} from 'react-router-dom'

//Returns error page
function NotFound(){
    
    return(
        
        <div className="notfound">
            <img src={unicorn} alt="error" id="unicorn"></img>
            <h1> Woops, this page doesn't exist </h1>
            <h2> Error 404</h2>
            <NavLink to= "/" className="error_btn">Home</NavLink>
        </div>
    )
}

export default NotFound;