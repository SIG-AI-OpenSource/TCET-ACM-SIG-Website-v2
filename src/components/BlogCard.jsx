import React from 'react';

// Blog card component receives a single 'blog' object as a prop
function BlogCard({ blog }) {
  const imageUrl = blog.Image?.url || 'placeholder.png'; // Use a placeholder if image is missing
  const imageAlt = blog.Image?.filename || 'Blog Image';
  const detailUrl = `/blogs/${blog.slug}`; // Assuming a dynamic link

  return (
    <div className="card">
      <a href={detailUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={imageUrl} 
          alt={imageAlt} 
        />
      </a>
      <div className="card-content">
        <p className="yellow-text">By {blog.authorRole}</p> 
        <a href={detailUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="blue-title">{blog.title}</h2>
        </a>
        <p>{blog.smallDescription}</p>
      </div>
    </div>
  );
}

export default BlogCard;