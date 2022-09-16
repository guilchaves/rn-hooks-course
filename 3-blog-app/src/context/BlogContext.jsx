import React, { useState } from 'react';

const BlogContext = React.createContext();

/**
 * @param {prop} children is a React feature that send the nested component
 * as a prop called children
 * @returns Provider with children components
 */
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
