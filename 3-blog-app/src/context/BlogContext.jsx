import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

/**
 * @param {prop} children is a React feature that send the nested component
 * as a prop called children
 * @returns Provider with children components
 */
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
