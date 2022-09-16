import React from 'react';

const BlogContext = React.createContext();

/**
 * @param {prop} children is a React feature that send the nested component
 * as a prop called children
 * @returns Provider with children components
 */
export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
