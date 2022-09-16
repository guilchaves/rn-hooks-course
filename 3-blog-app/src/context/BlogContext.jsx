import React from 'react';

const BlogContext = React.createContext();

/**
 * @param {prop} children is a React feature that send the nested component
 * as a prop called children
 * @returns Provider with children components
 */
export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' },
    { title: 'Blog Post #3' },
    { title: 'Blog Post #4' },
  ];

  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;
