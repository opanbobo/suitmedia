import React from 'react';
import logo from '../components/logo.png'; // with import

const Posts = ({ posts, loading, totalPosts }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <p>showing 1 - 10 of {totalPosts}</p>
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <img src={logo} />
          {post.title}
        </li>
      ))}
    </ul>
    </div>
    
  );
};

export default Posts;
