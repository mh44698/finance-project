import React, { useState, useEffect } from 'react';
import './App.css';



function MajorIndexes() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://financialmodelingprep.com/api/v3/majors-indexes'
    );
    const items = await data.json();
    setItems(items.majorIndexesList);
  }
  return (
        <div className="financial-loser">
        <table align="center">
        <thead>
        <tr>
        <th className="table-header">Symbol</th>
        <th className="table-header">Index Name</th>
        <th className="table-header">Price</th>
        <th className="table-header">Change</th>
        </tr>
        </thead>
        <tbody>
     {items.map(item => (
        <tr key={item.ticker}>
        <td>{item.ticker}</td>
        <td>{item.indexName}</td>
        <td>$ {item.price}</td>
        <td>$ {item.changes}</td>
        </tr>
     ))}
     </tbody>
     </table>
    </div>
  );
}

export default MajorIndexes;