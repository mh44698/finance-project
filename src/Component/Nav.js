import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
 <nav>
       <ul className="nav-links">
            <Link style={navStyle} to="/">
               <li>Home</li>
           </Link>

           <Link style={navStyle} to="/StockWinners">
               <li>Bullish Stocks</li>
           </Link>

           <Link style={navStyle} to="/StockLosers">
               <li>Bearish Stocks</li>
           </Link>

           <Link style={navStyle} to="/MajorIndexes">
               <li>Major Indexes</li>
           </Link>

       </ul>
   </nav>
  );
}

export default Nav;