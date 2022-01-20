const Header = ({dataCategory, setDataCategory}) => {

  const changeDataCategory = (category) => {
    setDataCategory(category);
  }

  return ( 
    <div className="header">
      <button onClick={ dataCategory !== 'posts' ? () => changeDataCategory('posts') : null }>Posts</button>
      <button onClick={ dataCategory !== 'users' ? () => changeDataCategory('users') : null }>Users</button>
      <button onClick={ dataCategory !== 'comments' ? () => changeDataCategory('comments') : null }>Comments</button>
    </div>
   );
}
 
export default Header;