import './App.css';
import Header from './Header';

import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [showPosts, setShowPosts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async (url, setData) => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw Error("did not receive data");
        }
        const listItems = await response.json();
        setData(listItems);
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems('https://jsonplaceholder.typicode.com/posts', setPosts);
    fetchItems('https://jsonplaceholder.typicode.com/users', setUsers);
    fetchItems('https://jsonplaceholder.typicode.com/comments', setComments);

  }, [])


  return (
    <div className="app-container">
      <Header 
        showPosts={showPosts}
        setShowPosts={setShowPosts}
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        setComments={setComments}
        setShowComments={setShowComments}
      />
      <div>
      <ul>
        {posts && showPosts && posts.map(post => 
          <li key={post.id}>
            { JSON.stringify(post) }
          </li>  
        )}
        </ul>
      </div>
      <div>
        <ul>
        {users && showUsers && users.map(user => 
          <li key={user.id}>
            { JSON.stringify(user) }
          </li>  
        )}
        </ul>
      </div>
      <div>
        <ul>
        {comments && showComments && comments.map(comment => 
          <li key={comment.id}>
            { JSON.stringify(comment) }
          </li>  
        )}
        </ul>
      </div>


    </div>
  );
}

export default App;
