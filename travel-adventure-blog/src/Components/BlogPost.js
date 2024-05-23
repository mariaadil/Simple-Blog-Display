import React from 'react';
import './BlogPost.css'; // Import CSS file for styling

const BlogPost = ({ post }) => {
  // Set background images based on the post title
  const getBackgroundImage = (title) => {
    switch (title) {
      case 'Exploring the Amazon Rainforest':
        return 'url("https://source.unsplash.com/featured/?amazon,rainforest")';
      case 'Trekking in the Himalayas':
        return 'url("https://source.unsplash.com/featured/?himalayas,trekking")';
      case 'Diving in the Great Barrier Reef':
        return 'url("https://source.unsplash.com/featured/?greatbarrierreef,diving")';
      default:
        return 'url("https://source.unsplash.com/random")';
    }
  };

  return (
    <div className="blog-post-container" style={{ backgroundImage: getBackgroundImage(post.title) }}>
      <div className="blog-post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <a href="#" className="read-more-btn">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
