import './App.css';
import Header from './Header';

import { useState, useEffect } from 'react';

function App() {

  const BASE_URL = 'https://jsonplaceholder.typicode.com/';
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState('posts');

  const fetchItems = async () => {
    try {
      const response = await fetch(`${BASE_URL}${dataCategory}`);
      if(!response.ok){
        throw Error("did not receive data");
      }
      const listItems = await response.json();
      setData(listItems);
    } catch(err) {
      console.log(err.message);
    } 
  }

  useEffect(() => {
    
    fetchItems();

  }, [dataCategory])


  return (
    <div className="app-container">
      <Header 
        dataCategory={dataCategory}
        setDataCategory={setDataCategory}
      />
      <div>
      <ul>
        {data && data.map(item => 
          <li key={item.id} style={{paddingBottom: 10}}>
            { JSON.stringify(item) }
          </li>  
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
