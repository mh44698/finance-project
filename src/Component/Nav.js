import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
 <nav>
       <ul className="nav-links">
           <Link to="/about">
               <li>About</li>
           </Link>

           <Link to="/StockLosers">
               <li>Stock Losers</li>
           </Link>

           <Link to="/StockWinners">
               <li>Stock Winners</li>
           </Link>

           <Link to="/MajorIndexes">
               <li>Major Indexes</li>
           </Link>

           <Link to="/StockDetail">
               <li>Stock Detail</li>
           </Link>

       </ul>
   </nav>
  );
}

export default Nav;