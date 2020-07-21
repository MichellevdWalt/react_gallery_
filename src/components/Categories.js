import React from 'react';
import {NavLink} from 'react-router-dom';

//Renders buttons and links them to their search.
function Categories() {
    return(
    <div className= "categories">
        <nav className= "main-nav">
            <ul>
                    <li className= "main-nav"><NavLink to= "/search=landscape">Landscape</NavLink></li>
                    <li className= "main-nav"><NavLink to= "/search=plants">Plants</NavLink></li>
                    <li className= "main-nav"><NavLink to= "/search=animals">Animals</NavLink></li>
            </ul> 
        </nav>
    </div>
    );
}

export default Categories;