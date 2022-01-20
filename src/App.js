import './App.css';
import Header from './Header';

import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState('posts');
  const [showPosts, setShowPosts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect((url) => {
    
    const fetchItems = async (url) => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw Error("did not receive data");
        }
        const listItems = await response.json();
        setData(listItems);
      } catch(err) {
        console.log(err.message);
      } 
    }

    fetchItems(`https://jsonplaceholder.typicode.com/${dataCategory}`);

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
