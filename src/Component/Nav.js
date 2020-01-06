import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
 <Nav>
       <h3>Logo here</h3>
       <ul className="nav-links">
           {/* <Link style={navStyle} to="/about">
               <li>About</li>
           </Link> */}
           {/* <Link style={navStyle} to="/StockDetail"> */}
           <li >StockDetail</li>
            {/* </Link> */}
       </ul>
   </Nav>
  );
}

export default Nav;