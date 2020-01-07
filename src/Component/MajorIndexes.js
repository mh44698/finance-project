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
    console.log("majorindex",items.majorIndexesList)
    setItems(items.majorIndexesList);
  }
  return (
    <div>
        <table >
     {items.map(item => (
        <tr>
        <th>{item.ticker}</th>
        <th>{item.indexName}</th>
        <th>$ {item.price}</th>
        <th>$ {item.changes}</th>
        </tr>
     ))}
     </table>
    </div>
  );
}

export default MajorIndexes;