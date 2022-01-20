const Header = ({showPosts, setShowPosts, showUsers, setShowUsers, showComments, setShowComments}) => {

  const showHidePosts = () => {
    setShowPosts(true);
    setShowUsers(false);
    setShowComments(false);
  }

  const showHideUsers = () => {
    setShowUsers(true);
    setShowPosts(false);
    setShowComments(false);
  }

  const showHideComments = () => {
    setShowComments(true);
    setShowUsers(false);
    setShowPosts(false);
  }

  return ( 
    <div className="header">

      <button onClick={ !showPosts ? () => showHidePosts() : null }>Posts</button>
      <button onClick={ !showUsers ? () => showHideUsers() : null }>Users</button>
      <button onClick={ !showComments ? () => showHideComments() : null }>Comments</button>

    </div>
   );
}
 
export default Header;