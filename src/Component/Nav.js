import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
 <nav>
       <ul className="nav-links">

           <Link style={navStyle} to="/about">
               <li>About</li>
           </Link>

           <Link style={navStyle} to="/StockWinners">
               <li>Stock Winners</li>
           </Link>

           <Link style={navStyle} to="/StockLosers">
               <li>Stock Losers</li>
           </Link>

           <Link style={navStyle} to="/MajorIndexes">
               <li>Major Indexes</li>
           </Link>

           <Link style={navStyle} to="/StockDetail">
               <li>Stock Detail</li>
           </Link>

       </ul>
   </nav>
  );
}

export default Nav;