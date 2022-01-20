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
        <div className='flex-div column pb-20'>
          {data && data.map(item =>
            <div className='flex-div' key={item.id}>
              {Object.values(item) && Object.values(item).map(i =>
                <div className='content-div'>{JSON.stringify(i)}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
