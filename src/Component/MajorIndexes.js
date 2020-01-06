import React, { useState, useEffect } from 'react';



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
     {items.map(item => (
        <h1>
        {item.ticker} - {item.indexName}<br></br>
        Price ${item.price}<br></br>
        Changes ${item.changes}
        </h1>
        
     ))}
    </div>
  );
}

export default MajorIndexes;